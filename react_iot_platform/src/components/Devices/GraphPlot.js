import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux'



class GraphPlot extends React.Component {

    render() {
        const state = {
            labels: this.props.labels,
            datasets: [
                {
                    label: this.props.label,
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: this.props.data
                }
            ]
        }

        return (
            <div className="container my-5 shadow">

                <Line
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Time Series Data (' + this.props.label + ')',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        login_status: state.auth.login_status,
        devices: state.device.devices,
        data: state.device.datas,
        labels: state.device.labels,
        fetchDataStatus: state.device.fetchDataStatus
    }
}
export default connect(mapStateToProps)(GraphPlot);