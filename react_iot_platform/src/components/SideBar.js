import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/sidebar.css";

const SideBar = () => {
  return (
    <div className="wrapper ">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li>
            <NavLink to="/page1" className="navlink">
              <li>
                <div className="container sidebar-options">Page1</div>
              </li>
            </NavLink>
          </li>
          <li>
            <NavLink to="/page2" className="navlink">
              <div className="container sidebar-options">Page2</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/page3" className="navlink">
              <div className="container sidebar-options">Page3</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/page4" className="navlink">
              <div className="container sidebar-options">Page4</div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/page5" className="navlink">
              <div className="container sidebar-options">Page5</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default SideBar;
