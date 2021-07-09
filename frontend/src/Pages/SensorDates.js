import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


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
        };
        this.getAllSensorDates = this.getAllSensorDates.bind(this);
    }

    getAllSensorDates() {

    }




    render() {
        return (
            <div className="App">
                <div className="App-header mb-5">
                    <h2>Sensor Dates</h2>
                </div>
                <div className="my-5">
                    <div>
                        <Link to="/chart">
                            <div className="alert alert-primary my-3" role="alert" style={{ cursor: "pointer" }}>
                                This is a primary alert—check it out!
                            </div>
                        </Link>
                        <Link to="/chart">
                            <div className="alert alert-primary my-3" role="alert" style={{ cursor: "pointer" }}>
                                This is a primary alert—check it out!
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default SensorDates;