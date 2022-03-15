import { useContext, useEffect, useRef } from "react"
import { ScrollView, Text, View } from "react-native"
import taskContext from "../../../dataManager/contexts/taskContext"
import styles from "./styles/taskListStyle"
import Task from "./task"

export type ScrollViewRef = ScrollView & {
  flashScrollIndicators: () => void;
};

const TaskList = () => {
  // Get data from the global state
  const { tasks } = useContext(taskContext)

  // UseRef section
  const scrollViewRef = useRef<ScrollViewRef>(null)

  // UseEffect section
  useEffect(() => {
    if (scrollViewRef.current)
      scrollViewRef.current.scrollToEnd({ animated: true })
  }, [tasks])

  return (
    <ScrollView ref={scrollViewRef} style={styles.container}>
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