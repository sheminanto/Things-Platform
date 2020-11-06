import React from 'react';
import Overview from '../Devices/Overview'

const DeviceList = ({devices}) =>{
    return(
        <div className="device-list section">
        <h4>Your Devices</h4>
            { devices && devices.map(device =>{
                return(
                    <Overview device={device} key={device.id} />
                )
            })}
            

        </div>
    )
}

export default DeviceList;