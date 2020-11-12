import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function DeviceDetails(props) {
    const id = props.match.params.id;
    console.log(id)
    const link = localStorage.getItem('token')
    if (!link) return <Redirect to='/home' />
    return (
        <div className="container section device-details">
            <div className="card mt-2">
                <div className="card-body">
                    <span className="card-title">Device Name - {id}</span>
                    <p className="card-text">Et Lorem Lorem nisi ex sit irure aute sit ex do enim ut ea. Labore laborum deserunt Lorem sint anim velit id voluptate. Do consequat irure id eiusmod est ea nisi consequat fugiat. In adipisicing cillum adipisicing veniam eiusmod commodo est consequat amet velit do exercitation. Excepteur magna magna dolore labore magna eu. In ullamco pariatur incididunt fugiat. Deserunt velit deserunt et aute proident elit in laborum cupidatat irure in.</p>
                    <footer className="card-footer">Added on Nov 03 2020 , 1:00 pm</footer>
                </div>

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        login_status: state.auth.login_status
    }
}

export default connect(mapStateToProps)(DeviceDetails)
