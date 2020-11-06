import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <ul className="list-inline">
            <li className="list-inline-item mx-2"><button type="button" className="btn btn-sm btn-outline-light"><NavLink className="navigation" to='/signin'>Signin</NavLink></button></li>
            <li className="list-inline-item mx-2"><button type="button" className="btn btn-sm btn-outline-light"><NavLink className="navigation" to='/signup'>Signup</NavLink></button></li>
            
        </ul>
      
    )
}
export default SignedOutLinks;