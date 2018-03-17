import {observable, computed} from 'mobx';

import filterStore from './filterStore';

class TodoStore {
  @observable todos;

  constructor(initialTodos) {
    this.todos = [
        {title: 'first'},
        {title: 'second'},
        {title: 'third'},
        {title: 'fourth'},
        {title: 'fifth'},
        {title: 'sixth'},
        {title: 'seventh'},
        {title: 'eighth'},
        {title: 'ninth'},
        {title: 'tenth'},
    ]
  }

  @computed get filtresTodos() {
    const {search} = filterStore;

    return this.todos.filter(({title}) => title.toLowerCase().includes(search));
  }
}

export default new TodoStore();