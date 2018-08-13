import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddPlacement extends React.Component {
    constructor() {
        super();
        this.state = {
            beverages: []
        }
    }
    componentDidMount() {
        this.handleChange()
    }

    handleChange= () => {
        axios.get(`/section/placement`)
        .then( response => {
            console.log(response);
            this.setState ({
                beverages: response.data
            });
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
            </div>
        );
    }
}

export default AddPlacement;