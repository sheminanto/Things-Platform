import React, { Component } from 'react'
import { userLogin} from '../../store/actions/authActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Signin extends Component {
    state = {
        email:'',
        password:''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        }) 
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.userLogin(this.state)
    }


    render() {
        // console.log(this.props.autherr.response);
        const link = localStorage.getItem('token')
        if(link) return <Redirect to='/'/>
        return (
            <div className="signin container rounded-lg col-sm-4 ">
                <form className="form-control shadow needs-validation" novalidate onSubmit={this.handleSubmit}>
                    <h5>Sign in</h5>
                    <hr/>
                    <div className="input-control">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input className="form-control" type="email" id="email" onChange={this.handleChange} required/><br/>
                        
                        <label htmlFor="password" className="form-label">Password</label>
                        <input className="form-control" type="password" id="password" onChange={this.handleChange} required/><br/>
                        <center><button type="submit" className="btn btn-success authbtn" onClick={this.handleSubmit}>Login</button></center>
                        {this.props.autherr ? <div className="text-danger" align="center">{this.props.autherr.response.data.non_field_errors}</div>:null} 
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        autherr:state.auth.autherr,
        login_status:state.auth.login_status
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        userLogin: (user) => dispatch(userLogin(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin)
