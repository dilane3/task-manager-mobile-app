import { useContext, useEffect, useRef } from "react"
import { ScrollView, Text, View } from "react-native"
import taskContext from "../../../dataManager/contexts/taskContext"
import styles from "./styles/taskListStyle"
import Task from "./task"

const TaskList = () => {
  // Get data from the global state
  const { tasks } = useContext(taskContext)

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>List of task</Text>

      <View style={styles.taskList}>
        {
          tasks.map(task => {
            return <Task key={task.getId} task={task} />
          })
        }
      </View>
    </ScrollView>
  )
}

export default TaskList