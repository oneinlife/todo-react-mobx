import {observable, computed} from 'mobx';

class TodoList {
  @observable todos;

  constructor(initialTodos) {
    this.todos = []
  }
}

export default new TodoList();