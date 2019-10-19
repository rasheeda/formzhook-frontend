import React from "react";
import HomePage from "./../home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles.scss";
import AuthLayout from "../../../AuthLayout";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={AuthLayout} />
        <Route exact path="/register" component={AuthLayout} />

        <Route
          component={({ location }) => {
            return (
              <div
                style={{
                  padding: "50px",
                  width: "100%",
                  textAlign: "center"
                }}
              >
                The page <code>{location.pathname}</code> could not be found.
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
