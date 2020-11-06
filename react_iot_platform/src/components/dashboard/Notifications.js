import React from 'react';

const Notifications = () =>{
    return(
        <div className="container">
            <h4>Notifications</h4>
            <div className="alert alert-primary" role="alert">
                 A simple primary alert—check it out!
            </div>
            <div className="alert alert-secondary" role="alert">
                A simple secondary alert—check it out!
            </div>
            <div className="alert alert-success" role="alert">
                A simple success alert—check it out!
            </div>
            <div className="alert alert-danger" role="alert">
                A simple danger alert—check it out!
            </div>
        </div>
    )
}

export default Notifications;