import React, { Component } from "react";
import "../ProfileCircle/ProfileCircle.css";
// import pic5 from "../../img/Profilecircle/ico.png";
import pro1 from "../../img/pro1.jpg";
import pr4 from "../../img/pr4.png";
import { Nav, form, Image, Col, Row, Button } from "react-bootstrap";

export class Profilecircle extends Component {
  render() {
    return (
      <div class="v6_0" style={{ marginTop: "-20%" }}>
        <div class="v1_2">
          <Image
            class="mx-auto"
            src={pr4}
            style={{
              width: "200px",
              height: "200px",
              marginLeft: "5px",
              marginTop: "5px",
            }}
            roundedCircle
          />
        </div>
      </div>
    );
  }
}

export default Profilecircle;
