import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "../sections/Dashboard";
import Formz from "../sections/Formz";
import Developer from "../sections/Developer";

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/formz/" component={Formz} />
        <Route path="/developer/" component={Developer} />
        <Route exact path="/formz/:id/data" component={FormzData} />
      </Switch>
    );
  }
}

export default Content;
