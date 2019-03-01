export default class StoreService {
  constructor() {
    this.title = '';
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
  }

  updateToDo() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeFromToDo(index) {
    console.log(this.todos);
    localStorage.removeItem('tudos', this.todos.indexOf((index), 1));
    this.updateToDo();
  }

  addToDo(title) {
    this.title = title;
    this.todos.push({ todo: title });
    this.updateToDo();
  }
}
