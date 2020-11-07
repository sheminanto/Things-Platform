import React from "react";
import { Link } from "react-router-dom";
import SignedLinks from "./SignedLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import logo from "../../images/logo.png";

const NavBar = (props) => {
  //Generate user initial
  let initial = '';
  const setInitials = () => {
    if(props.userDetails){
    const first_name = props.userDetails.data.first_name;
    const last_name = props.userDetails.data.last_name;
    initial = (first_name.charAt(0)+last_name.charAt(0)).toUpperCase();
    }
    
  }
  setInitials();
  const link = localStorage.getItem("token") ? (
    <SignedLinks initial={initial}/>
  ) : (
    <SignedOutLinks />
  );
  if (!link) return <Redirect to="/signin" />; 
  return (
    <nav className="navbar bg-dark bg-gradient  ">
      <div className="container-sm">
        <Link to="/" className="navbar-brand text-light" href="#">
          <img
            className="rounded d-inline-block align-top"
            width="30"
            height="30"
            src={logo}
            alt=""
          />{" "}
          THINGS PLATFORM
        </Link>
        {link}
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    login_status: state.auth.login_status,
    userDetails:state.auth.userDetails
  };
};

export default connect(mapStateToProps)(NavBar);
