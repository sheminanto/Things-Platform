import React from 'react';
import "../css/welcome.css";
import axios from 'axios';

class Login extends React.Component{

    state = {
        username:'',
        password:''   
    }
    _handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value,
            
        })
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted');
        console.log(this.state.username);
        console.log(this.state.password)
        this.setState({
            username:'',
            password:''
        })  
        const user = {
            'username':this.state.username,
            'password':this.state.password
        }
        const username = this.state.username.toString()
        console.log(user);
        axios.post(`http://127.0.0.1:8000/auth/token/login`,user)
      .then(res => {
        console.log(res);
        console.log(res.data.auth_token);
        console.log('token '+res.data.auth_token)
        axios.post(`http://127.0.0.1:8000/auth/users/me`,user,{headers:{
            Authorization:'token '+res.data.auth_token
        }}).then(res =>{
            console.log(res)
        })
        
      })
       
        
    }
    render(){
        return(
        <div className="loginForm container mt-2 float-right">
            <div className="card">
                <div className="card-header">
                    <h4>Login</h4>
                </div>
                <div className="card-content">
                    <form onSubmit={this._handleSubmit}>
                        <input id="username" type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={this._handleChange} required></input>
                        <input id="password" type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this._handleChange} required></input>
                        <a href="#" className="link-info" id="recoverAcc">Trouble accessing your account?</a>
                        <center><button type="submit" className="btn btn-success my-2 btnfm" value="Login">Login</button></center> 
                    </form>
                </div>
            </div>
        </div>
        );
    }
}
export default Login;




