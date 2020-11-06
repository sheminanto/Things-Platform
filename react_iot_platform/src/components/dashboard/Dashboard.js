import React from 'react';
import Notifications from './Notifications'
import DeviceList from '../Devices/DeviceList';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends React.Component{
    
    render(){
        
        const { devices } = this.props;
        const link = localStorage.getItem('token')
        if(!link) return <Redirect to='/signin'/>
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <DeviceList devices={devices}/>
                    </div>
                    <div className="col s12 m5 offset-m1"><Notifications/></div>
                </div>

            </div>
        );

    }
}

const mapStateToProps = (state) =>{
    return{
        devices:state.device.devices,
        login_status:state.auth.login_status
    }
}

export default connect(mapStateToProps)(Dashboard);