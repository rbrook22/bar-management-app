import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './navBar';
import AddArea from './addArea';
import axios from 'axios';

class AreaPage extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            label: '',
            sections: []
        }
    }
    componentDidMount(){
        console.log(this.props);
        var areaId = this.props.match.params.area_id;
        var areaURL = `/venue/${areaId}`;
        axios.get(areaURL)
            .then((res) => {
                this.setState({
                    label: res.data.label
                })
            })
        axios.get('/venue/2/section')
        .then( response => {
            console.log(response);
            this.setState ({
                sections: response.data
            });
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
                        <ul>
                            {this.state.sections.map(section => (
                                <li key={section.id}>{section.label}</li>
                            ))}
                        </ul>
                </div>
                <div className='areaBody'>
                {/* <Link><input type="button" className="btn" value="Add Section"/></Link> */}
                </div>
            </div>
        );
    }
}

export default AreaPage;