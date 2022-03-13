import { Switch, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from "./styles/taskStyle"
import { useState } from "react"
import TaskEntity from '../../../entities/task'

type TaskPropType = ({task}: {task: TaskEntity}) => JSX.Element

const Task: TaskPropType = ({ task }) => {

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
          // onValueChange={handleChangeValueOfSwitch}
        />
        <Text style={styles.tastText}>{ task.getValue }</Text>
      </View>

      <Ionicons style={styles.taskMenu} name="ellipsis-vertical" />
    </View>
  )
}

export default Task