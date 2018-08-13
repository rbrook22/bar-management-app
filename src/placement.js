import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddPlacement extends React.Component {
    constructor() {
        super();
        this.state = {
            allBevs: [],
            filteredBevs: []
        }
    }
    componentDidMount() {
        axios.get('/beverages')
            .then((res) => {
                this.setState({
                    allBevs: res.data
                })
            })
    }

    handleChange=(e) => {
        this.setState({
            filteredBevs: this.state.allBevs.filter(b => b.bevname.includes(e.target.value))
        }) 
    }
    render() {
        return (
            <div className='addPlacement'>
                <h3>Add Placement</h3>
                <p>Enter new bottle</p>
                <form>
                    <label>
                        Bottle:
                        <input type="text" name="placementName" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Confirm" />
                </form>
                <div>
                    {this.state.filteredBevs.map(b => (<p>{b.bevname}</p>))}
                </div>
            </div>
        );
    }
}

export default AddPlacement;