import React, { Component } from 'react';
import {inject} from 'mobx-react';
import {toJS} from 'mobx';

@inject('todoList')
class TodoList extends Component {
  render() {
    const {todoList} = this.props;
    const html = todoList.todos.map(todo => {
        return (
            <div>{todo.title}</div>
        );
    });

    return (
      <div className="Contener">
        {html}
      </div>
    );
  }
}

export default TodoList;
