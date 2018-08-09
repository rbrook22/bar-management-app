import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './navBar';
import axios from 'axios';

class DashBoard extends React.Component {
    constructor (props) {
        super(props);
        this.state = { beers: [] };
    }

    componentDidMount(){
        axios.get('/1')
            .then( response => {
                console.log(response);
                this.setState ({
                    beers: response.data
                });
            })
    } 

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
                             <div className='beerList'>
                                <ul>
                                    {this.state.beers.map(beer => (
                                        <li key={beer.id}>{beer.bevname}</li>
                                    ))}
                                </ul>
                            </div>
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