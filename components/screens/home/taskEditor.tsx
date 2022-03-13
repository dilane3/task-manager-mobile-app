import { Text, TextInput, TouchableOpacity, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from "./styles/taskEditorStyle"
import { useContext, useState } from "react"
import taskContext from "../../../dataManager/contexts/taskContext"
import { addTask } from "../../../dataManager/data/actions"

const TaskEditor = () => {
  // Set Local state
  const [ taskValue, setTaskValue ] = useState("")

  // Get data from the global state
  const { dispatch } = useContext(taskContext)

  const handleAddTask = () => {
    // Add the new task inside the global state
    dispatch(addTask(taskValue))

    // reset the form
    setTaskValue("")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.editorTitle}>New Task</Text>

      <View style={styles.editor}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Add new task" 
          selectionColor="#3e4bff"
          value={taskValue} 
          onChangeText={(text) => setTaskValue(text)}  
        />
        <TouchableOpacity 
          style={styles.btn} 
          activeOpacity={.8}
          onPress={handleAddTask}  
        >
          <Ionicons style={styles.btnIcon} name="add-circle-outline" />
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TaskEditor