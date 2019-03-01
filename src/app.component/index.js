import './index.scss';

class Controller {
  static get $inject() {
    return ['NotificationService', 'StoreService'];
  }

  constructor(NotificationService, StoreService) {
    this.NotificationService = NotificationService;
    this.StoreService = StoreService;
    this.title = '';
    this.tasks = this.StoreService.todos;
  }

  addToDo() {
    console.log(this.title);

    if (this.title.length > 4) {
      this.StoreService.addToDo(this.title);
      this.NotificationService.show('success', 'Task added!');
      this.title = '';
    } else {
      this.NotificationService.show('error', 'No short tasks :)');
    }
  }

  deleteToDo(index) {
    this.NotificationService.show('error', 'Task deleted!');
    this.tasks.splice(index, 1);
    this.StoreService.removeFromToDo(index);
  }
}

export default {
  controller: Controller,
  template: require('./index.html'),
};
