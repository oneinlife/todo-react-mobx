import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject('taskStore')
@observer
class TaskRow extends Component {
  constructor (props) {
    super(props);

    this.state = {
      edit: false
    };
  }

  closeEdit = () => {
    console.log('blur');
    this.setState({
      edit: false
    });
  }

  openEdit = () => {
    this.setState({
      edit: true
    });
  }

  titleUpdate = ({target: {value}}) => {
    const {taskStore, task: {id}} = this.props;

    taskStore.update(
      id,
      {title: value}      
    );
  }

  render() {
    const {task: {title}} = this.props;
    const {edit} = this.state;
    const output = edit ? 
      <input
       autoFocus
       defaultValue={title}
       onBlur={this.closeEdit}
       onChange={this.titleUpdate}/> :
      <div
       onClick={this.openEdit}>
        {title}
      </div>;

    return (
      <div className="Contener">
        {output}
      </div>
    );
  }
}

export default TaskRow;
