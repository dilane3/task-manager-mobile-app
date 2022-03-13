import { ADD_TASK } from './type';
import Task from '../../entities/task';

type ActionType = {
  type: String,
  payload?: String | Boolean | { id: String, value: String | Boolean }
}

type TaskReducerType = (state: Array<Task>, action: ActionType) => Array<Task>

const taskReducer: TaskReducerType = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      if (action.payload && typeof action.payload === 'string') {
        // Generate a new id
        const id = state.length === 0 ? 1 : state[state.length - 1].getId + 1

        // Create a new task
        const task = new Task(id, action.payload)

        // Clone the previows state
        const stateClone = [...state]

        // Add the task
        stateClone.push(task)

        console.log({stateClone, task})

        return stateClone
      }

      return state
    }

    default: // nothing
      return state
  }
}

export { taskReducer as default, ActionType }