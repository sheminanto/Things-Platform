import React from 'react';
import {NavLink,Link} from 'react-router-dom';
const SignedOutLinks = () => {
    return(
        <ul className="list-inline">
            <li className="list-inline-item mx-2"><button type="button" className="btn btn-outline-light"><a className="navigation" href='/signin'>Sign In</a></button></li>
            <li className="list-inline-item mx-2"><button type="button" className="btn btn-outline-light"><a className="navigation" href='/signup'>Sign Up</a></button></li>
            
        </ul>
      
    )
}
export default SignedOutLinks;