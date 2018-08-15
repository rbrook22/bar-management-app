import React from 'react';
import axios from 'axios';

class UpdateQuantity extends React.Component {
    constructor() {
        super();
        this.state = {
            bevId: 0
        }
    }
    render() {
        return (
            <div className='addPlacement'>
                <h3>Update Quantity</h3>
                <p>Enter new amount</p>
                <form onSubmit={(event) => {event.preventDefault()}}>
                    <label>
                        Quantity:
                        <input type="text" name="placementQuantity" onChange={this.handleQuantity} value={this.state.quantity}/>
                    </label>
                    <input type="submit" value="Confirm" onClick={this.handleClick}/>
                </form>
                {/* <div>
                <select name="" id="" onChange={this.handleOption}>
                    {this.state.filteredBevs.map(b => (<option value={b.id}>{b.bevname}</option>))}
                </select>
                </div> */}
            </div>
        );
    }
}

export default UpdateQuantity;