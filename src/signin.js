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
			// res = JSON.parse(res);
            if (res.status === "Ok") {
				this.props.history.push('/dashboard')
			} else {
				this.props.history.push('/')
				}
        })
    }

    render() {
        return (
            <div className='signInForm'>
                <h1>BevSimply</h1>
                <p>Sign-In</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" name="Email" onChange={this.handleEmail} value={this.state.email}/>
                    </label>
                    <label>
                        Password:
                        <input type="text" name="Password" onChange={this.handlePassword} value={this.state.password}/>
                    </label>
                    <input type="submit" value="Submit" />
                    <p>Don't have an account? Click <Link to="/signup">here</Link> to create one!</p>
                </form>
            </div>
        );
    }
}

export default SignIn;