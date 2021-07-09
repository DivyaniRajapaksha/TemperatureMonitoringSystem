import React, { Component } from 'react';
import PropTypes from "prop-types";
import constants from "../constants/constants";
import axios from "axios";

class AddSensor extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };
    constructor() {
        super();
        this.state = {
            id: 0,
            name: "",
            location: "",
            error: ""
        };
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    async handleOnSubmit(e) {
        try {
            e.preventDefault();
            if (!this.state.id && !this.state.name && !this.state.location) {
                this.setState({ error: "Please fill all the fields" })
            }

            let sensorData = {
                sensor_id: this.state.id,
                location: this.state.location,
                sensorName: this.state.name,
            }
            console.log("data: " + sensorData)
            await axios.post("http://localhost:8080/api/sensor/add", sensorData).then((res) => {
                console.log(res.data)
            });
        } catch (err) {
            this.setState({ error: "Error" })
        }

    }


    render() {
        return (
            <div className="App">
                <div className="App-header mb-5">
                    <h2 className="text-center">Add Sensor</h2>
                </div>
                <div className="mt-5">
                    <form>
                        {
                            this.state.error ? (
                                <div className="alert alert-danger" role="alert">
                                    {this.state.error}
                                </div>
                            ) : (
                                <></>
                            )
                        }

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Sensor ID</label>
                            <input type="number"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter Sensor ID"
                                onChange={(e) => { this.setState({ id: e.target.value }); this.setState({ error: "" }) }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Sensor Name</label>
                            <input type="text"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter Sensor Name"
                                onChange={(e) => { this.setState({ name: e.target.value }) }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Sensor Location</label>
                            <input type="text"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter Sensor Location"
                                onChange={(e) => { this.setState({ location: e.target.value }) }}
                            />
                        </div>
                        <button onClick={(e) => this.handleOnSubmit(e)} className="btn btn-primary px-4">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddSensor;