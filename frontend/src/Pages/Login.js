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
import logo from "../img/login.svg";
import { Link, useHistory } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState();
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();

    localStorage.clear();
    setError("");

    if (email === "" || password === "") {
      setError("Please Fill All the Fields!");
      return;
    }

    //storing data in mongodb database using axios
    axios
      .get(`http://localhost:8080/api/user/login/${email}/${password}`)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user-id", res.data.userId);
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser(res.data);
      });

    window.location.href = "/profile";
    //window.location.reload();
    //history.push("/profile");
    //window.location.reload();
    /* if (user === "Not a valid user" || !user) {
      setError("Invalid user!");
      console.log(typeof user);
      return;
    }
 */
    //props.history.push("/profile");
    //window.location.reload();

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Container>
        <div
          className="text-center"
          style={{ padding: "30px", backgroundColor: "#fff" }}
        >
          {/* <h1 style={{ color: "rgb(51, 51, 51)" }}>Login</h1> */}
        </div>
        <Row style={{ marginTop: "30px" }}>
          <Col>
            <Image src={logo} thumbnail className="border-0" />
          </Col>
          <Col>
          <h1 style={{ color: "rgb(51, 51, 51)" }} style={{display: 'flex', justifyContent: 'center'}}>Login</h1>
            {localStorage.getItem("msgSignup") ? (
              <Alert variant={"success"}>
                {localStorage.getItem("msgSignup")}
              </Alert>
            ) : null}
            {error ? <Alert variant={"danger"}>{error}</Alert> : null}
            <Form onSubmit={login}>
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
              <Form.Group
                as={Row}
                controlId="formHorizontalCheck"
                style={{ marginLeft: "1%" }}
              >
                <Form.Check label="Remember me" />
              </Form.Group>
              <Button size="lg" variant="dark" type="submit" className="w-100">
                Login
              </Button>
              <Form.Group style={{ marginTop: "5%" }}>
                <Link to="/Signup">Create an account</Link>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
