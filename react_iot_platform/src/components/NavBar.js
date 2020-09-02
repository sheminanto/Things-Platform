import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <nav id="navbar" className="navbar fixed-top">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Things Platform
        </a>
        <div className="dropdown pr-5 mr-5">
          <div
            className="btn dropdown-toggle user"
            // role="button"
            id="userLink"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            User
          </div>
          <ul className="dropdown-menu" aria-labelledby="userLink">
            <li>
              <NavLink className="dropdown-item" to="/profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/settings">
                Settings
              </NavLink>
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
  );
};
export default NavBar;
