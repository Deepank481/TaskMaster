import { v4 as uuidv4 } from "uuid";
export default class TodoItemModel {
  constructor(taskTitle, taskPriority) {
    this.id = uuidv4();
    this.taskTitle = taskTitle;
    this.taskPriority = taskPriority;
  }
}
