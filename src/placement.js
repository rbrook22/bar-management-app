import React from 'react';
import axios from 'axios';

class AddPlacement extends React.Component {
    constructor() {
        super();
        this.state = {
            allBevs: [],
            filteredBevs: [],
            bevId:0,
            quantity: 0
        }
    }
    componentDidMount() {
        axios.get('/beverages')
            .then((res) => {
                this.setState({
                    allBevs: res.data,
                    filteredBevs: res.data
                })
            })
    }

    handleOption=(event) => {
        console.log(event);
        this.setState({
            bevId: event.target.value
        })
    }
    handleChange=(e) => {
        let filteredBevs = this.state.allBevs.filter(b => b.bevname.includes(e.target.value));//This filters the full list of beverages down to the matches, allowing for a smaller selection to choose from
        let bevId = this.state.bevId;
        if(filteredBevs.length === 1) {
            bevId = filteredBevs[0].id//This is used to grab the id off the filtered arrays 1st beverage name when only one beverage is returned
        }
        this.setState({
            filteredBevs,
            bevId
        }) 
    }
    handleQuantity=(e) => {
        this.setState({
            quantity: e.target.value
        }) 
    }
    handleClick=(event) => {
        let beverage = this.state.allBevs.find((b) => b.id == this.state.bevId) || {}
        axios.post(`/venue/${this.props.match.params.area_id}/section/${this.props.match.params.section_id}`, {
            label: beverage.bevname,
            sectionid: this.props.match.params.section_id,
            beverageid: this.state.bevId,
            quantity: this.state.quantity
        })
        .then(res => {
            console.log(res);
            this.props.history.push(`/area/${this.props.match.params.area_id}/`)
        })
    }
    render() {
        return (
            <div className='addPlacement'>
                <h3>Add Placement</h3>
                <p>Enter new bottle</p>
                <form onSubmit={(event) => {event.preventDefault()}}>
                    <label>
                        Bottle:
                        <input type="text" name="placementName" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Quantity:
                        <input type="text" name="placementQuantity" onChange={this.handleQuantity} value={this.state.quantity}/>
                    </label>
                    <input type="submit" value="Confirm" onClick={this.handleClick}/>
                </form>
                <div>
                <select name="" id="" onChange={this.handleOption}>
                    {this.state.filteredBevs.map(b => (<option value={b.id}>{b.bevname}</option>))}
                </select>
                </div>
            </div>
        );
    }
}

export default AddPlacement;