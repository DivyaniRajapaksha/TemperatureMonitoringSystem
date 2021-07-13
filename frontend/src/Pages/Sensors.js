import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import constants from "../constants/constants";
import axios from "axios";

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

  async getAllSensors() {
    try {
      axios.get(constants.backend_url + "/api/sensor/sensors").then((res) => {
        this.setState({
          values: res.data,
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {

    if (localStorage.getItem("user-id") === null) {
      this.props.history.push("/")
    } else {
      this.getAllSensors();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header mb-5">
          <h2 className="text-center px-4">All Sensor</h2>
        </div>
        <Link to="addsensor">
          <button type="button" className="btn btn-info">
            Add Sensor
          </button>
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
                {this.state.values.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.sensor_id}</td>
                      <td>{item.sensorName}</td>
                      <td>{item.location}</td>
                      <td>
                        <Link to={"/sensor-dates/" + item.sensor_id}>View</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Sensors;
