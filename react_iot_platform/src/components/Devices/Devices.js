import React, { Component, useState } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md'
import { deleteDevice, getDevices, clearStatus, fetchData } from '../../store/actions/deviceActions'
class Devices extends Component {

    state = {
        update: ''
    }
    handleDelete = (id) => {
        console.log(id);
        this.props.deleteDevice(id)
        console.log(this.state.devices);
        this.setState({
            devices: this.props.devices
        })

    }

    render() {
        this.props.clearStatus();
        console.log("Rerender");
        console.log(this.state.device);
        if (!localStorage.getItem('token')) return <Redirect to='/'></Redirect>

        return (

            <div className="container device-table">
                {/* <UpdateDevice device={this.state.update} /> */}
                {this.props.devices.length ?
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
                                {this.props.devices && this.props.devices.map((device, index) => {
                                    return (
                                        <tr>
                                            <td>{device.id}</td>
                                            <td>{device.tag}</td>
                                            <td>Parent</td>
                                            <td>{device.description}</td>
                                            <td>{device.updated_on}</td>
                                            <td>
                                                <a href={`/device/` + index}><button type="button" id="edit" name="edit" className="device-btn btn btn-sm btn-dark mx-1 my-2" onClick={this.props.fetchData(device.id)}><MdVisibility /></button></a>
                                                <a href={`/updatedevice/` + index}><button type="button" id="edit" name="edit" className="device-btn btn btn-sm btn-primary mx-1 my-2"><MdEdit /></button></a>
                                                <button type="button" id="delete" name="delete" className="device-btn btn btn-sm btn-danger mx-1 my-2" onClick={() => this.handleDelete(device.id)}><MdDelete /></button>
                                            </td>

                                        </tr>

                                    )
                                })}

                            </tbody>


                        </table>
                    </div> : <div className="alert alert-info">No devices to display...!</div>
                }
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

const mapDispatchToProps = (dispatch) => {
    return {
        getDevices: dispatch(getDevices()),
        deleteDevice: (id) => dispatch(deleteDevice(id)),
        clearStatus: () => dispatch(clearStatus()),
        fetchData: (id) => dispatch(fetchData(id))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Devices)
