import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './sideBar.css';

const sideBar = props => (
    <nav className='side-bar'>
        <ul>
            <Link to="/dashboard"><input type="button" className="btn" value="Dashboard"/></Link>
            <Link to="/venue"><input type="button" className="btn" value="Venue"/></Link>
            <Link to="/reporting"><input type="button" className="btn" value="Reporting"/></Link>
            <Link to="/personnel"><input type="button" className="btn" value="Personnel"/></Link>
        </ul>
    </nav>
);

export default sideBar;

