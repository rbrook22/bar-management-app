import React from 'react';
import axios from 'axios';

class UpdateQuantity extends React.Component {
    constructor() {
        super();
        this.state = {
            bevId: 0,
            quantity: 0
        }
    }

    componentDidMount() {
        axios.get('/section/placement/2')
            .then((res) => {
                this.setState({
                    bevId: res.data,
                    quantity: res.data.quantity
                })
            })
    }

    handleQuantity = (event) => {
        const value = event.target.value
        this.setState({
            quantity: value
        })
    }

    render() {
        return (
            <div className='updateQuantity'>
                <h3>Update Quantity</h3>
                <p>Enter new amount</p>
                <form onSubmit={(event) => {event.preventDefault()}}>
                    <label>
                        Quantity:
                        <input type="text" name="placementQuantity" onChange={this.handleQuantity} value={this.state.quantity}/>
                    </label>
                    <input type="submit" value="Confirm" onClick={this.handleClick}/>
                </form>
            </div>
        );
    }
}

export default UpdateQuantity;