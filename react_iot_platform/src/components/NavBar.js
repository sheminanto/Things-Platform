import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import {connect} from 'react-redux';

class NavBar extends React.Component {
  render(){
  return (
    <nav id="navbar" className="navbar fixed-top">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Things Platform
        </a>
        <div className="dropdown pr-5 mr-2">
          <div
            className="btn dropdown-toggle user"
            // role="button"
            id="userLink"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            {this.props.posts[1].name}
          </div>
          <ul className="dropdown-menu" aria-labelledby="userLink">
            <li>
              <NavLink className="dropdown-item" to="/profile">
                Profile
              </NavLink>
              <hr className="divider"></hr>
            </li>
            
            <li>
              <NavLink className="dropdown-item" to="/settings">
                Settings
              </NavLink>
              <hr className=" divider"></hr>
            </li>
            
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );}
};
const mapStateToProps = (state) =>{
  return{
    posts:state.posts
  }
}

export default connect(mapStateToProps)(NavBar)
