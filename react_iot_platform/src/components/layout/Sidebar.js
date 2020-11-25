import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { MdHome, MdAddBox, MdDevices, MdPerson } from 'react-icons/md'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

export default props => {
    return (
        <Menu>
            <h4 className=" mt-3 mb-5">Things Platform</h4>
            <hr />
            <NavLink className="menu-item" to="/">
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

        </Menu>
    );
}