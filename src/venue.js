import React from 'react';
import { Link, Route } from 'react-router-dom';
import NavBar from './navBar';
import axios from 'axios';


class Venue extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            areas: []
        };
    }

    componentDidMount(){
        this.getAreas()

    }

    getAreas = () => {
        axios.get('/venue/2/areas')
        .then( response => {
            console.log(response);
            this.setState ({
                areas: response.data
            });
        })
    }

    deleteArea = (event) => {
        axios.delete(`/venue/${event.target.value}`)
        .then(response => {
            console.log(response);
            this.getAreas()
        })
    }

    render() {
        return (
            <div className='venue'>
                <div className='navBar'>
                    <Route path="/" component={NavBar} />
                </div>
                <div className='venueOverview'>
                    <h2>Venue</h2>
                    <p>Real time look at areas, sections, and bottles</p>
                    <Link to={`/addarea`}><input type="button" className="btn" value="Add Area"/></Link>
                    {/* <Link><input type="button" className="btn" value="Run Inventory"/></Link>  */}
                    <div className='areaOverview'>
                        <div className='area'>
                            <p>This is first area</p>
                        </div>
                        <div className='areaList'>
                            <ul>
                                {this.state.areas.map(area => (
                                    <li key={area.id}><Link to={`/area/${area.id}/`}>{area.label}</Link>
                                    <br></br>
                                    <input type="button" value={area.id} onClick={this.deleteArea} />
                                    </li>
                                    
                                ))}
                            </ul>   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Venue;