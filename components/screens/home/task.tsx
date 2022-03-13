import { Switch, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from "./styles/taskStyle"
import { useState } from "react"

const Task = () => {
  // Set Local state
  const [marked, setMarked] = useState(false)

  const handleChangeValueOfSwitch = () => {
    console.log(marked)
    setMarked(prev => !prev)
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Switch 
          value={marked} 
          thumbColor={marked ? "#3e4bff" : "#eee"}
          trackColor={{
            false: "#ced4da",
            true: "#48cae4"
          }}
          onValueChange={handleChangeValueOfSwitch}
        />
        <Text style={styles.tastText}>Example of task</Text>
      </View>

      <Ionicons style={styles.taskMenu} name="ellipsis-vertical" />
    </View>
  )
}

export default Task