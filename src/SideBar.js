import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './sideBar.css';

const sideBar = props => {
    let barClasses = ['side-bar'];
    if (props.show){
        barClasses = 'side-bar open';
    }
    return (
        <nav className={barClasses}>
            <ul>
                <Link to="/dashboard"><input type="button" className="btn" value="Dashboard"/></Link>
                <Link to="/venue"><input type="button" className="btn" value="Venue"/></Link>
                <Link to="/reporting"><input type="button" className="btn" value="Reporting"/></Link>
                <Link to="/personnel"><input type="button" className="btn" value="Personnel"/></Link>
                <Link to="/venueSettings"><input type="button" className="btn" value="Settings"/></Link>
                <input type="button" className="btn" value="Log Out" onClick={this.handleLogOut}/>
            </ul>
        </nav>
    )
};

export default sideBar;

