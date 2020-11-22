import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateDevice } from '../../store/actions/deviceActions'
import { Redirect } from 'react-router-dom'
class UpdateDevice extends Component {

    state = {
        id: this.props.devices[this.props.match.params.id].id,
        tag: this.props.devices[this.props.match.params.id].tag,
        description: this.props.devices[this.props.match.params.id].description
    }

    handleChange = (e) => {
        console.log("handle change");
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', this.state);
        this.props.updateDevice(this.state)

    }


    render() {

        console.log(this.props);
        const link = localStorage.getItem('token')
        console.log("hello");
        if (!link) return <Redirect to='/home' />
        if (this.props.loading === false && this.props.updateDeviceStatus === "success") return <Redirect to='/devices' />
        return (
            <div className="container col-sm-6">
                <form className="form-control" onSubmit={this.handleSubmit}>
                    <h5>Update Device</h5>
                    <div className="input-control">
                        <label htmlFor="id" className="form-label">Id</label>
                        <input className="form-control" type="text" id="id" value={this.state.id} onChange={this.handleChange} readOnly /><br />
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input className="form-control" type="text" id="tag" value={this.state.tag} onChange={this.handleChange} required /><br />
                        {/* <label htmlFor="location" className="form-label">Location</label>
                        <input className="form-control" type="text" id="location" onChange={this.handleChange} required /><br /> */}
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" type="textarea" id="description" value={this.state.description} onChange={this.handleChange} required /><br />
                        <center><button type="submit" className="btn btn-primary addbtn" onClick={this.handleSubmit}>Update</button></center>
                    </div>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDevice: (device) => dispatch(updateDevice(device))
    }
}
const mapStateToProps = (state) => {
    return {
        devices: state.device.devices,
        loading: state.device.loading,
        updateDeviceStatus: state.device.updateDeviceStatus
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateDevice)
