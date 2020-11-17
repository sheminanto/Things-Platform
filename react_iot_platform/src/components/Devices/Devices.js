import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Devices extends Component {
    state = {
        devices: this.props.devices
    }
    render() {
        if (!localStorage.getItem('token')) return <Redirect to='/'></Redirect>
        return (
            <div className="container device-table">
                {this.state.devices.length ?
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tag</th>
                                    <th>Parent/Root</th>
                                    <th>Description</th>
                                    <th>Last modified</th>
                                </tr>

                            </thead>
                            <tbody>
                                {this.state.devices.map(device => {
                                    return (
                                        <tr>
                                            <td>{device.id}</td>
                                            <td>{device.tag}</td>
                                            <td>Parent</td>
                                            <td>{device.description}</td>
                                            <td>{device.updated_on}</td>
                                        </tr>

                                    )
                                })}

                            </tbody>


                        </table>
                    </div> : <div className="alert alert-info">No devices to display...!</div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        devices: state.device.devices,
        login_status: state.auth.login_status
    }
}

export default connect(mapStateToProps)(Devices)
