import React from 'react';
// import {Link} from 'react-router-dom';

class AddPersonnel extends React.Component {
    render() {
        return (
            <div className='addPersonnel'>
                <h3>Invite User</h3>
                <form>
                    <label>
                        First and Last Name:
                        <input type="text" name="areaName" />
                    </label>
                    <label>
                        Email Address:
                        <input type="text" name="areaName" />
                    </label>
                    <input type="submit" value="Invite" />
                </form>
            </div>
        );
    }
}

export default AddPersonnel;