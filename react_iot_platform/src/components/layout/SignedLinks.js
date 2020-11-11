import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../../store/actions/authActions'

const SignedLinks = (props) => {
    // console.log("signed",props);
    return (
        <ul className="list-inline mt-1">
            <li className="list-inline-item mx-2"><NavLink className="navigation" to='/add-device'><button type="button" className="btn btn-outline-light">Add Device</button></NavLink></li>
            <li className="list-inline-item mx-2"><a className="navigation" onClick={props.userLogout}><button type="button" className="btn btn-outline-light">Logout</button></a></li>
            <li className="list-inline-item mx-2"><NavLink to='/profile' className='navigation btn btn-floating btn-outline-light'>{props.initial}</NavLink></li>
        </ul>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => dispatch(userLogout())
    }
}
export default connect(null, mapDispatchToProps)(SignedLinks);