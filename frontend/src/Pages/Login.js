import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import logo from "../img/logo.jpg";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Container>
        <div
          className="text-center"
          style={{ padding: "30px", backgroundColor: "#333" }}
        >
          <h1 style={{ color: "#fff" }}>Login</h1>
        </div>
        <Row style={{ marginTop: "30px" }}>
          <Col>
            <Image src={logo} thumbnail />
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalCheck" style={{marginLeft:"1%"}}>
                  <Form.Check label="Remember me" />
              </Form.Group>
              <Button size="lg" variant="dark" type="submit" className="w-100">
                Submit
              </Button>
              <Form.Group style={{marginTop:"5%"}}>
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
