import { ScrollView, Text, View } from "react-native"
import styles from "./styles/taskListStyle"
import Task from "./task"

const TaskList = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>List of task</Text>

      <View>
        <Task />
        <Task />
      </View>
    </ScrollView>
  )
}

export default TaskList