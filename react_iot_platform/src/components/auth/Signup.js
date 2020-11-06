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
            <div className="container form-rounded col-sm-4">
                <form className="form-control shadow" onSubmit={this.handleSubmit}>
                    <h4 className="text-dark mt-2">Sign Up</h4>
                    <hr/>
                    <div className="row input-control">
                        <div className="col s12 m6 signup">
                        <input className="form-control textbox " type="text" id="first_name" placeholder="First Name" onChange={this.handleChange} required/>                      
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <input className="form-control textbox " type="text" id="last_name" placeholder="Last Name" onChange={this.handleChange}/>
                        </div>
                        </div>
                        <input className="form-control textbox " type="text" id="username" placeholder="Username" onChange={this.handleChange} required/>
                        {this.props.regerr ? <div className="text-danger error">{this.props.regerr.response.data.username}</div>:null} 
                        <input className="form-control textbox " type="email" id="email" placeholder="Email" onChange={this.handleChange}/>
                        {this.props.regerr ? <div className="text-danger error">{this.props.regerr.response.data.email}</div>:null} 
                        <input className="form-control textbox " type="password" id="password" placeholder="Password" onChange={this.handleChange} required/>
                        {this.props.regerr ? <div className="text-danger error">{this.props.regerr.response.data.password}</div>:null} 
                        <input className="form-control textbox " type="password" id="re_password" placeholder="Confirm Password" onChange={this.handleChange} required/>
                        {this.props.regerr ? <div className="text-danger error">{this.props.regerr.response.data.re_password}</div>:null}
                        {this.props.regerr ? <div className="text-danger error" align="center">{this.props.regerr.response.data.non_field_errors}</div>:null}  
                        <center><hr/><button type="submit" className="btn btn-outline-success authbtn mt-3 mb-4 btn-block  " onClick={this.handleSubmit}>Sign Up</button></center>
                        
                   
                </form>
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        regerr:state.auth.regerr,
        login_status:state.auth.login_status
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        userSignup: (user) => dispatch(userSignup(user)),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)

