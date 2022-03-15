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
import taskContext from '../../dataManager/contexts/taskContext'
import { deleteTask } from '../../dataManager/data/actions'

type BottomHalfModalItemPropType = {
  icon: "trash" | "pencil",
  text: string,
  color: string,
  onPress?: () => void
}

type contextType = {
  startTop: number
}

const BottomHalfModalItem = ({ icon, text, color, onPress }: BottomHalfModalItemPropType) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.modalItem}>
      <React.Fragment>
        <Ionicons color={color} size={25} style={styles.modalItemIcon} name={icon} />

        <Text style={[styles.modalItemText, { color }]}>{ text }</Text>
      </React.Fragment>
    </TouchableOpacity>
  )
}

const BottomHalfModal = () => {
  // Get data from the global state
  const { modalVisible, changeModalVisible } = useContext(navigationContext)
  const { currentTask, dispatch } = useContext(taskContext)

  // Use dimensions values
  const dimensions = useWindowDimensions()

  const HEIGHT = dimensions.height
  const MIDDLE = HEIGHT - 150

  // Define a shared value for animation
  const top = useSharedValue(HEIGHT)

  // useEffect section
  useEffect(() => {
    if (modalVisible) {
      top.value = MIDDLE
    } else {
      top.value = HEIGHT
    }
  }, [modalVisible])

  // Define animated styles
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
          [MIDDLE, HEIGHT],
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

  // Define an event handle for Pan Responder
  const eventHandler = useAnimatedGestureHandler({
    onStart: (_, context: contextType) => {
      // Set a context animation value
      context.startTop = top.value
    },
    onActive: (event, context) => {
      // Update the position of the bottom modal
      top.value = context.startTop + event.translationY
    },
    onEnd: () => {
      // Some logic while event ended
      if (top.value > MIDDLE + 100) {
        top.value = HEIGHT

        // Run something on the JS thread
        runOnJS(changeModalVisibleWrapper)()
      } else if (top.value < MIDDLE - 100) {
        console.log("La")
        top.value = 0
      } else {
        top.value = MIDDLE
      }
    }
  })

  // Some handlers
  const handleDeleteTask = () => {
    console.log("Hey")
    // Hide modal
    changeModalVisible()
    
    if (currentTask)
      dispatch(deleteTask(currentTask.getId))
  }

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
            <BottomHalfModalItem 
              icon="trash" 
              text="Delete Task" 
              color="#ef233c" 
              onPress={handleDeleteTask}  
            />
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