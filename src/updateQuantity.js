import React from 'react';
import axios from 'axios';

class UpdateQuantity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bevId: 0,
            quantity: 0
        }
    }

    componentDidMount() {
        axios.get(`/section/placement/${this.props.match.params.placementId}`)
            .then((res) => {
                console.log(res);
                this.setState({
                    bevId: res.data.id,
                    quantity: res.data.quantity
                })
            })
    }

    handleQuantity = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }
    handleClick=(event) => {
        axios.post(`/section/placement/${this.props.match.params.placementId}`, {
            quantity: this.state.quantity
        })
        .then(res => {
            console.log(res);
            this.props.history.push(`/venue`)
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