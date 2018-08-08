import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className='Home'>
                    <h1>BevSimply</h1>
                </div>
                <div className='logins'>
                    <Link to='/signup'><p>Sign up</p></Link>
                    <Link to='/signin'><p>Sign in</p></Link>
                </div>
            </div>
        );
    }
}

export default HomePage;