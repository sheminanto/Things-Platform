import React from 'react';
import "../css/welcome.css";
import axios from 'axios';
class SignUp extends React.Component{
    state = {
        fname:'',
        lname:'',
        email:'',
        password1:'',
        password2:'',
        phone:''   
    }
    _handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value,
            
        })
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted');
        console.log(this.state.fname);
        console.log(this.state.lname);
        console.log(this.state.email);
        console.log(this.state.password1);
        console.log(this.state.password2);
        console.log(this.state.phone);
        const userReg = {
            fname:this.state.fname,
            lname:this.state.lname,
            email:this.state.email,
            password1:this.state.password1,
            password2:this.state.password2,
            phone:this.state.phone
        }
        axios.post(`http://127.0.0.1:5000/signup`,userReg)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
        this.setState({
            fname:'',
            lname:'',
            email:'',
            password1:'',
            password2:'',
            phone:''
        })
        
    }
    render(){
        return(
        <div className="signUpForm container mt-2 float-right">
            <div className="card mb-2">
                <div className="card-header">
                    <h4>Sign up</h4>
                </div>
                <div className="card-content">
                    <form onSubmit={this._handleSubmit}>
                        <input id="fname" type="text" className="form-control" placeholder="First Name"  value={this.state.fname} onChange={this._handleChange} required></input>
                        <input id="lname" type="text" className="form-control" placeholder="Last Name" value={this.state.lname} onChange={this._handleChange} required></input>
                        <input id="email" type="email" className="form-control" placeholder="E-mail" value={this.state.email} onChange={this._handleChange} required></input>
                        <input id="password1" type="password" className="form-control" placeholder="Password" value={this.state.password1} onChange={this._handleChange} required></input>
                        <input id="password2" type="password" className="form-control" placeholder="Confirm Password" value={this.state.password2} onChange={this._handleChange} required></input>
                        <input id="phone" type="text" className="form-control" placeholder="Phone" value={this.state.phone} onChange={this._handleChange } required></input>
                        
                        <center><button type="submit" className="btn btn-success btnfm" value="Sign Up">Sign Up</button></center> 
                    </form>
                </div>
            </div>
        </div>
        );
    }
}
export default SignUp;




