import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class ChartDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charData: {
        labels: ["A", "B", "C", "D"],
        datasets: [
          {
            label: "Population",
            data: [130000, 110000, 120000, 105000, 115000],
            backgroundColor: [
              "rgba(255,192,168)",
              "rgba(200,152,198)",
              "rgba(155,102,268)",
              "rgba(055,292,068)",
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="container Content chart">
        <h2>Chart Demo</h2>
        <div className="card">
          <div className="card-header">Pie</div>
          <div className="card-body">
            <Pie
              data={this.state.charData}
              options={{
                title: {
                  display: true,
                  text: "Sample Chart",
                  fontSize: 25,
                },
                // maintainAspectRatio: false,
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </div>

        <div className="card ">
          <div className="card-header">Bar</div>
          <div className="card-body">
            <Bar
              data={this.state.charData}
              options={{
                title: {
                  display: true,
                  text: "Sample Chart",
                  fontSize: 25,
                },
                // maintainAspectRatio: false,
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-header">Line</div>
          <div className="card-body">
            <Line
              data={this.state.charData}
              options={{
                title: {
                  display: true,
                  text: "Sample Chart",
                  fontSize: 25,
                },
                // maintainAspectRatio: false,
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ChartDemo;
