import React from 'react';
import axios from 'axios';

class AddArea extends React.Component {
    constructor(){
        super()
        this.state = {
            form: {
                label: ""
            }
        }
    }

    handleLabel=(event) => {
        this.setState({
            form:{
                ...this.state.form,
                label: event.target.value
            }
        })
    }

    handleEntry = (event) => {
        event.preventDefault();
        let newArea = {
            label: this.state.form.label
        }

        axios.post('/venue', newArea)
            .then(res => {
                console.log(res);
                this.props.history.push('/venue')
            })
    }
    render() {
        return (
            <div className='container'>
            <div className='wrapper'>
                <div className="company-info">
                        <h1 className="foundTitle"><span>Bev</span>Simply</h1>
                        <h3>Add Area</h3>
                    </div>
                <p>Enter Name of Area</p>
                <form onSubmit={this.handleEntry}>
                    <label>
                        Area:
                        <input type="text" name="areaName" onChange={this.handleLabel} />
                    </label>
                    <input type="submit" value="Confirm" />
                </form>
            </div>
            </div>
        );
    }
}

export default AddArea;