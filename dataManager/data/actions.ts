import {
  ADD_TASK,
  MARK_TASK,
  DELETE_TASK,
  UPDATE_TASK
} from "./type"
import { ActionType } from "./taskReducer"

const addTask: (value: String) => ActionType = (value) => {
  return {
    type: ADD_TASK,
    payload: value
  }
}

const markTask: (id: number, value: Boolean) => ActionType = (id, value) => {
  return {
    type: MARK_TASK,
    payload: {
      id,
      value
    }
  }
}

const deleteTask: (id: number) => ActionType = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  }
}

const updateTask: (id: number, value: String) => ActionType = (id, value) => {
  return {
    type: UPDATE_TASK,
    payload: {
      id,
      value
    }
  }
}

export {
  addTask,
  markTask,
  deleteTask,
  updateTask
}