import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

import TaskRow from './TaskRow';

@inject('taskStore')
@observer
class taskList extends Component {
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
        {list}
      </div>
    );
  }
}

export default taskList;
