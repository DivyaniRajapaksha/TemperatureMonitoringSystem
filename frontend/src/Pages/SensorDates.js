import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import constants from "../constants/constants";
import axios from "axios";


class SensorDates extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };
    constructor() {
        super();
        this.state = {
            values: [],
            dates: []
        };
        this.getAllSensorDates = this.getAllSensorDates.bind(this);
    }

    async getAllSensorDates() {
        try {
            axios.get(constants.backend_url + "/api/monitor/sensorData/" + this.props.match.params.id).then(
                (res) => {
                    this.setState({
                        values: res.data,
                    });

                    var datesArray = [];
                    this.state.values.forEach((item) => {
                        datesArray.push(item.date)
                    })
                    this.setState({
                        dates: Array.from(new Set(datesArray))
                    })
                }
            );
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getAllSensorDates();
    }

    render() {
        return (
            <div className="App">
                <div className="App-header mb-5">
                    <h2 className="text-center">Sensor Dates</h2>
                </div>
                <div className="my-5">
                    <div>
                        {
                            this.state.dates.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Link to={"/chart/" + item} >
                                            <div className="alert alert-primary my-3" role="alert" style={{ cursor: "pointer" }}>
                                                {item}
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        );
    }
}

export default SensorDates;