export default class Task {
  constructor(description) {
    this.id = this.generateId();
    this.description = description;
  }
  generateId() {
    const array = JSON.parse(localStorage.getItem("tasks")) || [];
    const lastIndex = array.length > 0 ? array[array.length - 1].id : 0;
    return lastIndex + 1;
  }
}
