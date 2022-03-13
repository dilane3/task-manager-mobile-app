import { Switch, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from "./styles/taskStyle"
import TaskEntity from '../../../entities/task'
import { useContext } from "react"
import taskContext from "../../../dataManager/contexts/taskContext"
import { markTask } from "../../../dataManager/data/actions"

type TaskPropType = ({task}: {task: TaskEntity}) => JSX.Element

const Task: TaskPropType = ({ task }) => {
  // Get data from the global state
  const { dispatch } = useContext(taskContext)

  const handleMarkTask = () => {
    // Change the state of the task
    dispatch(markTask(task.getId, !task.getMarked))
  }

  return (
    <View style={styles.container}>
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

      <Ionicons style={styles.taskMenu} name="ellipsis-vertical" />
    </View>
  )
}

export default Task