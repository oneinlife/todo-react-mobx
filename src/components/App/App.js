import React, { Component } from 'react';

import TaskList from '../TaskList/TaskList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='contenerList'>
          <TaskList/>
        </div>
      </div>
    );
  }
}

export default App;
