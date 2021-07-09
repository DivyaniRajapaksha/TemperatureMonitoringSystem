import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class Sensors extends Component {
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
        this.getAllSensors = this.getAllSensors.bind(this);
    }

    getAllSensors() {

    }




    render() {
        return (
            <div className="App">
                <div className="App-header mb-5">
                    <h2 className="text-center px-4">All Sensor</h2>
                </div>
                <Link to="addsensor">
                    <button type="button" className="btn btn-info">Add Sensor</button>
                </Link>
                <div className="my-5">
                    <div>
                        <table className="table table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Sensor ID</th>
                                    <th scope="col">Sensor Name</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><Link to="/sensor-dates">View</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
}

export default Sensors;