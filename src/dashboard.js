import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './navBar';
import axios from 'axios';

class DashBoard extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            beers: [], 
            wines: [],
            liquors: [],
            mixers: []
        };
    }

    componentDidMount(){
        axios.get('/alcohol/1')
            .then( response => {
                console.log(response);
                this.setState ({
                    beers: response.data
                });
            })
        axios.get('/alcohol/2')
            .then( response => {
                console.log(response);
                this.setState ({
                    wines: response.data
                });
            })
        axios.get('/alcohol/3')
        .then( response => {
            console.log(response);
            this.setState ({
                liquors: response.data
            });
        })
        axios.get('/alcohol/4')
        .then( response => {
            console.log(response);
            this.setState ({
                mixers: response.data
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
                                <h3>List of Beer</h3>
                                <ul>
                                    {this.state.beers.map(beer => (
                                        <li key={beer.id}>{beer.bevname}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                            <div className='wineOverview'>
                                <div className='wineList'>
                                    <h3>List of Wine</h3>
                                        <ul>
                                            {this.state.wines.map(wine => (
                                                <li key={wine.id}>{wine.bevname}</li>
                                            ))}
                                        </ul>
                                </div>
                            </div>
                            <div className='liquorOverview'>
                                <div className='liquorList'>
                                    <h3>List of Liquor</h3>
                                        <ul>
                                            {this.state.liquors.map(liquor => (
                                                <li key={liquor.id}>{liquor.bevname}</li>
                                            ))}
                                        </ul>
                                </div>
                            </div>
                            <div className='mixerOverview'>
                                <div className='mixerList'>
                                    <h3>List of Mixers</h3>
                                        <ul>
                                            {this.state.mixers.map(mixer => (
                                                <li key={mixer.id}>{mixer.bevname}</li>
                                            ))}
                                        </ul>
                                </div>
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