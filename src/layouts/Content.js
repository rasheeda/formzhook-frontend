import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "../sections/Dashboard";
import Formz from "../formz/Formz";
import Developer from "../sections/Developer";
import FormzData from "../formz/FormzData"

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/formz/" component={Formz} />
        <Route path="/developer/" component={Developer} />
        {/* <Route path="/formz/:id/data" component={FormzData} /> */}
        <Route path="/formz/:id/data" render={(props) => <FormzData {...props} />}/> 
      </Switch>
    );
  }
}

export default Content;
