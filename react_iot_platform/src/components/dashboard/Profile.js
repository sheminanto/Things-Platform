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

    deleteAccount = () =>{
        axios({
            method:'DELETE',
            url:process.env.REACT_APP_API_URL + "/auth/users/me/",
            data:{password:this.state.current_password,email:'shreyassreekripa@gmail.com',username:'shreyas_sk'},
            headers: {
                Authorization: "Token " + localStorage.getItem("token"),
            },
        }).then(res=>{
            localStorage.removeItem('token')
            return <Redirect to='/signin'/>
            console.log(res);
            // this.setState({
            //     id:res.data.id,
            //     username:res.data.username,
            //     first_name:res.data.first_name,
            //     last_name:res.data.last_name,
            //     email:res.data.email
            // })
        }).catch(err=>{
            console.log(err.response);
        })
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        }) 
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.deleteUser({email:'shreyassreekripa@gmail.com',password:this.state.current_password,username:'shreyas_sk'});
        
    }

    
    render(){
        
        
    const link = localStorage.getItem('token')
    if(!link) return <Redirect to='/signin'/>
    // if(this.props.userDetails){
    //     user = this.props.userDetails.data
    // }
    
    return (
        <div className="profile container col-sm-6  ">
            {/* <div className="row">
                <div className="col s12 m6"> */}
                    <div className="card">
                        <div class="card-body">
                            <h5 class="card-title">User Details</h5>
                            {/* <div  align="center"><span className="dot" align="center"><h1>SK</h1></span></div> */}
                            {/* <div className="table table-responsive" align="center">
                                <tbody>
                                    <tr>
                                        <th>User ID</th>
                                        <td>{user.id}</td>
                                    </tr>
                                     <tr>
                                        <th>Username</th>
                                        <td>{user.username}</td>
                                    </tr>
                                    <tr>
                                        <th>First Name</th>
                                        <td>{user.first_name}</td>
                                    </tr>
                                    <tr>
                                        <th>Last Name</th>
                                        <td>{user.last_name}</td>
                                    </tr>
                                    <tr>
                                        <th>E-mail</th>
                                        <td>{user.email}</td>
                                    </tr>
                                </tbody>
                            </div> */}
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
                                <div className="input-group"><input type="password" className="form-control delete" id="current_password" placeholder="Current Password" onChange={this.handleChange}/>
                                <button type="submit" className="btn btn-danger h4" onClick={this.handleSubmit}>Delete Account</button></div>
                                
                            </form>
                            
                        </div>
            </div>
                
            </div>
        
            
            
        
    )
    }
}

const mapStateToProps = (state) =>{
    return{
        // userDetails:state.auth.userDetails,
        login_status:state.auth.login_status
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deleteUser:(user)=>dispatch(deleteUser(user)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)
