import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './navBar';
import AddArea from './addArea';

class AreaPage extends React.Component {
    render() {
        return (
            <div className='area'>
                <div className='navBar'>
                    <NavBar />
                </div>
                <div className='addArea'>
                    <button><Link to='/area/addarea'>Add Area</Link></button>
                </div>
                <div className='areaHeader'>
                    <h2>Area Name</h2>
                    <div className='sectCount'>
                        <p>Num</p>
                    </div>
                    <div className='placementCount'>
                        <p>Num</p>
                    </div>
                </div>
                <div className='areaBody'>
                {/* <Link><input type="button" className="btn" value="Add Section"/></Link> */}
                </div>
            </div>
        );
    }
}

export default AreaPage;