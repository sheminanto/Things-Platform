import React from 'react';
import { Line } from 'react-chartjs-2';

const state = {
    labels: ['1:00pm', '2:00pm', '3:00pm',
        '4:00pm', '5:00pm'],
    datasets: [
        {
            label: 'Temperature',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: ['65', 59, 80, 81, 56]
        }
    ]
}

export default class App extends React.Component {
    render() {
        return (
            <div className="container my-5">
                <Line
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Time Series Temperature Data',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}