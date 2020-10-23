import React from "react";
import "../css/page.css";
import user from "../images/user.jpg"

const Profile = () => {
  return (
    <div className="Content container">
      <center>
        
        <div className="card profile" >
        <div className="card-header"><h3>My Profile</h3></div>
        <img src={user} id="profile_pic" className="rounded-circle mx-auto d-block" alt="..."></img>
        <div className="card-content text-left mx-3 my-3 prof_details">
          Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ABCD<br/><br/>
          Username&nbsp;&nbsp;: abcd<br/><br/>
          Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: abcd@xyz.com<br/><br/>
          Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 0123456789
          </div>
        </div>
        </center>
      
    </div>
  );
};
export default Profile;
