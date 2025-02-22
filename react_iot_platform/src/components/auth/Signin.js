import React, { Component } from 'react'
import { clearStatus, userLogin } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.userLogin(this.state)
    }
    render() {
        // console.log('loading',this.props.loading);
        if (this.props.neterr) return <Redirect to='/server-error' />
        const link = localStorage.getItem('token')
        if (link) return <Redirect to='/' />
        return (
            <div className="signin container form-rounded col-sm-3 ">
                <form onSubmit={this.handleSubmit} className="form-control shadow">
                    <h4 className="col-sm-4 text-dark mt-2">Sign In</h4>
                    <hr />
                    <div className="input-control">
                        <input className="form-control textbox " type="email" id="email" placeholder="E-mail" onChange={this.handleChange} required />
                        {this.props.autherr ? <div className="text-danger error">{this.props.autherr.response.data.email}</div> : null}
                        <input className="form-control textbox " type="password" id="password" placeholder="Password" onChange={this.handleChange} required />
                        {this.props.autherr ? <div className="text-danger error">{this.props.autherr.response.data.password}</div> : null}
                        {this.props.autherr ? <div className="text-danger error mt-2" align="center">{this.props.autherr.response.data.non_field_errors}</div> : null}
                        {/* {this.props.neterr ? <div className="text-danger error mt-2" align="center">{this.props.neterr.err.neterr}</div>:null} */}

                        <center><hr /><button type="submit" className="btn btn-outline-success btn-block authbtn  mt-3 mb-4" onClick={this.handleSubmit}>Login</button></center>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        neterr: state.auth.neterr,
        autherr: state.auth.autherr,
        login_status: state.auth.login_status,
        loading: state.auth.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (user) => dispatch(userLogin(user)),
        clearStatus: () => dispatch(clearStatus())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
