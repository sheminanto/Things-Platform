import React, { Component } from 'react'
import { userSignup } from '../../store/actions/authActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Signup extends Component {
    state = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        re_password: ""
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        }) 
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.userSignup(this.state)
    }


    render() {
        const link = localStorage.getItem('token')
        if(link) return <Redirect to='/'/>
        return (
            <div className="container rounded col-sm-4 ">
                <form className="form-control shadow" onSubmit={this.handleSubmit}>
                    <h5>Sign up</h5>
                    <hr/>
                    <div className="input-control">
                        <label htmlFor="first_name" className="form-label">First Name</label>
                        <input className="form-control" type="text" id="first_name" onChange={this.handleChange}/><br/>
                        <label htmlFor="last_name" className="form-label">Last Name</label>
                        <input className="form-control" type="text" id="last_name" onChange={this.handleChange}/><br/>
                        <label htmlFor="username" className="form-label">Username</label>
                        <input className="form-control" type="text" id="username" onChange={this.handleChange}/><br/>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input className="form-control" type="email" id="email" onChange={this.handleChange}/><br/>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input className="form-control" type="password" id="password" onChange={this.handleChange} required/><br/>
                        <label htmlFor="re_password" className="form-label">Confirm Password</label>
                        <input className="form-control" type="password" id="re_password" onChange={this.handleChange} required/><br/>
                        <center><button type="submit" className="btn btn-success authbtn" onClick={this.handleSubmit}>Sign up</button></center>
                    </div>
                </form>
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        login_status:state.auth.login_status
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        userSignup: (user) => dispatch(userSignup(user)),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)

