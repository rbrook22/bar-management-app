import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ToggleButton from './ToggleButton';


class NavBar extends React.Component {
    
    handleLogOut = () => {
        axios.post('/logout')
        .then(res => {
            console.log(res);
            this.props.history.push('/')
        }).catch((error) => {
            console.log(error);
        })
    }
    render(){
        return (
        // Below renders buttons which link to route paths identified in app.js
        <header className='navbar'>
            <nav className='navbar_navigation'>
                <div className='navbar_toggle-button'>
                    <ToggleButton click={this.props.barClickHandler}/>
                </div>
                <div className='navbar_logo'><a><span className="bev">Bev</span>Simply</a></div>
                <div className='spacer'></div>
                <div className='navbar_navigation-items'>
                    <ul className='btn'>
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}><li>Dashboard</li></Link>
                    <Link to="/venue" style={{ textDecoration: 'none' }}><li>Venue</li></Link>
                    <Link to="/reporting" style={{ textDecoration: 'none' }}><li>Reporting</li></Link>
                    <Link to="/personnel" style={{ textDecoration: 'none' }}><li>Personnel</li></Link>
                    <Link to="/venueSettings" style={{ textDecoration: 'none' }}><li>Settings</li></Link>
                    <Link to="/" onClick={this.handleLogOut}><li>Log Out</li></Link>
                    </ul>
                </div>
            </nav>
        </header>
        );
    }
}

export default NavBar;