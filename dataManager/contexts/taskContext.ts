import Task from "../../entities/task";
import { createContext, Dispatch, DispatchWithoutAction } from "react";
import { ActionType } from '../data/taskReducer';

type TaskContextType = {
  tasks: Array<Task>,
  currentTask: Task | null,
  dispatch: Dispatch<ActionType>,
  selectTask: (id: number) => void
}

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  currentTask: null,
  dispatch: () => {},
  selectTask: (id) => {}
})

export { TaskContext as default, TaskContextType }