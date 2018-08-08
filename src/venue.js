import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from './navBar';

class Venue extends React.Component {
    render() {
        return (
            <div className='venuePage'>
                <div className='navBar'>
                    <NavBar />
                </div>
                <div className='overview'>
                    <h2>Settings</h2>
                    <div className='venueInfo'>
                        <div className='accountInfo'>
                            <div className='accInfo'>
                            <p>Account information here</p>
                            </div>
                            <div className='establishmentInformation'>
                            <p>Establishment information here</p>
                            </div>
                        </div>
                            <div className='subscriptionInformation'>
                            <p>Subscription information here</p>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Venue;