import React from 'react';
import axios from 'axios';

class UpdatePlacement extends React.Component {
    constructor() {
        super();
        this.state = {
            allBevs: [],
        }
    }
    componentDidMount() {
        this.getAlcohol()
    }

    getAlcohol = () => {
        app.get('/alcohol/:alcoholId', (req, res) => {
            alcohol.getAll(req.params.alcoholId)
            .then((data) => {   
                res.json(data);
            })
            .catch((error) => { console.log(error); });
        });
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
            this.props.history.push(`/area/${this.props.match.params.area_id}/`)
        })
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