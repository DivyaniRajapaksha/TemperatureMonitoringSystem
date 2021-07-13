import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Container,
  FormControl,
  Form,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Img from '../../img/sensorLogo.png';

const navbarFont = {
  fontSize: '20px'
}

const NavBar = () => {
  const history = useHistory();
  const signup = () => history.push("/signup");
  const home = () => history.push("/home");
  const profile = () => history.push("/profile");
  const sensors = () => history.push("/sensors");
  const login = () => history.push("/");
  const notifications = () => history.push("/notifications");
  const logout = () => {
    history.push("/");
    localStorage.clear();
    window.location.reload();
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={home}>
        <img
          alt=""
          src={Img}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Sensor Monitor
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav inline>
          {user ? (
            <>
              <Nav.Link onClick={home} style={navbarFont}>Home</Nav.Link>
              <Nav.Link onClick={sensors} style={navbarFont}>Sensors</Nav.Link>
              <Nav.Link onClick={notifications} style={navbarFont}>Notifications</Nav.Link>
              <Nav.Link onClick={profile} style={navbarFont}>Profile</Nav.Link>
              <Nav.Link onClick={logout} style={navbarFont}>Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link onClick={login} style={navbarFont}>Login</Nav.Link>
              <Nav.Link onClick={signup} style={navbarFont}>Signup</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
