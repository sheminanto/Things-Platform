import React from 'react';
import "../css/welcome.css";

class Login extends React.Component{
    state = {
        username:null,
        password:null   
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
        
    }
    render(){
        return(
        <div className="loginForm container mt-5 float-right">
            <div className="card">
                <div className="card-header">
                    <h4>Login</h4>
                </div>
                <div className="card-content">
                    <form onSubmit={this._handleSubmit}>
                        <input id="username" type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={this._handleChange}></input>
                        <input id="password" type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this._handleChange}></input>
                        
                        <center><button type="submit" className="btn btn-primary" value="Login">Login</button></center> 
                    </form>
                </div>
            </div>
        </div>
        );
    }
}
export default Login;




