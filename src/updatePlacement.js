import React from 'react';
import axios from 'axios';

class UpdatePlacement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allBeverages: []
        }
    }

    componentDidMount () {
        this.getAllBeverages()
    }

    getAllBeverages = () => {//same function as in index.js, works in node on server side
        axios.get('/beverages')//same file path as line 169 in server index.js
        console.log('about to get beverages')
        .then((res) => {
            console.log(res.data)
            this.setState ( {
                allBeverages: res.data
            })
        })
    }
    
    render() {
        return (
            <div className='updatePlacement'>
                <h3>Update Placement</h3>
                <p>Enter new amounts:</p>
                {this.state.bevname.map(beverage => {
                    <form onSubmit={(event) => {event.preventDefault()}}>
                        <label>
                            Amount Available:
                            <input type="number" placeholder="Inventory Available" step=".1" />
                        </label>
                        <input type="submit" value="Confirm" onClick={this.handleClick}/>
                    </form>
                })}
            </div>
        );
    }
}

export default UpdatePlacement;