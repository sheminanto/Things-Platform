import React from 'react';
import Login from './Login';
import "../css/navbar.css";
import SignUp from './SignUp';
import Slide from './Slide';

class Welcome extends React.Component{
    state = {
        _form:'signup'
    }

    _handleClick = (e) => {

        this.setState({
            _form:e.target.value
        })
        console.log(this.state._form)
    }
    render(){
        if(this.state._form == 'signup'){
        return(
            <div className="container-fluid">
                <nav id="navbar" className="navbar fixed-top">
                <div className="container-fluid px-2"><h3>Things Platform</h3>
                <div className="buttons float-right">
                <button type="button" onClick={this._handleClick} value="signup" className="btn btn-sm btn-light float-right">Sign Up</button>
                <button type="button" onClick={this._handleClick} value="login" className="btn btn-sm btn-light float-right mx-1">Login</button>
                </div>
                </div>
                </nav>
                <div className="container-fluid my-5">
                    <SignUp />
                </div>
                
            </div>
           
        );}
        else if(this.state._form == 'login'){
            return(
                <div className="container-fluid">
                    <nav id="navbar" className="navbar fixed-top">
                    <div className="container-fluid px-2"><h3>Things Platform</h3>
                    <div className="buttons float-right">
                    <button type="button" onClick={this._handleClick} value="signup" className="btn btn-sm btn-light float-right">Sign Up</button>
                    <button type="button" onClick={this._handleClick} value="login" className="btn btn-sm btn-light float-right mx-1">Login</button>
                    </div>
                    </div>
                    </nav>
                    <div className="container"> <Slide /></div>
                    <div className="container-fluid my-5">
                        <Login />
                    </div>
                    
                </div>
               
            );
        }
    }
    
}
export default Welcome;