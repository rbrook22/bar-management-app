import React from 'react';
import { Link } from 'react-router-dom';
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
            venue: '',
            position: ''
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
    handleSearch = (event) => {
        const value = event.target.value
        console.log(value);
        this.setState({
            venue: value
        })
    }

    render() {
        return (
            <div className='signUpForm'>
                <h1>BevSimply</h1>
                <p>Sign-Up</p>
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
                        <LocationSearchInput onChange={this.handleSearch} value={this.state.venue}/>
                    </label>
                    <label>
                        Position/Title:
                        <input type="text" onChange={this.handlePosition} value={this.state.position}/>
                    </label>
                    <input type="submit" value="Next" />
                </form>
            </div>
        );
    }
}
export default SignUp;