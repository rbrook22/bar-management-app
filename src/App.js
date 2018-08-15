import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
import NavBar from './navBar';
import SideBar from './SideBar';
import Backdrop from './Backdrop';
import UpdateQuantity from './updateQuantity';


class App extends Component {
  constructor(props) {
    super(props)
    
    
    this.state = {
      sideBarOpen: false
    };

  }

  toggleButtonClickHandler = () => {
    console.log('ToggleButton');
    this.setState((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideBarOpen: false})
  };

  render() {
    let sideBar;
    let backdrop;

    if (this.state.sideBarOpen) {
      <NavBar barClickHandler={this.toggleButtonClickHandler}/>
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: '100%' }}>
        <SideBar show={this.state.sideBarOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/dashboard" render={(props) => <DashBoard {...props} barClickHandler={this.toggleButtonClickHandler} click={this.backdropClickHandler} /> } />
          <Route path="/venue" render={(props) => <Venue {...props} barClickHandler={this.toggleButtonClickHandler} click={this.backdropClickHandler} /> } />
          <Route path="/reporting" render={(props) => <Reports {...props} barClickHandler={this.toggleButtonClickHandler} click={this.backdropClickHandler} /> } />
          <Route path="/personnel" render={(props) => <Personnel {...props} barClickHandler={this.toggleButtonClickHandler} click={this.backdropClickHandler} /> } />
          <Route path="/venueSettings" render={(props) => <VenueSettings {...props} barClickHandler={this.toggleButtonClickHandler} click={this.backdropClickHandler} /> } />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/area/:area_id" exact={true} render={(props) => <AreaPage {...props} barClickHandler={this.toggleButtonClickHandler} click={this.backdropClickHandler} /> } />
          <Route path="/addarea" component={AddArea} />
          <Route path="/area/:area_id/addsection" component={AddSection} />
          <Route path="/area/:area_id/:section_id/placement" component={AddPlacement} />
          <Route path="/section/placement/:placementId" component={UpdateQuantity} />
        </main>
      </div>
    );
  }
}

export default App;