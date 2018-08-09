import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar';
import axios from 'axios';

class Inventory extends React.Component {
    constructor (props) {
        super(props);
        this.state = { areas: [] };
    }

    componentDidMount(){
        axios.get('/inventory/area')
            .then( response => {
                console.log(response);
                this.setState ({
                    areas: response.data
                });
            })
    } 

    render() {
        return (
            <div className='inventory'>
                <div className='navBar'>
                    <NavBar />
                </div>
                <div className='invenOverview'>
                    <h2>Inventory</h2>
                    <p>Real time look at areas, sections, and bottles</p>
                    {/* <Link><input type="button" className="btn" value="Add Area"/></Link>
                    <Link><input type="button" className="btn" value="Run Inventory"/></Link> */}
                    <div className='areaOverview'>
                        <div className='area'>
                            <div className='areaList'>
                                <ul>
                                    {this.state.areas.map(area => (
                                        <li key={area.id}>{area.label}</li>
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

export default Inventory;