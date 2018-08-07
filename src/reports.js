import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from './navBar';

class Reports extends React.Component {
    render() {
        return (
            <div className='reportsPage'>
                <div className='navBar'>
                    <NavBar />
                </div>
                <div className='overview'>
                    <h2>Reporting</h2>
                    <p>View reports and usage</p>
                    <div className='usageReport'>
                        <p>Run Usage Report</p>
                    </div>
                    <div className='reportsOverview'>
                        <p>Here will show a thing which has information</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reports;