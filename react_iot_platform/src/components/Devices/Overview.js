import React from 'react'

const Overview = ({device}) =>{
    return(
        <div className="card deviceInfo mt-2" >
            <span className="card-header bg-secondary text-light ">{device.name}</span>
            <p className="px-2">Id : {device.id}<br/>Location : {device.location}<br/>Description : {device.description}</p>
            <p className="text-secondary px-2">November 3 2020 , 1:00 pm</p>
        </div>
    )
}

export default Overview;