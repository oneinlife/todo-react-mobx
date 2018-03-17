import {observable} from 'mobx';

class FilterStore {
  @observable search;

  constructor(initialTodos) {
    this.search = '';
  }

  setSearch = value => {
      this.search = value.toLowerCase();
  }
}

export default new FilterStore();