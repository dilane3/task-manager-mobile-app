import { Text, View } from "react-native"
import TaskEditor from "../../components/screens/home/taskEditor"
import TaskList from "../../components/screens/home/taskList"
import styles from "./style"

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TaskEditor />

      <TaskList />
    </View>
  )
}

export default HomeScreen