import React from 'react';
import Notifications from './Notifications'
import DeviceList from '../Devices/DeviceList';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getDevices } from '../../store/actions/deviceActions'
import SideBar1 from '../layout/SideBar1'

class Dashboard extends React.Component {
    render() {

        const { devices } = this.props;
        const link = localStorage.getItem('token')
        if (!link) return <Redirect to='/home' />
        return (
            <div className="dashboard container-fluid ">
                <div className="row">
                    <div id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <SideBar1 />
                    </div>
                    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div className="row">
                            <div className="col s12 m6">
                                <DeviceList devices={devices} />
                            </div>
                            <div className="col s12 m5 offset-m1"><Notifications /></div>
                        </div>
                    </main>
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
        getDevices: dispatch(getDevices()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);