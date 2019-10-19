import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import AuthLayout from "../AuthLayout";

const LandingPage = () => {
  return (
    <Router>
      <div>
        <h1>This is the landing page</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <AuthLayout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default LandingPage;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
