import React, { Component } from 'react';

import TaskList from '../TaskList/TaskList';
import Filter from '../Filter/Filter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filter/>
        <TaskList/>
      </div>
    );
  }
}

export default App;
