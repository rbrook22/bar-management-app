import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    render() {
        return (
            <div className='signUpForm'>
                <h1>BevSimply</h1>
                <p>Sign-Up</p>
                <form>
                    <label>
                        First Name:
                        <input type="text" name="firstName" />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" />
                    </label>
                    <label>
                        Phone Number:
                        <input type="text" name="phoneNumber" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" />
                    </label>
                    {/* <Link><input type="submit" value="Next" /></Link> */}

                </form>
            </div>
        );
    }
}

export default SignUp;