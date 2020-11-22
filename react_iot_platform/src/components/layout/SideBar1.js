import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
import { MdHome, MdAddBox, MdDevices, MdPerson } from 'react-icons/md'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
const SideBar1 = () => {
    return (
        <div className="sidebar">

            <NavLink className="menu-item mt-5" to="/">
                <MdHome />&nbsp;&nbsp;&nbsp;Home
            </NavLink>
            <hr />
            <NavLink className="menu-item" to="/add-device">
                <MdAddBox />&nbsp;&nbsp;&nbsp;Add Device
            </NavLink>
            <hr />
            <NavLink className="menu-item" to="/devices">
                <MdDevices />&nbsp;&nbsp;&nbsp;Devices
            </NavLink>
            <hr />
            <NavLink className="menu-item" to="/profile">
                <MdPerson />&nbsp;&nbsp;&nbsp;User Profile
            </NavLink>

        </div>
    );
}
export default SideBar1