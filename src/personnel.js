import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from './navBar';
import axios from 'axios';

class Personnel extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            user: []
        };
    }

    componentDidMount(){
        axios.get('/personnel/2')
            .then( response => {
                console.log(response);
                this.setState ({
                    user: response.data
                });
            })       
    }
    render() {
        return (
            <div className='personnelPage'>
                <div className='navBar'>
                    <NavBar />
                </div>
                <div className='overview'>
                    <h2>Personnel</h2>
                    <div className='inviteUser'>
                        {/* <Link><input type="button" className="btn" value="Invite User"/></Link> */}
                    </div>
                    <div className='personnelOverview'>
                        {this.state.user.firstname}  {this.state.user.lastname}
                        <br/>
                        {this.state.user.email}
                    </div>
                </div>
            </div>
        );
    }
}

export default Personnel;