import {observable, computed} from 'mobx';

class TodoList {
  //@observable todos;

  constructor(initialTodos) {
    this.todos = [
        {title: 'first'},
        {title: 'second'}
    ]
  }
}

export default new TodoList();