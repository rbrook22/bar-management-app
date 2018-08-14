import React from 'react';
import axios from 'axios';

class UpdatePlacement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allBeverages: []
        }
    }

    
    
    render() {
        return (
            <div className='updatePlacement'>
                <h3>Update Placement</h3>
                <p>Enter new amounts:</p>
                <form onSubmit={(event) => {event.preventDefault()}}>
                    <label>
                        Full Bottles:
                        <input type="number" placeholder="Full Bottles" step="1" />
                        Partial Bottle Amount:
                        <input type="number" placeholder="Partial Amount" step=".1" />
                    </label>
                    <input type="submit" value="Confirm" onClick={this.handleClick}/>
                </form>
            </div>
        );
    }
}

export default UpdatePlacement;