import React from 'react';
import Login from './Login';
import "../css/navbar.css";
import SignUp from './SignUp';
import Slide from './Slide';

class Welcome extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        _form:'signup'
    }

    _handleClick = (e) => {

        this.setState({
            _form:e.target.value
        })
        console.log(this.state._form)
    }
    _passToLogin = (status) =>{
        this.props._handleLogin(status)
    }
    render(){
        if(this.state._form == 'signup'){
            console.log(this.props)
        return(
            <div className="container-fluid">
                <nav id="navbar" className="navbar fixed-top">
                <div className="container-fluid px-3"><h2>Things Platform</h2>
                <div className="buttons float-right">
                <button type="button" onClick={this._handleClick} value="signup" className="btn btn-sm btn-light float-right">Sign Up</button>
                <button type="button" onClick={this._handleClick} value="login" className="btn btn-sm btn-light float-right mx-1">Login</button>
                </div>
                </div>
                </nav>
                <div className="container"> <Slide /></div>
                <div className="container-fluid mt-5">
                <hr className="container-fluid divider"></hr>
                <div className="desc card card-sm mt-2 float-left">
                       <h5 className="text-danger"> New to Things Platform?</h5>
                        <h5 className="text-danger">Sign up to avail our collection of services.</h5><br/>
                        <h4 className="text-info">With Things Platform you can :</h4>
                        <ul>
                            <li>Monitor your IoT Network.</li>
                            <li>Access and analyze sensor data periodically.</li>
                            <li>Set your own rules for Alert System </li>
                            <li>Get alerts based on rules you mentioned as well as other critical alerts.</li>
                        </ul>
                        <h4 className="text-info" >Key Features :</h4>
                        <ul>
                            <li>User Friendly dashboard.</li>
                            <li>Your network,your rules.</li>
                            <li>Enhanced Anomaly Detection.</li>
                            <li>Alert System based on the anomalies detected.</li>
                        </ul>
                    </div>
                    <SignUp />
                    
                </div>
                
                
            </div>
            
           
        );}
        else if(this.state._form == 'login'){
            return(
                <div className="container-fluid">
                    <nav id="navbar" className="navbar fixed-top">
                    <div className="container-fluid px-3"><h2>Things Platform</h2>
                    <div className="buttons float-right">
                    <button type="button" onClick={this._handleClick} value="signup" className="btn btn-sm btn-light float-right">Sign Up</button>
                    <button type="button" onClick={this._handleClick} value="login" className="btn btn-sm btn-light float-right mx-1">Login</button>
                    </div>
                    </div>
                    </nav>
                    <div className="container"> <Slide /></div>
                    <div className="container-fluid my-5">
                    <hr className="container-fluid divider"></hr>
                    <div className="desclogin card card-sm mt-2 float-left">
                        <h5 className="text-danger"> Already have an account in Things Platform?</h5>
                        <h5 className="text-danger">Login to access our services.</h5><br/>
                        <h4 className="text-info">Things have now become more easier :</h4>
                        <ul>
                            <li>Easily manage your IoT Network using user friendly dashboard.</li>
                            <li>Get preferred alerts at right time.</li>
                            <li>Make right decisions at right time with the help of our enhanced anomaly detection.</li>
                            <li>Set your own rules additional to the ones that exist in our system.</li>

                        </ul>
                    </div>
                        <Login _status={this.props}/>
                    </div>
                    
                </div>
               
            );
        }
    }
    
}
export default Welcome;