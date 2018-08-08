import React from 'react';
import {Link} from 'react-router-dom';

class AddPlacement extends React.Component {
    render() {
        return (
            <div className='addPlacement'>
                <h3>Add Placement</h3>
                <p>Enter new bottle</p>
                <form>
                    <label>
                        Bottle:
                        <input type="text" name="placementName" />
                    </label>
                    <Link><input type="submit" value="Confirm" /></Link>
                </form>
            </div>
        );
    }
}

export default AddPlacement;