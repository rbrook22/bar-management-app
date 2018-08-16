import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class SignIn extends React.Component {
constructor(){
    super()
    this.state = {
        email: '',
        password: ''
    }
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

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/login', this.state)
        .then(res => {
            if (res.data.status === "Ok") {
                this.props.history.push('/dashboard')
            } else {
                this.props.history.push('/')
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <div className="company-info">
                        <h1 className="foundTitle"><span>Bev</span>Simply</h1>
                        <h3>Sign-In</h3>
                    </div>
                    <div className='signInForm contact'>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Username:
                                <input type="text" name="Email" onChange={this.handleEmail} value={this.state.email}/>
                            </label>
                            <label>
                                Password:
                                <input type="text" name="Password" onChange={this.handlePassword} value={this.state.password}/>
                            </label>
                            <input className="full" type="submit" value="Submit" />
                        </form>
                        <p>Don't have an account? Click <Link to="/signup"> here</Link> to create one!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;