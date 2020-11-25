import React from 'react';

const Notifications = () => {
    return (
        <div className="container">
            <h4>Notifications</h4>
            <div className="alert alert-danger shadow" role="alert">
                Alert ...!
            </div>
            <div className="alert alert-warning shadow" role="alert">
                Warning ...!
            </div>

        </div>
    )
}

export default Notifications;