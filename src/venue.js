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
            <div className='container'>
                <div className='navBar'>
                    < NavBar barClickHandler={this.props.barClickHandler} />
                </div>
                <div className='wrapper'>
                    <div className="company-info">
                        <h1 className="foundTitle">Venue</h1>
                        <p>Real time look at areas, sections, and bottles</p> 
                    </div>
                    {/* <Link><input type="button" className="btn" value="Run Inventory"/></Link>  */}
                    <div className='Grid'>
                        <div className='Grid-item'>
                            <div className='Card'>
                            <Link className='addArea' to={`/addarea`} style={{ textDecoration: 'none' }}><p>Add Area</p></Link>
                            <ul>
                                {this.state.areas.map(area => (
                                    <li key={area.id}><Link to={`/area/${area.id}/` } style={{ textDecoration: 'none' }}>{area.label}</Link>
                                    <br></br>
                                        <button className='areaDel' type="button" value={area.id} onClick={this.deleteArea}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Venue;