import React from 'react';
import {Link,Route} from 'react-router-dom';
import NavBar from './navBar';
import axios from 'axios';

class AreaPage extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            label: '',
            sections: [],
            placements: [],
            images: []
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
            console.log(res.data)//I can see the beverage id here
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
            <div className='container'>
                <div className='navBar'>
                < NavBar barClickHandler={this.props.barClickHandler} />
                </div>
                <div className='wrapper'>
                <div className="company-info">
                        <h1 className="foundTitle"><span>Bev</span>Simply</h1>
                        <h3>{this.state.label}</h3>
                    </div>
                        <ul className='center'>
                            {this.state.sections.map(section => (
                                <li className='place' key={section.id}>{section.label}>
                                <input type="button" onClick={this.deleteSection} value={section.id}/>
                                <br></br>
                                <Link to={`/area/${this.state.id}/${section.id}/placement`} style={{ textDecoration: 'none' }}>Add Placement</Link>
                                <br></br>
                                {this.state.placements.map(placement => {
                                    if(placement.sectionid == section.id) {
                                    return (
                                        <div key={placement.id}>
                                            <img src={placement.img} alt=""/>
                                            {placement.label}
                                            <Link to={`/section/placement/${placement.id}`} style={{ textDecoration: 'none' }}><p>Update Inventory</p></Link>
                                            <input type="button" onClick={this.deletePlacement} value={placement.id} placeholder="Delete"/>
                                        </div>)
                                    }else {
                                        return null;
                                    }
                                })}
                                </li>
                            ))}
                        </ul>
                        <Link to={`/area/${this.state.id}/addsection`} style={{ textDecoration: 'none' }}><p>Add Section</p></Link>
                </div>
            </div>
        );
    }
}

export default AreaPage;