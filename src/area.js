import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './navBar';
import AddArea from './addArea';
import Axios from 'axios';

class AreaPage extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            label: ''
        }
    }
    componentDidMount(){
        console.log(this.props);
        var areaId = this.props.match.params.area_id;
        var areaURL = `/venue/${areaId}`;
        Axios.get(areaURL)
            .then((res) => {
                console.log(res.data);
            })
    }
    render() {
        return (
            <div className='area'>
                <div className='navBar'>
                    <NavBar />
                </div>
                <div className='addSection'>
                    <button><Link to='/area/addarea'>Add Section</Link></button>
                </div>
                <div className='areaHeader'>
                    <h2>{this.state.label}</h2>
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