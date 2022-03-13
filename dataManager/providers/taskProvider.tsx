import { useReducer } from "react"
import TaskContext, { TaskContextType } from "../contexts/taskContext"
import taskReducer from "../data/taskReducer"

type TaskProviderPropType = {
  children: JSX.Element
}

const TaskProvider = ({ children }: TaskProviderPropType) => {
  // Set the local state
  const [tasks, dispatch] = useReducer(taskReducer, [])

  // Set the value of the context of task
  const taskContextValue: TaskContextType = {
    tasks,
    dispatch
  }

  return (
    <TaskContext.Provider value={taskContextValue}>
      { children }
    </TaskContext.Provider>
  )
}

export default TaskProvider