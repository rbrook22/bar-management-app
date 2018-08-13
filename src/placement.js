import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddPlacement extends React.Component {
    constructor() {
        super();
        this.state = {
            allBevs: [],
            filteredBevs: [],
            bevId:0
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
        this.setState({
            filteredBevs: this.state.allBevs.filter(b => b.bevname.includes(e.target.value))
        }) 
    }
    handleClick=(event) => {
        axios.post(`/venue/${this.props.match.params.area_id}/section/${this.props.match.params.section_id}`, {
            label: this.state.allBevs.find((b) => b.id == this.state.bevId).bevname,
            sectionid: this.props.match.params.section_id,
            beverageid: this.state.bevId
        })
        .then(res => {
            console.log(res);
            this.props.history.push(`/area/${this.props.match.params.area_id}/section/${this.props.match.params.section_id}`)
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