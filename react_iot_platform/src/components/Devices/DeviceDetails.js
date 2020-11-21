import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import GraphPlot from './GraphPlot'
function DeviceDetails(props) {
    const index = props.match.params.id;
    const device = props.devices[index]
    console.log(device)
    const link = localStorage.getItem('token')
    if (!link) return <Redirect to='/home' />
    return (
        <div className="container section device-details">

            <div className="row">
                <div className="col s12 m6">
                    <div className="card mt-2">
                        <span className="card-header text-dark">{device.tag}</span>
                        <div className="card-body">

                            <p>
                                Device ID : {device.id}<br />
                        Parent : {device.parent ? device.parent : "Nil"} <br />
                        Description : {device.description} <br />

                            </p>
                            <footer className="card-footer">Added on {device.created_on}</footer>
                        </div>

                    </div>
                    <GraphPlot />
                </div>

                <div className="col s12 m5 offset-m1">
                    <div className="table-responsive">
                        <table className="table mt-2">
                            <thead className="table-dark">
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>18-10-2020</td>
                                    <td>1.00pm</td>
                                    <td>65</td>
                                </tr>
                                <tr>
                                    <td>18-10-2020</td>
                                    <td>2.00pm</td>
                                    <td>59</td>
                                </tr>
                                <tr>
                                    <td>18-10-2020</td>
                                    <td>3.00pm</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>18-10-2020</td>
                                    <td>4.00pm</td>
                                    <td>81</td>
                                </tr>
                                <tr>
                                    <td>18-10-2020</td>
                                    <td>5.00pm</td>
                                    <td>56</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        login_status: state.auth.login_status,
        devices: state.device.devices
    }
}

export default connect(mapStateToProps)(DeviceDetails)
