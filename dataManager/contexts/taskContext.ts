import { Task } from './type';
import { createContext, Dispatch, DispatchWithoutAction } from "react";
import { ActionType } from '../data/taskReducer';

type TaskContextType = {
  tasks: Array<Task>,
  dispatch: Dispatch<ActionType>
}

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  dispatch: () => {}
})

export { TaskContext as default, TaskContextType }