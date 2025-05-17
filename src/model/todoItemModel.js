import { v4 as uuidv4 } from "uuid";
export default class TodoItemModel {
  constructor(taskTitle, taskPriority, taskDescription) {
    this.id = uuidv4();
    this.taskTitle = taskTitle;
    this.taskPriority = taskPriority;
    this.taskDescription = taskDescription;
  }
}
