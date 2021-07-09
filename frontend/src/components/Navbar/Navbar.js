import React, { Component } from "react";
import { Navbar, Nav, Button, NavDropdown, Container, FormControl, Form} from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const signup = () => history.push("/signup");
  const home = () => history.push("/home");
  const profile = () => history.push("/profile");
  const sensors = () => history.push("/sensors");
  const login = () => history.push("/");

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={home}>Temparatue App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav inline>
          <Nav.Link onClick={home}>Home</Nav.Link>
          <Nav.Link onClick={sensors}>Sensors</Nav.Link>
          <Nav.Link onClick={profile}>Profile</Nav.Link>
          <Nav.Link onClick={login}>Login</Nav.Link>
          <Nav.Link onClick={signup}>Signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}
 
export default NavBar;
