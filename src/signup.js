import React from 'react';
import LocationSearchInput from './locationSearchInput';
import axios from 'axios';


class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            password: '',
            password2: '',
            position: '',
            venueAddress: ''
        }
    }

    handleFirstName = (event) => {
        const value = event.target.value
        this.setState({
            firstname: value
        })
    }
    handleLastName = (event) => {
        const value = event.target.value
        this.setState({
            lastname: value
        })
    }
    handlePhoneNumber = (event) => {
        const value = event.target.value
        this.setState({
            phonenumber: value
        })
    }
    handleEmail = (event) => {
        const value = event.target.value
        this.setState({
            email: value
        })
    }
    handlePassword = (event) => {
        const value = event.target.value
        this.setState({
            password: value
        })
    }
    handlePassword2 = (event) => {
        const value = event.target.value
        this.setState({
            password2: value
        })
    }
    handlePosition = (event) => {
        const value = event.target.value
        this.setState({
            position: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/signup', this.state)
        .then(res => {
            console.log(res);
            this.props.history.push('/dashboard')
        })
    }
    
    handleAddressChoice = (address) => {
        console.log(address);
        this.setState({
            venueAddress: address
        })
    }
    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <div className="company-info">
                        <h1 className="foundTitle"><span>Bev</span>Simply</h1>
                        <h3>Sign-Up</h3>
                    </div>
                    <div className='signUpForm contact'>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                First Name:
                                <input type="text" name="firstName" onChange={this.handleFirstName} value={this.state.firstname}/>
                            </label>
                            <label>
                                Last Name:
                                <input type="text" name="lastName" onChange={this.handleLastName} value={this.state.lastname}/>
                            </label>
                            <label>
                                Phone Number:
                                <input type="text" name="phoneNumber" onChange={this.handlePhoneNumber} value={this.state.phonenumber}/>
                            </label>
                            <label>
                                Email:
                                <input type="text" name="email" onChange={this.handleEmail} value={this.state.email}/>
                            </label>
                            <label>
                                Password:
                                <input type="text" name="password" onChange={this.handlePassword} value={this.state.password}/>
                            </label>
                            <label>
                                Password 2: 
                                <input type="text" name="Password 2" onChange={this.handlePassword2} value={this.state.password2}/>
                            </label>
                            <label>
                                Venue Search:
                                <LocationSearchInput onChange={this.handleSearch} value={this.state.venue} handleChoice={this.handleAddressChoice}/>
                            </label>
                            <label>
                                Position/Title:
                                <input type="text" onChange={this.handlePosition} value={this.state.position}/>
                            </label>
                        </form>
                        <div className='sub'>
                            <input className='button foundSubmit' type="submit" value="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUp;