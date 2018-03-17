import React, { Component } from 'react';

import TodoList from '../TodoList/TodoList';
import Filter from '../Filter/Filter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filter/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
