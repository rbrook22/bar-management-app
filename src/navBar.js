import React from 'react';
// import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        // Below renders buttons which link to route paths identified in app.js
        <div>
            <Link to="/dashboard"><input type="button" className="btn" value="Dashboard"/></Link>
            <Link to="/inventory"><input type="button" className="btn" value="Inventory"/></Link>
            <Link to="/reporting"><input type="button" className="btn" value="Reporting"/></Link>
            <Link to="/personnel"><input type="button" className="btn" value="Personnel"/></Link>
            <Link to="/venue"><input type="button" className="btn" value="Venue"/></Link>
            <Link to="/logout"><input type="button" className="btn" value="Log Out"/></Link>
        </div>
    );
}

export default NavBar;