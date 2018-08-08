import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from './navBar';

class Personnel extends React.Component {
    render() {
        return (
            <div className='personnelPage'>
                <div className='navBar'>
                    <NavBar />
                </div>
                <div className='overview'>
                    <h2>Personnel</h2>
                    <p>Employees with access to your organization</p>
                    <div className='inviteUser'>
                        <Link><input type="button" className="btn" value="Invite User"/></Link>
                    </div>
                    <div className='personnelOverview'>
                        <p>Employee Name</p>
                        <p>Email</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Personnel;