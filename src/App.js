import React, { Component } from 'react';
// import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="HomePage">
          <HomePage />
        </div>
        
      </div>
    );
  }
}

export default App;