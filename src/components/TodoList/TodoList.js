import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject('todoStore')
@observer
class TodoList extends Component {
  render() {
    const {todoStore} = this.props;
    const list = todoStore.filtresTodos.map((todo, index) => {
        return (
            <div key={index}>{todo.title}</div>
        );
    });

    return (
      <div className="Contener">
        {list}
      </div>
    );
  }
}

export default TodoList;
