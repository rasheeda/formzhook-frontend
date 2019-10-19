import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "../sections/Dashboard";
import Formz from "../formz/Formz";
import Developer from "../sections/Developer";
import FormzData from "../formz/FormzData";
import HomePage from "../../pages/LandingPage/pages/home";

class Content extends React.Component {
  render() {
    return (
      <div>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route exact path="/formz" component={Formz} />
        <Route path="/developer/" component={Developer} />
        <Route
          exact
          path="/formz/:id/data"
          render={props => <FormzData {...props} />}
        />
        <Route path="/" exact component={HomePage} />
      </div>
    );
  }
}

export default Content;
