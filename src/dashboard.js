import React from 'react';
import {Link, Route} from 'react-router-dom';
import NavBar from './navBar';
import axios from 'axios';

class DashBoard extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            placements: []
            // beers: [], 
            // wines: [],
            // liquors: [],
            // mixers: []
        };
    }

    componentDidMount(){
        var areaId = this.props.match.params.area_id;
        axios.get(`/venue/${areaId}/section/placements`)
        .then((res) => {
            this.setState({
                placements: res.data
            })
        })
        // axios.get('/alcohol/2')
        //     .then( response => {
        //         console.log(response);
        //         this.setState ({
        //             wines: response.data
        //         });
        //     })
        // axios.get('/alcohol/3')
        // .then( response => {
        //     console.log(response);
        //     this.setState ({
        //         liquors: response.data
        //     });
        // })
        // axios.get('/alcohol/4')
        // .then( response => {
        //     console.log(response);
        //     this.setState ({
        //         mixers: response.data
        //     });
        // })
    } 

    render() {
        return (
            <div className='dashBoard'>
                <div className='navBar'>
                    <Route path="/" component={NavBar} />
                </div>
                <div className='overview'>
                    <h2>Dashboard</h2>
                    <p>An overview of your venue</p>
                    <div className='inventoryOverview'>
                        <div className='beerOverview'>
                            <div className='beerList'>
                                <h3>List of Current Stock</h3>
                                <ul>
                                    {this.state.placements.map(placements => (
                                        <li key={placements.id}>{placements.label}</li>
                                    ))}
                                </ul>
                            </div>
                        {/* </div>
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
                            </div> */}
                        </div>
                        <div className='snapShots'>
                            <Link to="/reporting"><p>View detailed report</p></Link>
                        </div>
                    </div>
            </div>
        </div>
        );
    }
}

export default DashBoard;