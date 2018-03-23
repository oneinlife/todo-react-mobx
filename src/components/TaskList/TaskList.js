import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

import TaskRow from './TaskRow';

@inject('taskStore')
@observer
class taskList extends Component {
  createTask = () => {
    const {taskStore} = this.props;

    taskStore.create();
  }

  render() {
    const {taskStore} = this.props;
    const list = taskStore.filtresTasks.map((task, index) => {
        return (
            <div key={index}>
              <TaskRow task={task}/>
            </div>
        );
    });

    return (
      <div className="Contener">
        <div onClick={this.createTask}>
          Добавить
        </div>
        {list}
      </div>
    );
  }
}

export default taskList;
