import { Switch, Text, TouchableOpacity, useWindowDimensions, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from "./styles/taskStyle"
import TaskEntity from '../../../entities/task'
import React, { useContext } from "react"
import taskContext from "../../../dataManager/contexts/taskContext"
import { markTask } from "../../../dataManager/data/actions"
import Animated, {
  cond,
  Easing,
  interpolate, 
  interpolateColor, 
  interpolateColors, 
  Layout, 
  SlideInRight, 
  SlideOutLeft, 
  SlideOutRight, 
  useAnimatedGestureHandler, 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring, 
  withTiming 
} from "react-native-reanimated"
import navigationContext from "../../../dataManager/contexts/navigationContext"
import { PanGestureHandler } from "react-native-gesture-handler"

type TaskPropType = ({task}: {task: TaskEntity}) => JSX.Element
type ContextType = {
  x: number
}

const Task: TaskPropType = ({ task }) => {
  // Get data from the global state
  const { dispatch, selectTask } = useContext(taskContext)
  const { changeModalVisible } = useContext(navigationContext)

  // use Dimensions
  const { width: windowWidth } = useWindowDimensions()

  // Some constants
  const WINDOWWIDTH = windowWidth
  const MINIMUMWIDTH = 100

  // Set Shared value
  const translationX = useSharedValue(0)

  const handleMarkTask = () => {
    // Change the state of the task
    dispatch(markTask(task.getId, !task.getMarked))
  }

  const handleSelectTask = () => {
    // select the task
    selectTask(task.getId)

    // show the modal
    changeModalVisible()
  }

  const eventHandler = useAnimatedGestureHandler({
    onStart: (_, context: ContextType) => {
      context.x = translationX.value
    },
    onActive: (event, context) => {
      console.log(event.translationX)
      if (event.translationX > 0) {
        translationX.value = context.x + event.translationX
      }
    },
    onEnd: () => {
      translationX.value = withTiming(0, {duration: 300})
    }
  })

  // Define some animated styles
  const translationStyle = useAnimatedStyle(() => {
    return ({
      transform: [
        {
          translateX: interpolate(
            translationX.value, 
            [0, MINIMUMWIDTH], 
            [0, MINIMUMWIDTH], 
            "clamp" 
          )
        }
      ]
    })
  })

  const taskBackgroundStyle = useAnimatedStyle(() => {
    return ({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: interpolateColor(
        translationX.value, 
        [0, MINIMUMWIDTH],
        ["#fff", "#ef233c"]
      ) as string
    })
  })

  const taskBackgroundIconStyle = useAnimatedStyle(() => {
    return ({
      transform: [
        {
          scale: interpolate(
            translationX.value, 
            [0, MINIMUMWIDTH], 
            [.5, 1.2], 
            "clamp" 
          )
        },
        {
          translateX: interpolate(
            translationX.value, 
            [0, MINIMUMWIDTH], 
            [-40, 0], 
            "clamp" 
          )
        }
      ],
      opacity: interpolate(
        translationX.value, 
        [0, MINIMUMWIDTH], 
        [.4, 1], 
        "clamp" 
      )
    })
  })

  return (
    <Animated.View 
      style={styles.container}
      entering={SlideInRight}
      layout={Layout.springify()}
      exiting={SlideOutRight.duration(100)}    
    >
      <Animated.View 
        style={[taskBackgroundStyle]}
      >
        <Animated.View style={[styles.containerBackgroundIcon, taskBackgroundIconStyle]}>
          <Ionicons name="trash" size={25} color="#fff" />
        </Animated.View>
      </Animated.View>

      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View 
          style={[styles.containerIn, translationStyle]}
        >
          <View style={styles.leftSection}>
            <Switch 
              value={task.getMarked} 
              thumbColor={task.getMarked ? "#3e4bff" : "#eee"}
              trackColor={{
                false: "#ced4da",
                true: "#90e0ef"
              }}
              onValueChange={handleMarkTask}
            />
            <Text style={[styles.taskText, task.getMarked && styles.taskMaked]}>{ task.getValue }</Text>
          </View>

          <TouchableOpacity 
            style={styles.taskMenu}  
            onPress={handleSelectTask}
            activeOpacity={.6}
          >
            <Ionicons
              style={styles.taskMenuIcon}
              name="ellipsis-vertical" 
            />
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  )
}

export default Task