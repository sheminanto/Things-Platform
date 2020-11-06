import React from "react";
import "../css/page.css";
import user from "../images/user.jpg"
import {connect} from 'react-redux';

class Profile extends React.Component {
  render(){
  return (
    <div className="Content container">
      <center>
        
        <div className="card profile" >
        <div className="card-header"><h3>My Profile</h3></div>
        <img src={user} id="profile_pic" className="rounded-circle mx-auto d-block" alt="..."></img>
        <div className="card-content text-left mx-3 my-3 prof_details">
          Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {this.props.posts[1].name} {/*Name*/}
          <br/><br/>
          Username&nbsp;&nbsp;: {this.props.posts[1].username}<br/><br/>
          Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {this.props.posts[1].email}<br/><br/>
          Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {this.props.posts[1].phone}
          </div>
        </div>
        </center>
      
    </div>
  );}
};

const mapStateToProps = (state) =>{
  return{
    posts:state.posts
  }
}

export default connect(mapStateToProps)(Profile)

