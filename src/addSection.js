import React from 'react';
import axios from 'axios';

class AddSection extends React.Component {
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
        let newSection = {
            label: this.state.form.label
        }

        axios.post(`/venue/${this.props.match.params.area_id}/section`, newSection)
            .then(res => {
                console.log(res);
                this.props.history.push('/area/'+this.props.match.params.area_id)
            })
    }
    render() {
        return (
            <div className='container'>
            <div className='wrapper'>
                <div className="company-info">
                        <h1 className="foundTitle"><span>Bev</span>Simply</h1>
                        <h3>Add Section</h3>
                    </div>
                <p>Enter new Section name</p>
                <form onSubmit={this.handleEntry}>
                    <label>
                        Section:
                        <input type="text" name="sectionName" onChange={this.handleLabel} />
                    </label>
                    <input type="submit" value="Confirm" />
                </form>
            </div>
            </div>
        );
    }
}

export default AddSection;