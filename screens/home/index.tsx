import { Text, View } from "react-native"
import TaskEditor from "../../components/screens/home/taskEditor"
import styles from "./style"

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TaskEditor />
    </View>
  )
}

export default HomeScreen