import React from 'react';
import {Route} from 'react-router-dom';
import NavBar from './navBar';
import axios from 'axios';

class Personnel extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            users: []
        };
    }

    componentDidMount(){
        axios.get('/personnel')
            .then( response => {
                console.log(response);
                this.setState ({
                    users: response.data
                });
            })       
    }
    render() {
        return (
            <div className='personnelPage'>
                <div className='navBar'>
                    <Route path="/" component={NavBar} />
                </div>
                <div className='overview'>
                    <h2>Personnel</h2>
                    <div className='inviteUser'>
                        {/* <Link><input type="button" className="btn" value="Invite User"/></Link> */}
                    </div>
                    <div className='personnelOverview'>
                        {this.state.users.map(user => 
                            <div key={user.id}>
                                {user.firstname}  {user.lastname}
                                <br/>
                                {user.email}
                            </div>
                        )};
                    </div>
                </div>
            </div>
        );
    }
}

export default Personnel;