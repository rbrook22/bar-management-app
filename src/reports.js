import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './navBar';
import axios from 'axios';

class Reports extends React.Component {
    constructor() {
        super()
        this.state = {
            allPlacements: []
        }
    }

    // componentDidMount(){
    //     handleReporting()
    // }

    // handleReporting = () => {
    //     axios.get('/reporting')
    //     .then((res) => {
    //         this.setState({
    //             allPlacements: res.data
    //         })
    //     })
    // }
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
                        <table>
                            <tr>
                                <th>Beverage Name</th>
                                <th>Quantity</th>
                            </tr>

                            {this.state.allPlacements.map(placement => 
                                <div>
                                    <tr>
                                        <td>{placement.label}</td>
                                    </tr>
                                    <tr>
                                        <td>{placement.quantity}</td>
                                    </tr>
                                </div>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reports;