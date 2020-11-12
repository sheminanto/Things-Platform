import { React } from "react";
import { Link } from "react-router-dom";
import SignedLinks from "./SignedLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import logo from "../../images/logo.png";
import Sidebar from "./Sidebar"


const NavBar = (props) => {
  // Generate user initial
  let initial = '';
  const setInitials = () => {
    if (props.userDetails) {
      const first_name = props.userDetails.first_name;
      const last_name = props.userDetails.last_name;
      initial = (first_name.charAt(0) + last_name.charAt(0)).toUpperCase();
    }

  }
  setInitials();
  const link = localStorage.getItem("token") ? (
    <SignedLinks initial={initial} />
  ) : (
      <SignedOutLinks />
    );
  if (!link) return <Redirect to="/signin" />;
  const brand = props.login_status ? '/' : '/home'
  console.log(props.login_status);

  return (

    <div>
      {localStorage.getItem('token') ? <Sidebar /> : null}

      <nav className="navbar bg-dark bg-gradient  ">

        <div className="container-sm">
          <Link to={brand} className="navbar-brand text-light" href="#">
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
      {props.loading ? <div className="linear-progress small">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
      </div> : null}
    </div>

  );
};
const mapStateToProps = (state) => {
  return {
    login_status: state.auth.login_status,
    userDetails: state.auth.userDetails,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps)(NavBar);
