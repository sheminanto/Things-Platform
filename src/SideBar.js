import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "react-sidebar";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="wrapper ">
      <nav id="sidebar">
        {/* <div className="sidebar-header"></div>
        <h3>Sidebar</h3> */}
        <ul className="list-unstyled components">
          {/* <p>HEading 1</p> */}
          <li>
            <NavLink to="/home" className="navlink">
              <li>
                <div className="container sidebar-options">Home</div>
              </li>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navlink">
              <div className="container sidebar-options">About</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navlink">
              <div className="container sidebar-options">Contact</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/chartdemo" className="navlink">
              <div className="container sidebar-options">Chart Demo</div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/cards" className="navlink">
              <div className="container sidebar-options">Cards</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
// class SideBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarOpen: true,
//     };
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }

//   onSetSidebarOpen(open) {
//     this.setState({ sidebarOpen: open });
//   }

//   render() {
//     return (
//       <Sidebar
//         sidebar={<b>Sidebar content</b>}
//         open={this.state.sidebarOpen}
//         onSetOpen={this.onSetSidebarOpen}
//         styles={{ sidebar: { background: "white" } }}
//       >
//         <button
//           className="btn btn-secondary"
//           onClick={() => this.onSetSidebarOpen(true)}
//         >
//           Open sidebar
//         </button>
//         <ul className="list-unstyled components">
//           <p>HEading 1</p>
//           <li>
//             <NavLink to="/">
//               <li>
//                 <button className="btn btn-sm btn-light">Home</button>
//               </li>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">
//               <button className="btn btn-sm btn-light">About</button>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact">
//               <button className="btn btn-sm btn-light">Contact</button>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/chartdemo">
//               <button className="btn btn-sm btn-light">Chart Demo</button>
//             </NavLink>
//           </li>

//           <li>
//             <button className="btn btn-sm btn-light">Button2</button>
//           </li>
//           <li>
//             <button className="btn btn-sm btn-light">Button3</button>
//           </li>
//         </ul>
//       </Sidebar>
//     );
//   }
// }

export default SideBar;
