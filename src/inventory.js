import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar';

class Inventory extends React.Component {
    render() {
        return (
            <div className='inventory'>
                <div className='navBar'>
                    <NavBar />
                </div>
                <div className='invenOverview'>
                    <h2>Inventory</h2>
                    <p>Real time look at areas, sections, and bottles</p>
                    {/* <Link><input type="button" className="btn" value="Add Area"/></Link>
                    <Link><input type="button" className="btn" value="Run Inventory"/></Link> */}
                    <div className='areaOverview'>
                        <div className='area'>
                            <p>This is first area</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inventory;