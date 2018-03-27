import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

import TaskRow from './TaskRow';
import Filter from '../Filter/Filter';
import './TaskList.css';

@inject('taskStore')
@observer
class TaskList extends Component {
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
      <div className='Contener'>
        <div className='ContenerHeader'>
          <div className='AddTask'
           onClick={this.createTask}>
            Добавить
          </div>
          <Filter/>
        </div>
        {list}
      </div>
    );
  }
}

export default TaskList;
