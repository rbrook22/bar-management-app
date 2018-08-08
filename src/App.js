import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './homepage';
import AreaPage from './area';
import DashBoard from './dashboard';
import Inventory from './inventory';
import Reports from './reports';
import Personnel from './personnel';
import Venue from './venue';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/area" component={AreaPage} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/reporting" component={Reports} />
        <Route path="/personnel" component={Personnel} />
        <Route path="/venue" component={Venue} />
      </div>
    );
  }
}

export default App;