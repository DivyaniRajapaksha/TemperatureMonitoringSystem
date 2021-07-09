import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Alert,
} from "react-bootstrap";
import logo from "../img/logo.jpg";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rptPassword, setRptPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const signup = (e) => {
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      rptPassword === ""
    ) {
      setError("Please Fill All the Fields!");
      return;
    }

    if (password.length < 8) {
      setError("Passwords Must Be At Least 8 Characters Long!");
      return;
    }

    if (password !== rptPassword) {
      setError("Passwords Don't Match!");
      return;
    }

    const userObj = { firstName, lastName, email, password };

    console.log(userObj);

    //storing data in mongodb database using axios
    axios.post("http://localhost:8080/api/user/signup", userObj).then((res) => {
      setMsg(res.data);
      localStorage.setItem("msgSignup", res.data);
    });

    props.history.push("/");

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRptPassword("");
  };

  return (
    <div>
      {console.log('{"name":"John", "age":30, "city":"New York"}')}
      <Container>
        <div
          className="text-center"
          style={{ padding: "30px", backgroundColor: "#333" }}
        >
          <h1 style={{ color: "#fff" }}>Signup</h1>
        </div>
        <Row style={{ marginTop: "30px" }}>
          <Col>
            <Image src={logo} thumbnail />
          </Col>
          <Col>
            {error ? <Alert variant={"danger"}>{error}</Alert> : null}
            {msg ? <Alert variant={"success"}>{msg}</Alert> : null}
            <Form onSubmit={signup}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter First Name"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Last Name"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Re-Enter Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-Enter Password"
                  value={rptPassword}
                  onChange={(e) => {
                    setRptPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button size="lg" variant="dark" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
