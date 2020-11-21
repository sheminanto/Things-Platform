import React from 'react'

const Overview = ({ device }) => {
    return (
        <div className="card deviceInfo mt-2" >
            <span className="card-header bg-secondary text-light ">{device.tag}</span>
            <p className="px-2">Id : {device.id}<br />Location : {device.location}<br />Description : {device.description}</p>
            <p className="text-secondary px-2">Last modified : {new Date(device.updated_on).toUTCString()}</p>
        </div>
    )
}

export default Overview;