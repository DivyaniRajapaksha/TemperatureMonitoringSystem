import React, { Component } from 'react';
import PropTypes from "prop-types";
import constants from "../constants/constants";
import axios from "axios";



class Notification extends Component {
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
        this.getAllNotification = this.getAllNotification.bind(this);
    }

    getAllNotification() {
        try {
            axios.get(constants.backend_url + "/api/monitor/alertData").then(
                (res) => {
                    this.setState({
                        values: res.data,
                    });
                }
            );
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        if (localStorage.getItem("user-id") === null) {
            this.props.history.push("/")
        } else {
            this.getAllNotification();
        }
    }



    render() {
        return (
            <div className="App">
                <div className="App-header mb-5">
                    <h2 className="text-center mb-5">Notifications</h2>
                </div>
                <div className="my-5">
                    <div>
                        <table className="table table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Sensor ID</th>
                                    <th scope="col">Sensor Type</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Notification Sent</th>
                                    <th scope="col">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.values.map((item, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{item.sensor_id}</td>
                                                <td>{item.type}</td>
                                                <td>{item.date}</td>
                                                <td>{item.time}</td>
                                                <td>{item.notificationSent}</td>
                                                <td>{item.data_value}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
}

export default Notification;