import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from './navBar';

class DashBoard extends React.Component {
    render() {
        return (
            <div className='dashBoard'>
                <div className='navBar'>
                    <NavBar />
                </div>
                <div className='overview'>
                    <h2>Dashboard</h2>
                    <p>An overview of your venue</p>
                    <div className='inventoryOverview'>
                        <div className='beerOverview'>
                            <p>List of beer</p>
                        </div>
                        <div className='wineOverview'>
                            <p>List of Wine</p>
                        </div>
                        <div className='liquorOverview'>
                            <p>List of Liquor</p>
                        </div>
                    </div>
                    <div className='snapShots'>
                        <p>Recent Snapshots</p>
                        <Link to="/reporting"><p>View All</p></Link>
                        <p>Here is a recent snapshot</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;