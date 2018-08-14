import React from 'react';
import { Link } from 'react-router-dom';
import LocationSearchInput from './locationSearchInput';


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

    render() {
        return (
            <div className='signUpForm'>
                <h1>BevSimply</h1>
                <p>Sign-Up</p>
                <form>
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
                        <LocationSearchInput />
                    </label>
                    <label>
                        Position/Title:
                        <input type="text" onChange={this.handlePosition} value={this.state.position}/>
                    </label>
                    <Link to="#"><input type="submit" value="Next" /></Link>
                </form>
            </div>
        );
    }
}
export default SignUp;