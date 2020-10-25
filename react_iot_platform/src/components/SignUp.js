import React from 'react';
import "../css/welcome.css";

class SignUp extends React.Component{
    state = {
        fname:null,
        lname:null,
        email:null,
        password1:null,
        password2:null,
        phone:null   
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
        <div className="signUpForm container mt-5 float-right">
            <div className="card">
                <div className="card-header">
                    <h4>Sign up</h4>
                </div>
                <div className="card-content">
                    <form onSubmit={this._handleSubmit}>
                        <input id="fname" type="text" className="form-control" placeholder="First Name" value={this.state.fname} onChange={this._handleChange}></input>
                        <input id="lname" type="text" className="form-control" placeholder="Last Name" value={this.state.lname} onChange={this._handleChange}></input>
                        <input id="email" type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this._handleChange}></input>
                        <input id="password1" type="password" className="form-control" placeholder="Password" value={this.state.password1} onChange={this._handleChange}></input>
                        <input id="password2" type="password" className="form-control" placeholder="Confirm Password" value={this.state.password2} onChange={this._handleChange}></input>
                        <input id="phone" type="number" className="form-control" placeholder="Phone" value={this.state.phone} onChange={this._handleChange}></input>
                        
                        <center><button type="submit" className="btn btn-primary" value="Sign Up">Sign Up</button></center> 
                    </form>
                </div>
            </div>
        </div>
        );
    }
}
export default SignUp;




