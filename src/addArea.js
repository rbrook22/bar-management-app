import React from 'react';
import { Link } from 'react-router-dom';

class AddArea extends React.Component {
    render() {
        return (
            <div className='addArea'>
                <h3>Add Area</h3>
                <p>Enter Name of Area</p>
                <form>
                    <label>
                        Area:
                        <input type="text" name="areaName" />
                    </label>
                    <Link to='/venue'><input type="submit" value="Confirm" /></Link>
                </form>
            </div>
        );
    }
}

export default AddArea;