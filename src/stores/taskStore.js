import {observable, computed} from 'mobx';

import filterStore from './filterStore';

class tasktore {
  @observable tasks;

  constructor(initialtask) {
    this.tasks = {
      0:  {id: 0, title: 'first'},
      1:  {id: 1, title: 'second'},
      2:  {id: 2, title: 'third'},
      3:  {id: 3, title: 'fourth'},
      4:  {id: 4, title: 'fifth'},
      5:  {id: 5, title: 'sixth'},
      6:  {id: 6, title: 'seventh'},
      7:  {id: 7, title: 'eighth'},
      8:  {id: 8, title: 'ninth'},
      9:  {id: 9, title: 'tenth'},
    }
  }

  @computed get filtresTasks() {
    const {search} = filterStore;

    return Object.values(this.tasks).filter(({title}) => title.toLowerCase().includes(search));
  }

  update = (index, newProps) => {
    this.tasks[index] = {...this.tasks[index], ...newProps};
  }
}

export default new tasktore();