import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject('taskStore')
@observer
class TaskRow extends Component {
  update = props => {
    const {taskStore, task: {id}} = this.props;

    taskStore.update(
      id,
      props     
    );
  }

  render() {
    const {task: {title, edit}} = this.props;
    const output = edit ? 
      <input
       autoFocus
       defaultValue={title}
       onBlur={() => {this.update({edit: false})}}
       onChange={({target: {value}}) => {this.update({title: value})}}/> :
      <div
       onClick={() => {this.update({edit: true})}}>
        {title}
      </div>;

    return (
      <div className={'Contener'}>
        {output}
      </div>
    );
  }
}

export default TaskRow;
