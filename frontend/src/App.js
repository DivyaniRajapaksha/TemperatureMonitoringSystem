import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chart from "./Pages/Chart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import NavBar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import AddSensor from "./Pages/AddSensor";
import Sensors from "./Pages/Sensors";
import SensorDates from "./Pages/SensorDates";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <br />
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/chart/:date" component={Chart} />
        <Route path="/addsensor" component={AddSensor} />
        <Route path="/sensors/" component={Sensors} />
        <Route path="/sensor-dates/:id" component={SensorDates} />
        <Route path="/home" component={Home} />
      </div>
      <br />
      <br />
      <br />
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
