import React, { Component } from 'react';
import {inject} from 'mobx-react';

import TodoList from '../TodoList/TodoList';
import './App.css';

@inject('todoList')
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList/>
      </div>
    );
  }
}

export default App;
