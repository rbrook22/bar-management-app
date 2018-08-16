import React from 'react';
import {Route} from 'react-router-dom';
import NavBar from './navBar';
import axios from 'axios';

class VenueSettings extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            venue: []
        };
    }

    componentDidMount(){
        axios.get('/venueSettings/2')
            .then( response => {
                console.log(response);
                this.setState ({
                    venue: response.data
                });
            })       
    }
    render() {
        return (
            <div className='container'>
                <div className='navBar'>
                    < NavBar barClickHandler={this.props.barClickHandler} />
                </div>
                <div className='wrapper'>
                <div className="company-info">
                        <h1 className="foundTitle">Settings</h1>
                    </div>
                    <div className='venueInfo'>
                        <div className='accountInfo'>
                            <div className='accInfo'>
                                <h3>Venue Information</h3>
                                <p>{this.state.venue.label}</p>
                                <p>{this.state.venue.venuelocation}</p>
                                <p>{this.state.venue.phonenumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VenueSettings;