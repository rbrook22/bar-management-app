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
                    label: res.data.label,
                    id: res.data.id
                })
            })
        axios.get(`/venue/${areaId}/section`)
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
                <div className='areaHeader'>
                    <h2>{this.state.label}</h2>
                        <ul>
                            {this.state.sections.map(section => (
                                <li key={section.id}>{section.label}
                                <br></br>
                                <button><Link to={`/area/${this.state.id}/${section.id}/placement`}>Add Placement</Link></button>
                                </li>
                            ))}
                        </ul>
                </div>
                <div className='areaBody'>
                <Link to={`/area/${this.state.id}/addsection`}><input type="button" className="btn" value="Add Section"/></Link>
                </div>
            </div>
        );
    }
}

export default AreaPage;