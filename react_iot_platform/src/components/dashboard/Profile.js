import axios from 'axios'
import React from 'react'
import { deleteUser } from '../../store/actions/authActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Profile extends React.Component {
    state = {
        current_password:'',
        id:'',
        username:'',
        first_name:'',
        last_name:'',
        email:''
    }
    constructor(props){
        super(props)
        if(this.props.userDetails){
            console.log("hellosjfjaoi");
            const user = this.props.userDetails
            this.state = user
            console.log('state',localStorage);
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        }) 
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.deleteUser({email:this.state.email,password:this.state.current_password,username:this.state.username});
        
    }
    
    render(){
        
    const link = localStorage.getItem('token')
    if(!link) return <Redirect to='/signin'/>    
    return (
        <div className="profile container col-sm-6  ">
            <div className="card shadow rounded">
                <div class="card-body">
                    <h5 class="card-title">User Details</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">User ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {this.state.id}</li>
                        <li class="list-group-item">Username&nbsp;&nbsp;  : {this.state.username}</li>
                        <li class="list-group-item">First Name&nbsp;&nbsp; :  {this.state.first_name}</li>
                        <li class="list-group-item">Last Name&nbsp;&nbsp; :  {this.state.last_name}</li>
                        <li class="list-group-item">E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {this.state.email}</li>
                    </ul>
                    <hr/>
                    <h5>Delete Account:</h5>
                    <p>Delete your account from Things Platform</p>
                    <form className="profile-form" onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <input type="password" className="form-control delete" id="current_password" placeholder="Current Password" onChange={this.handleChange}/>
                            <button type="submit" className="btn btn-danger h4" onClick={this.handleSubmit}>Delete Account</button>
                        </div>
                    </form>
                    {this.props.deleteerr ? <div className="text-danger error">{this.props.deleteerr.data.password[0]}</div>:null}
                </div>
            </div>
        </div>
    )
    }
}

const mapStateToProps = (state) =>{
    return{
        userDetails:state.auth.userDetails,
        login_status:state.auth.login_status,
        deleteerr:state.auth.deleteerr
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deleteUser:(user)=>dispatch(deleteUser(user)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)
