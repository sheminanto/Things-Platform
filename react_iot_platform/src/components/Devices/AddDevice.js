import React, { Component } from 'react'
import { addDevice } from '../../store/actions/deviceActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class AddDevice extends Component {
    state = {
        id: '',
        name: '',
        location: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addDevice(this.state)
    }


    render() {
        const link = localStorage.getItem('token')
        if (!link) return <Redirect to='/home' />
        return (
            <div className="container col-sm-6">
                <form className="form-control" onSubmit={this.handleSubmit}>
                    <h5>Add Device</h5>
                    <div className="input-control">
                        <label htmlFor="id" className="form-label">Id</label>
                        <input className="form-control" type="text" id="id" onChange={this.handleChange} required /><br />
                        <label htmlFor="name" className="form-label">Name</label>
                        <input className="form-control" type="text" id="name" onChange={this.handleChange} required /><br />
                        <label htmlFor="location" className="form-label">Location</label>
                        <input className="form-control" type="text" id="location" onChange={this.handleChange} required /><br />
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
        login_status: state.auth.login_status
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addDevice: (device) => dispatch(addDevice(device))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDevice)
