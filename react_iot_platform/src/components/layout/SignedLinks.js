import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { userLogout } from '../../store/actions/authActions'

const SignedLinks = (props) => {
    // console.log(this.props);
    return(
        <ul className="list-inline mt-1">
            <li className="list-inline-item mx-2"><button type="button" className="btn btn-sm btn-outline-light"><NavLink className="navigation" to='/add-device'>Add Device</NavLink></button></li>
            <li className="list-inline-item mx-2"><button type="button" className="btn btn-sm btn-outline-light"><a className="navigation" onClick={props.userLogout}>Logout</a></button></li>
            <li className="list-inline-item mx-2"><NavLink className="navigation" to='/' className='btn btn-floating btn-light'>SK</NavLink></li>
        </ul>
      
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        userLogout:() => dispatch(userLogout())
    }
}   
export default connect(null,mapDispatchToProps)(SignedLinks);