import React from 'react';
// import {Link} from 'react-router-dom';

class SignIn extends React.Component {
    render() {
        return (
            <div className='signInForm'>
                <h1>BevSimply</h1>
                <p>Sign-In</p>
                <form>
                    <label>
                        Username:
                        <input type="text" name="firstName" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="lastName" />
                    </label>
                    <input type="submit" value="Submit" />

                </form>
            </div>
        );
    }
}

export default SignIn;