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

    componentDidMount() {
        this.handleReporting()
    }

    handleReporting = () => {
        axios.get('/reporting')
        .then((res) => {
            this.setState({
                allPlacements: res.data
            })
        })
    }
    render() {
        return (
            <div className='reportsPage'>
                <div className='navBar'>
                    < NavBar barClickHandler={this.props.barClickHandler} />
                </div>
                <div className='overview'>
                <div className='cardD'>
                    <h2>Reporting</h2>
                    <p>View reports and usage</p>
                    <div className='usageReport'>
                        {/* <Link><p>Run Usage Report</p></Link> */}
                    </div>
                    <div className='reportsOverview'>
                        <table>
                            <tr>
                                <th>Beverage Name</th>
                                <br></br>
                                <th>Quantity</th>
                            </tr>

                            {this.state.allPlacements.map(placement => (
                                    <tr>
                                        <td>{placement.label}</td>
                                        <br></br>
                                        <td>{placement.quantity}</td>
                                    </tr>
                                )
                            )}
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reports;