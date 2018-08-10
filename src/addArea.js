import React from 'react';
import { Link } from 'react-router-dom';
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
    componentDidMount(){
        this.setState({
            baseForm: this.state.form
        })
    }

    handleareaName=(event) => {
        this.setState({
            form:{
                ...this.state.form,
                label: event.target.value
            }
        })
    }

    handleEntry(event){
        event.preventDefault();
        let newArea = {
            label: this.state.form.label
        }

        axios.post('http://localhost:3000')
            .then(res => {
                console.log(res);
            })

    }
    render() {
        return (
            <div className='addArea'>
                <h3>Add Area</h3>
                <p>Enter Name of Area</p>
                <form>
                    <label>
                        Area:
                        <input type="text" name="areaName" />
                    </label>
                    <Link to='/venue'><input type="submit" value="Confirm" /></Link>
                </form>
            </div>
        );
    }
}

export default AddArea;