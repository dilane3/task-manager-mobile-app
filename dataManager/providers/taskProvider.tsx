import { useReducer, useState } from "react"
import Task from "../../entities/task"
import TaskContext, { TaskContextType } from "../contexts/taskContext"
import taskReducer from "../data/taskReducer"

type TaskProviderPropType = {
  children: JSX.Element
}

const TaskProvider = ({ children }: TaskProviderPropType) => {
  // Set the local state
  const [tasks, dispatch] = useReducer(taskReducer, [])
  const [currentTask, setCurrentTask] = useState<Task | null>(null)

  // Actions
  const handleSelectTask = (id: number) => {
    const task = tasks.find(t => t.getId === id)

    setCurrentTask(task ? task : null)
  }

  // Set the value of the context of task
  const taskContextValue: TaskContextType = {
    tasks,
    currentTask,
    dispatch,
    selectTask: (id) => handleSelectTask(id)
  }

  return (
    <TaskContext.Provider value={taskContextValue}>
      { children }
    </TaskContext.Provider>
  )
}

export default TaskProvider