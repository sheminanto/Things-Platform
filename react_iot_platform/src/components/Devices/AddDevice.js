import React, { Component } from 'react'
import { addDevice, getDevices } from '../../store/actions/deviceActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class AddDevice extends Component {
    state = {
        id: '',
        tag: '',
        description: '',
        parent: null,
        root: null,
        selectedOption: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
        console.log(this.state);
        this.props.addDevice(this.state)
    }

    selectParent = (parent) => {

        console.log("Selected parent:", parent);
        const root = parent.is_root ? parent.id : parent.root
        this.setState({
            root: root,
            parent: parent.id
        })
        console.log(this.state);
    }

    render() {
        console.log(this.props);
        const link = localStorage.getItem('token')
        if (!link) return <Redirect to='/home' />
        if (this.selectedOption === 'parent') {
            this.props.getDevices()
        }
        if (this.props.addDeviceStatus === 'success') return <Redirect to='/devices' />
        return (

            <div className="container col-sm-6">
                <form className="form-control" onSubmit={this.handleSubmit}>
                    <h5>Add Device</h5>
                    <div className="input-control">
                        <label htmlFor="id" className="form-label">Id</label>
                        <input className="form-control" type="text" id="id" onChange={this.handleChange} required /><br />
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input className="form-control" type="text" id="tag" onChange={this.handleChange} required /><br />
                        {/* <label htmlFor="location" className="form-label">Location</label>
                        <input className="form-control" type="text" id="location" onChange={this.handleChange} required /><br /> */}

                        <hr />
                        <h6>Select Device Type</h6>
                        <div className="row">
                            <div className="radio">
                                <label>
                                    <input type="radio" id="selectedOption" value="root" checked={this.state.selectedOption === 'root'} onChange={this.handleChange} /> Root </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" id="selectedOption" value="child" checked={this.state.selectedOption === 'child'} onChange={this.handleChange} />Child</label>
                            </div></div>
                        {this.state.selectedOption === 'child' ? <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="selectParent" data-toggle="dropdown" aria-expanded="false">Select Parent</button>

                            <ul className="dropdown-menu" aria-labelledby="selectParent">
                                {this.props.devices.map(device => {
                                    return (
                                        <li><a className="dropdown-item" onClick={() => { this.selectParent(device) }}>{device.id}</a></li>
                                    )
                                })}
                            </ul>
                            <br />
                            Parent : {this.state.parent}
                        </div> : null}

                        <hr />
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" type="textarea" id="description" onChange={this.handleChange} required /><br />
                        <center><button type="submit" className="btn btn-primary addbtn" onClick={this.handleSubmit}>Add</button></center>
                    </div>
                </form>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        login_status: state.auth.login_status,
        addDeviceStatus: state.device.addDeviceStatus,
        devices: state.device.devices
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addDevice: (device) => dispatch(addDevice(device)),



    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDevice)
