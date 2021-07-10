import React, { useState } from "react";
import pic5 from "../img/back.jpg";
import bg2 from "../img/bg2.jpg";
import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { Nav, form, Image, Col, Row, Container, Card } from "react-bootstrap";
import bio from "../img/bio.png";
import Profilepic from "../components/ProfileCircle/ProfileCircle";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Profile = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      className="container-lg  shadow p-3 mb-5 bg-body rounded bg-light text-dark  "
      style={{ marginTop: "30px", position: "relative" }}
    >
      {console.log(user)}
      <img
        src={bg2}
        style={{ width: "97.2%", height: "25%", position: "absolute" }}
      ></img>
      return (
      <div
        className="coloumn container-lg  shadow p-3 mb-5"
        style={{ backgroundColor: "white" }}
      >
        <div className="row">
          <p
            className=" w-100 p-3 text-white"
            style={{ textAlign: "center", position: "absolute" }}
          ></p>
        </div>
        <div className="row">
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div className="row">
          <div className="mx-auto" style={{ width: "370px" }}>
            <Profilepic />
          </div>
        </div>
        <h1 className="text-center" style={{ marginTop: "-35px" }}>
          {user ? user.userFirstName : null} {user ? user.userLastName : null}
        </h1>
        {/* <h5 className="text-center text-muted">{item.email}</h5> */}
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

        <div className="row">
          <div className="mx-auto" style={{ width: "80px" }}>
            <img
              src={bio}
              className="rounded-circle "
              alt="..."
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "ml-6",
                marginTop: "10px",
                position: "absolute",
              }}
            ></img>
          </div>
        </div>

        <div className="row">
          <div
            className="container shadow-sm p-3 mb-3 bg-body rounded bg-light text-dark"
            style={{ width: "600px", marginTop: "35PX" }}
          >
            {" "}
            <p style={{ marginTop: "10px" }}>
              Voluptatibus aut totam voluptas eos numquam neque ea. Sed libero
              qui est ut amet nisi. Praesentium repellendus dolorem labore
              debitis consequatur nostrum quae pariatur mollitia. Minima ea
              quibusdam porro necessitatibus recusandae voluptatem dolor.
              Officiis nesciunt iusto ea provident et tempora nemo itaque qui.
            </p>
            <br></br>
            {/* {item.description} */}
          </div>
          <div>,</div>
        </div>
      </div>
      {/* );
          })} */}
    </div>
  );
};

export default Profile;
