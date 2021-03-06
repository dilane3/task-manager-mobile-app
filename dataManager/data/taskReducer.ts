import { ADD_TASK, MARK_TASK, DELETE_TASK } from './type';
import Task from '../../entities/task';

type ActionType = {
  type: String,
  payload?: number | String | Boolean | { id: number, value: String | Boolean }
}

type TaskReducerType = (state: Array<Task>, action: ActionType) => Array<Task>

const taskReducer: TaskReducerType = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      if (action.payload && typeof action.payload === 'string') {
        // Generate a new id
        const id = state.length === 0 ? 1 : state[0].getId + 1

        // Create a new task
        const task = new Task(id, action.payload)

        // Clone the previows state
        const stateClone = [...state]

        // Add the task
        stateClone.unshift(task)

        return stateClone
      }

      return state
    }

    case MARK_TASK: {
      if (action.payload) {
        const {
          id,
          value
        } = action.payload as { id: number, value: boolean }

        // Get the index (position) of the given task
        const index = state.findIndex(task => task.getId === id)

        // Condition if the task exist
        if (index > -1) {
          // Clone the state
          const stateClone = [...state]

          // Set the state of the task
          stateClone[index].setMarked(value)

          return stateClone
        }
      }

      return state
    }

    case DELETE_TASK: {
      console.log(action.payload)
      console.log(state)
      if (action.payload) {
        console.log("je suis la")
        const newState = state.filter(task => task.getId !== action.payload)

        return newState
      }

      return state
    }

    default: // nothing
      return state
  }
}

export { taskReducer as default, ActionType }