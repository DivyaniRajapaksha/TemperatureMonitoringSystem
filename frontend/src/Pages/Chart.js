import React, { Component, useState } from 'react';
import LineChartContainer from "../components/Chart/LineChartContainer";
const chartData = {
    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    datasets: [
        {
            label: 'Population',
            data: [
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ]
        }
    ]
}


class Chart extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Population',
                        data: [],
                    }
                ]
            }
        };
        this.setChartData = this.setChartData.bind(this);
    }

    componentDidMount() {
        this.setChartData();
    }

    async setChartData() {
        // try {
        //     axios.get(constants.backend_url + "/api/monitor/sensorData/" + this.props.match.params.id).then(
        //         (res) => {
        //             this.setState({
        //                 values: res.data,
        //             });

        //             var datesArray = [];
        //             this.state.values.forEach((item) => {
        //                 datesArray.push(item.date)
        //             })
        //             this.setState({
        //                 dates: Array.from(new Set(datesArray))
        //             })
        //         }
        //     );
        // } catch (err) {
        //     console.log(err);
        // }
    }



    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2 className="text-center mb-5">Chart</h2>
                </div>
                <div className="mt-5">
                    <LineChartContainer chartData={chartData} location="Massachusetts" legendPosition="bottom" />
                </div>
            </div>
        );
    }
}

export default Chart;


