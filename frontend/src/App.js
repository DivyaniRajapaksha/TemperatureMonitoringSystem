import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chart from "./Pages/Chart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <div className="container">
        <br />
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/chart" component={Chart} />
      </div>
    </Router>
  );
}

export default App;