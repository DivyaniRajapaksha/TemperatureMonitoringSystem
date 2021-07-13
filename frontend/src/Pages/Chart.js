import React, { Component, useState } from 'react';
import constants from "../constants/constants";
import axios from "axios";
import LineChartContainer from "../components/Chart/LineChartContainer";
import PropTypes from "prop-types";

class Chart extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };
    constructor() {
        super();
        this.state = {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: '',
                        data: [],
                        borderColor: "#742774"
                    }
                ]
            }
        };
        this.setChartData = this.setChartData.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem("user-id") === null) {
            this.props.history.push("/")
        } else {
            this.setChartData();
        }
        
    }

    async setChartData() {
        try {
            axios.get(constants.backend_url + "/api/monitor/getDataByDate/" + this.props.match.params.date).then(
                (res) => {
                    this.setState({
                        values: res.data,
                    });

                    var timeArray = [];
                    var valueArray = [];
                    var type = "";
                    this.state.values.forEach((item) => {
                        timeArray.push(item.time)
                        valueArray.push(item.data_value)
                        type = item.type
                    })
                    this.setState({
                        chartData: {
                            labels: timeArray,
                            datasets: [
                                {
                                    label: type,
                                    data: valueArray,
                                    borderColor: "#742774"
                                }
                            ]
                        }
                    })
                }
            );
        } catch (err) {
            console.log(err);
        }
    }



    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2 className="text-center mb-5">Chart on {this.props.match.params.date}</h2>
                </div>
                <div className="mt-5">
                    <div
                        className="container-lg  shadow p-5 mb-5  text-dark"
                        style={{ marginTop: "5%", height: "700px" }}
                    >
                        <LineChartContainer chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />

                    </div>

                </div>
            </div>
        );
    }
}

export default Chart;


