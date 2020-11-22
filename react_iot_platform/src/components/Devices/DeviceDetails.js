import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import GraphPlot from './GraphPlot'
import { fetchData } from '../../store/actions/deviceActions'

class DeviceDetails extends React.Component {
    state = {
        index: '',
        device: '',
        data: ''
    }
    componentDidMount() {

        setInterval(this.props.fetchData(this.props.devices[this.props.match.params.id].id), 100000)

        this.setState({
            index: this.props.match.params.id,
            device: this.props.devices[this.props.match.params.id],


        })


    }
    static getDerivedStateFromProps(props) {
        return { dataTable: props.dataTable }
    }
    render() {

        console.log("state", this.state);
        const link = localStorage.getItem('token')
        if (!link) return <Redirect to='/home' />
        return (

            <div className="container section device-details">
                <div className="card mt-2">
                    <span className="card-header text-dark">{this.state.device.tag}</span>
                    <div className="card-body">

                        <p>
                            Device ID : {this.state.device.id}<br />
                                    Parent : {this.state.device.parent ? this.state.device.parent : "Nil"} <br />
                                    Description : {this.state.device.description} <br />

                        </p>
                        <footer className="card-footer">Added on {new Date(this.state.device.created_on).toUTCString()}</footer>
                    </div>

                </div>
                <GraphPlot label={this.state.device.tag} />


                <div className="table-responsive">
                    <table className="table table-hover mt-2">
                        <thead className="table-dark ">
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.dataTable.map(device => {
                                const timeStamp = new Date(device.datetime);
                                const date = timeStamp.getDate().toString() + '-' + (timeStamp.getMonth() + 1).toString() + '-' + timeStamp.getFullYear().toString();
                                return (
                                    <tr>
                                        <td>{date}</td>
                                        <td>{timeStamp.getHours().toString() + ":" + timeStamp.getMinutes().toString()}</td>
                                        <td>{device.data}</td>
                                    </tr>)
                            })}

                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        login_status: state.auth.login_status,
        devices: state.device.devices,
        data: state.device.datas,
        labels: state.device.labels,
        dataTable: state.device.dataTable,
        fetchDataStatus: state.device.fetchDataStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id) => dispatch(fetchData(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetails)
