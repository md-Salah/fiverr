import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar>
        <Home />
      </Navbar>
    </Router>
  );
}
