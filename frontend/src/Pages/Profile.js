import React, { Component } from "react";
import pic5 from "../img/back.jpg";
import bg2 from "../img/bg2.jpg";
import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";
import { Nav, form, Image, Col, Row, Container, Card } from "react-bootstrap";
import Profilepic from "../components/ProfileCircle/ProfileCircle";
import { Link } from "react-router-dom";
import axios from "axios";
import constants from "../constants/constants";
import PropTypes from "prop-types";

export class Profile extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  //this.props.history.push("/")
  constructor() {
    super();
    this.state = {
      values: [],
    };
    this.getUser = this.getUser.bind(this);
  }

  async getUser() {
    var userId = localStorage.getItem("user-id");
    console.log(userId);
    axios
      .get(constants.backend_url + "/api/user/users/" + userId)
      .then((res) => {
        this.setState({
          values: res.data,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getUser();
  }

  // componentDidMount() {
  //   this.getUser();
  //   this.setState({ type: this.props.match.type });
  // }

  render() {
    return (
      <div
        class="container-xl  shadow p-3 mb-5 bg-body rounded bg-light text-dark  "
        style={{
          marginTop: "30px",
          position: "relative",
        }}
      >
        <img
          src={bg2}
          style={{ width: "97.2%", height: "35%", position: "absolute" }}
        ></img>
        return (
        <div
          class="coloumn container-lg  "
          style={{ backgroundColor: "white" }}
        >
          <div class="row">
            <p
              class=" w-100 p-3 text-white"
              style={{ textAlign: "center", position: "absolute" }}
            ></p>
          </div>
          <div class="row">
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div class="row">
            <div class="mx-auto" style={{ width: "345px" }}>
              <Profilepic />
            </div>
          </div>
          <h1 className="text-center" style={{ marginTop: "-35px" }}></h1>
          <h3 className="text-center">{this.state.values.firstName}</h3>;
          <h6 className="text-center text-muted">{this.state.values.email}</h6>
          <br />
          <br />
          <div className="text-center my-3">
            <Link to="edit-profile">
              <Box display="flex" justifyContent="center">
                <Button variant="contained">Edit Profile</Button>
              </Box>
            </Link>
          </div>
          <div className="text-center my-3">
            <Box display="flex" justifyContent="center">
              <Button variant="contained">Delete Profile</Button>
            </Box>
          </div>
          <br></br>
          <br />
        </div>
      </div>
    );
  }
}

export default Profile;
