import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../img/carousel3.jpg";
import img2 from "../img/carousel2.jpg";
import img3 from "../img/carousel1.jpg";
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from "react-router-dom";

const navbarFont = {
    fontSize: '30px'
}
const h3Font = {
    fontSize: '50px'
}

const Home = () => {
    
    const history = useHistory();
    const signup = () => history.push("/signup");
    const home = () => history.push("/home");
    const profile = () => history.push("/profile");
    const sensors = () => history.push("/sensors");
    const login = () => history.push("/");
    const logout = () => {
        history.push("/");
        localStorage.clear();
        window.location.reload();
  };

  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={h3Font}>Welcome to Sensor Monitor</h3>
          <p style={navbarFont}>Temperature | Humidity | Pressure</p>
          <Button onClick={signup} variant="primary" size="lg" active>Sign Up</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={h3Font}>Welcome to Sensor Monitor</h3>
          <p style={navbarFont}>Temperature | Humidity | Pressure</p>
          <Button onClick={signup} variant="primary" size="lg" active>Sign Up</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={h3Font}>Welcome to Sensor Monitor</h3>
          <p style={navbarFont}>Temperature | Humidity | Pressure</p>
          <Button onClick={signup} variant="primary" size="lg" active>Sign Up</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
