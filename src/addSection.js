import React from 'react';
import { Link } from 'react-router-dom';

class AddSection extends React.Component {
    render() {
        return (
            <div className='addSection'>
                <h3>Create Section</h3>
                <p>Enter new Section name</p>
                <form>
                    <label>
                        Section:
                        <input type="text" name="sectionName" />
                    </label>
                    <Link><input type="submit" value="Confirm" /></Link>
                </form>
            </div>
        );
    }
}

export default AddSection;