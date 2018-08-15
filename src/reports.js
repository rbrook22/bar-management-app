import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './navBar';

class Reports extends React.Component {
    constructor() {
        super()
        this.state = {
            label: '',
            quantity: 0
        }
    }
    render() {
        return (
            <div className='reportsPage'>
                <div className='navBar'>
                    <Route path="/" component={NavBar} />
                </div>
                <div className='overview'>
                    <h2>Reporting</h2>
                    <p>View reports and usage</p>
                    <div className='usageReport'>
                        {/* <Link><p>Run Usage Report</p></Link> */}
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