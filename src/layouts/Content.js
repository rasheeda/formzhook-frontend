import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Formz from "../components/Formz";
import Developer from "../components/Developer";

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/formz/" component={Formz} />
        <Route path="/developer/" component={Developer} />
      </Switch>
    );
  }
}

export default Content;
