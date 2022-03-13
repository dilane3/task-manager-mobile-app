import { v4 as uuidv4 } from 'uuid'

class Task {
  /**
   * Identifier of the task
   */
  private id: number

  /**
   * Value of the task
   */
  private value: String

  /**
   * State of the task
   */
  private marked: boolean

  constructor (id: number, value: String) {
    this.id = id
    this.value = value
    this.marked = false
  }

  // Getters and setters

  /**
   * Get the id
   */
  get getId() {
    return this.id
  }

  /**
   * Get the value
   */
  get getValue() {
    return this.value
  }

  /**
   * Get the state
   */
  get getMarked() {
    return this.marked
  }

  /**
   * Set the value of the task
   */
  set setValue(value: String) {
    this.value = value
  }

  /**
   * Set the state of the task
   */
  set setMarked(value: boolean) {
    this.marked = value
  }
}

export default Task