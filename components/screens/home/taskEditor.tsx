import { Text, TextInput, TouchableOpacity, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from "./taskEditorStyle"

const TaskEditor = () => {
  return (
    <View style={styles.container}>
      <Text>New Task</Text>

      <View style={styles.editor}>
        <TextInput style={styles.textInput} placeholder="Add new task" selectionColor="#3e4bff" />
        <TouchableOpacity style={styles.btn} activeOpacity={.8}>
          <Ionicons style={styles.btnIcon} name="add-circle-outline" />
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TaskEditor