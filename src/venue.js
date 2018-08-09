import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar';
import axios from 'axios';

class Venue extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            areas: [],
            sections: []
         };
    }

    componentDidMount(){
        // axios.get('/venue/area')
        //     .then( response => {
        //         console.log(response);
        //         this.setState ({
        //             areas: response.data
        //         });
        //     })
        axios.get('/venue/2/areas')
            .then( response => {
                console.log(response);
                this.setState ({
                    areas: response.data
                });
            })    
        axios.get('/venue/2/section')
            .then( response => {
                console.log(response);
                this.setState ({
                    sections: response.data
                });
            })    
    } 

    render() {
        return (
            <div className='venue'>
                <div className='navBar'>
                    <NavBar />
                </div>
                <div className='venueOverview'>
                    <h2>Venue</h2>
                    <p>Real time look at areas, sections, and bottles</p>
                    {/* <Link><input type="button" className="btn" value="Add Area"/></Link>
                    <Link><input type="button" className="btn" value="Run Inventory"/></Link> */}
                    <div className='areaOverview'>
                        <div className='area'>
                            <p>This is first area</p>
                        </div>
                        <div className='areaList'>
                            <ul>
                                {this.state.areas.map(area => (
                                    <li key={area.id}>{area.label}</li>
                                ))}
                                    <ul>
                                        {this.state.sections.map(section => (
                                            <li key={section.id}>{section.label}</li>
                                        ))}
                                    </ul>
                            </ul>   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Venue;