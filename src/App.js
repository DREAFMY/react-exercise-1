import React, { Component } from 'react';
import UserHead from './component/userHead';
import UserInfo from './component/userInfo';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="app">
        <UserHead />
        <UserInfo />
      </main>
    );
  }
}

export default App;
