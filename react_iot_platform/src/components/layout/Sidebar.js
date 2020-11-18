import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { MdHome, MdAddBox, MdDevices, MdPerson } from 'react-icons/md'
import './sidebar.css'
// import { a } from 'react-router-dom'

export default props => {
    return (
        <Menu>
            <h4 className=" mt-3 mb-5">Things Platform</h4>
            <hr />
            <a className="menu-item" href="/">
                <MdHome />&nbsp;&nbsp;&nbsp;Home
            </a>
            <hr />
            <a className="menu-item" href="/add-device">
                <MdAddBox />&nbsp;&nbsp;&nbsp;Add Device
            </a>
            <hr />
            <a className="menu-item" href="/devices">
                <MdDevices />&nbsp;&nbsp;&nbsp;Devices
            </a>
            <hr />
            <a className="menu-item" href="/profile">
                <MdPerson />&nbsp;&nbsp;&nbsp;User Profile
            </a>

        </Menu>
    );
}