import React from 'react'
import { connect } from 'react-redux'
import '../../loading.css'
function NetError(props) {
    // if (!props.NetError) {
    //     return <Redirect to='/signin' />
    // }
    return (

        <div className="container col-sm-4 errorpg">
            <center className="text-danger">
                <h1>Error 500</h1>
                <h3>Internal Server Error !</h3>
            </center>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        neterr: state.auth.neterr
    }
}

export default connect(mapStateToProps)(NetError)
