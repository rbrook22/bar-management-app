import React from 'react';
import { Link } from 'react-router-dom';


import './sideBar.css';

const sideBar = props => {
    let barClasses = ['side-bar'];
    if (props.show){
        barClasses = 'side-bar open';
    }
    return (
        <nav className={barClasses}>
            <ul>
                <Link to="/dashboard" style={{ textDecoration: 'none' }}><li>Dashboard</li></Link>
                <Link to="/venue" style={{ textDecoration: 'none' }}><li>Venue</li></Link>
                <Link to="/reporting" style={{ textDecoration: 'none' }}><li>Reporting</li></Link>
                <Link to="/personnel" style={{ textDecoration: 'none' }}><li>Personnel</li></Link>
                <Link to="/venueSettings" style={{ textDecoration: 'none' }}><li>Settings</li></Link>
                <li onClick={this.handleLogOut}>Log Out</li>
        </ul>
        </nav>
    )
};

export default sideBar;

