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
                <div className='navbar_logo'><a>The Logo</a></div>
                <div className='spacer'></div>
                <div className='navbar_navigation-items'>
                    <Link to="/dashboard"><input type="button" className="btn" value="Dashboard"/></Link>
                    <Link to="/venue"><input type="button" className="btn" value="Venue"/></Link>
                    <Link to="/reporting"><input type="button" className="btn" value="Reporting"/></Link>
                    <Link to="/personnel"><input type="button" className="btn" value="Personnel"/></Link>
                    <Link to="/venueSettings"><input type="button" className="btn" value="Settings"/></Link>
                    <input type="button" className="btn" value="Log Out" onClick={this.handleLogOut}/>
                </div>
            </nav>
        </header>
        );
    }
}

export default NavBar;