import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Route path="/" component={Home} exact={true} />
      </Router>
    </>
  );
}

export default App;
