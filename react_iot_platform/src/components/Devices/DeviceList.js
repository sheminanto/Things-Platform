import React from 'react';
import Overview from '../Devices/Overview'

const DeviceList = ({ devices }) => {
    return (

        <div className="device-list section">
            <h4>Your Devices</h4>
            {devices.length ? <div>
                {devices.map(device => {
                    return (
                        <Overview device={device} key={device.id} />
                    )
                })}</div> : <div className="alert alert-info">No devices to display...!</div>}


        </div>
    )
}

export default DeviceList;