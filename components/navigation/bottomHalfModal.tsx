import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity
} from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
  interpolate,
  runOnJS
} from 'react-native-reanimated'
import {
  PanGestureHandler,
  ScrollView
} from 'react-native-gesture-handler'
import React, { useContext, useEffect } from 'react'
import navigationContext from '../../dataManager/contexts/navigationContext'
import styles from '../screens/home/styles/bottomHalfModalStyle'
import Ionicons from '@expo/vector-icons/Ionicons'

type BottomHalfModalItemPropType = {
  icon: "trash" | "pencil",
  text: string,
  color: string
}

const BottomHalfModalItem = ({ icon, text, color }: BottomHalfModalItemPropType) => {
  return (
    <TouchableOpacity onPress={() => {console.log("hello")}} style={styles.modalItem}>
      <React.Fragment>
        <Ionicons color={color} size={25} style={styles.modalItemIcon} name={icon} />

        <Text style={[styles.modalItemText, { color }]}>{ text }</Text>
      </React.Fragment>
    </TouchableOpacity>
  )
}

const BottomHalfModal = () => {
  const { modalVisible, changeModalVisible } = useContext(navigationContext)
  const dimensions = useWindowDimensions()

  const HEIGHT = dimensions.height
  const MIDDLE = HEIGHT - 150

  const top = useSharedValue(HEIGHT)

  useEffect(() => {
    if (modalVisible) {
      top.value = MIDDLE
    }
  }, [modalVisible])

  const style = useAnimatedStyle(() => {
    return {
      top: withSpring(
        interpolate(top.value, 
          [0, HEIGHT],
          [-20, HEIGHT],
          "clamp"
        )
      ),
      opacity: withSpring(
        interpolate(top.value, 
          [MIDDLE, HEIGHT],
          [1, .6],
          "clamp"
        )
      )
    }
  })

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(
        interpolate(top.value, 
          [MIDDLE, HEIGHT - 120],
          [.6, 0],
          "clamp"
        )
      ),
      transform: [
        {
          translateY: interpolate(top.value, 
            [MIDDLE, HEIGHT],
            [1, 0]
          ) > 0 ? 0 : dimensions.height,
        }
      ]
    }
  })

  const changeModalVisibleWrapper = () => {
    changeModalVisible()
  }

  type contextType = {
    startTop: number
  }

  const eventHandler = useAnimatedGestureHandler({
    onStart: (_, context: contextType) => {
      context.startTop = top.value
    },
    onActive: (event, context) => {
      top.value = context.startTop + event.translationY
    },
    onEnd: () => {
      if (top.value > MIDDLE + 100) {
        top.value = HEIGHT

        runOnJS(changeModalVisibleWrapper)()
      } else if (top.value < MIDDLE - 100) {
        console.log("La")
        top.value = 0
      } else {
        top.value = MIDDLE
      }
    }
  })

  return (
    <>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View
          style={[
            styles.sheet,
            style
          ]}
        >
          <View style={styles.sheetIndicator} />

          <ScrollView
            style={styles.modalContainer}
          >
            <BottomHalfModalItem icon="pencil" text="Update Task" color="#212529" />
            <BottomHalfModalItem icon="trash" text="Delete Task" color="#ef233c" />
          </ScrollView>
        </Animated.View>
      </PanGestureHandler>
  
      <Animated.View 
        style={[
          {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black"
          },
          backgroundStyle
        ]}
      />
    </>
  )
}

export default BottomHalfModal