import React from 'react';
import Notifications from './Notifications'
import DeviceList from '../Devices/DeviceList';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getDevices } from '../../store/actions/deviceActions'
class Dashboard extends React.Component {
    render() {

        const { devices } = this.props;
        const link = localStorage.getItem('token')
        if (!link) return <Redirect to='/home' />
        return (
            <div className="dashboard container mt-3">
                <div className="row">
                    <div className="col s12 m6">
                        <DeviceList devices={devices} />
                    </div>
                    <div className="col s12 m5 offset-m1"><Notifications /></div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        devices: state.device.devices,
        login_status: state.auth.login_status
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDevices: dispatch(getDevices())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);