import { ReducerWithoutAction } from "react"
import { Task } from "../contexts/type"

type ActionType = {
  type: String,
  payload?: String | Boolean | { id: String, value: String | Boolean }
}

type TaskReducerType = (state: Array<Task>, action: ActionType) => Array<Task>

const taskReducer: TaskReducerType = (state, action) => {
  switch (action.type) {
    default: // nothing
      return state
  }
}

export { taskReducer as default, ActionType }