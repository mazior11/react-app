import React, { Component } from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import UserAdd from '../containers/user-add';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserList/>
        <UserDetail/>
        <UserAdd/>
      </div>
    );
  }
}

export default App;
