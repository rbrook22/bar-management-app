import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './homepage';
import AreaPage from './area';
import DashBoard from './dashboard';
import Venue from './venue';
import Reports from './reports';
import Personnel from './personnel';
import VenueSettings from './venueSettings';
import SignIn from './signin';
import SignUp from './signup';
import AddArea from './addArea';
import AddSection from './addSection';
import AddPlacement from './placement';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/venue" component={Venue} />
        <Route path="/reporting" component={Reports} />
        <Route path="/personnel" component={Personnel} />
        <Route path="/venueSettings" component={VenueSettings} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/area/:area_id" exact={true} component={AreaPage} />
        <Route path="/addarea" component={AddArea} />
        <Route path="/area/:area_id/addsection" component={AddSection} />
        <Route path="/area/:area_id/:section_id/placement" component={AddPlacement} />
      </div>
    );
  }
}

export default App;