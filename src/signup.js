import React from 'react';
import { Link } from 'react-router-dom';
import LocationSearchInput from './locationSearchInput';


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
                    <label>
                        Venue Search:
                        <LocationSearchInput />
                    </label>
                    <label>
                        Position/Title:
                        <input type="text"/>
                    </label>
                    <Link to><input type="submit" value="Next" /></Link>

                </form>
            </div>
        );
    }
}
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBjdRMVQV_zyck-PvktB1kVUU1ZIQBCjlY&libraries=places"></script>
export default SignUp;