import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './navBar';
// import AddArea from './addArea';
import axios from 'axios';

class AreaPage extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            label: '',
            sections: [],
            placements: []
        }
    }
    componentDidMount(){
        this.getSections()
        this.getPlacements()
    }

    getPlacements = () => {
        var areaId = this.props.match.params.area_id;
        axios.get(`/venue/${areaId}/section/placements`)
        .then((res) => {
            this.setState({
                placements: res.data
            })
        })
    }
    deletePlacement = (event) => {
        console.log(event.target.value);
        var areaId = this.props.match.params.area_id;
        var pId = event.target.value;
        axios.delete(`/venue/${areaId}/section/placements/${pId}`)
        .then(response => {
            console.log(response);
            this.getPlacements()
        })
    }

    getSections = () => {
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
    deleteSection = (event) => {
        var areaId = this.props.match.params.area_id;
        axios.delete(`/venue/${areaId}/section/${event.target.value}`)
        .then(response => {
            console.log(response);
            this.getSections()
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
                                <input type="button" onClick={this.deleteSection} value={section.id}/>
                                <br></br>
                                <button><Link to={`/area/${this.state.id}/${section.id}/placement`}>Add Placement</Link></button>
                                <br></br>
                                {this.state.placements.map(placement => {
                                    if(placement.sectionid == section.id) {
                                    return (
                                        <div key={placement.id}>
                                            {placement.label}
                                            <input type="number" placeholder="Full Bottles" step="1" />
                                            <input type="number" placeholder="Partial Amount" step=".1" />
                                            <input type="button" onClick={this.deletePlacement} value={placement.id}/>
                                        </div>)
                                    }else {
                                        return null;
                                    }
                                })}
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