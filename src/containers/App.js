import React, { Component } from 'react';
import LoginCard from '../components/LoginCard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className='container'>
        <LoginCard />
      </div>
    );
  }
}

export default App;
