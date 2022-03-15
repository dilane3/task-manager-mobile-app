import { Switch, Text, TouchableOpacity, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from "./styles/taskStyle"
import TaskEntity from '../../../entities/task'
import { useContext } from "react"
import taskContext from "../../../dataManager/contexts/taskContext"
import { markTask } from "../../../dataManager/data/actions"
import Animated, { Easing, Layout, SlideInRight, SlideOutLeft, SlideOutRight } from "react-native-reanimated"
import navigationContext from "../../../dataManager/contexts/navigationContext"

type TaskPropType = ({task}: {task: TaskEntity}) => JSX.Element

const Task: TaskPropType = ({ task }) => {
  // Get data from the global state
  const { dispatch, selectTask } = useContext(taskContext)
  const { changeModalVisible } = useContext(navigationContext)

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

  return (
    <Animated.View 
      style={styles.container}
      entering={SlideInRight}
      layout={Layout.springify()}
      exiting={SlideOutRight.duration(100)}  
    >
      <View style={styles.leftSection}>
        <Switch 
          value={task.getMarked} 
          thumbColor={task.getMarked ? "#3e4bff" : "#eee"}
          trackColor={{
            false: "#ced4da",
            true: "#48cae4"
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
  )
}

export default Task