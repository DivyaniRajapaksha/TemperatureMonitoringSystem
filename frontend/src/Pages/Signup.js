import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import logo from "../img/logo.jpg";

const Signup = () => {
  return (
    <div>
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
            <Form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Re-Enter Password</Form.Label>
                <Form.Control type="password" placeholder="Re-Enter Password" />
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
