import React from 'react';
import {Link} from 'react-router-dom';
import SignedLinks from './SignedLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

const NavBar = (props) => {
   
    const link = localStorage.getItem('token') ? <SignedLinks/> : <SignedOutLinks/>
    if(!link) return <Redirect to='/signin'/>
    return(
        <nav className="navbar bg-dark bg-gradient  ">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand text-light" href="#"><h4>THINGS PLATFORM</h4></Link>
                {link}
            </div>
        </nav>
    )
}
    const mapStateToProps = (state) =>{
        return{
            login_status:state.auth.login_status
        }
    }

export default connect(mapStateToProps)(NavBar);