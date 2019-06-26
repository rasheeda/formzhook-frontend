import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "../sections/Dashboard";
import Formz from "../formz/Formz";
import Developer from "../sections/Developer";
import FormzData from "../formz/FormzData";
import UserRegistration from "../sections/register";
import UserLogin from "../sections/login";

class Main_Content extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/formz/" exact component={Formz} />
          <Route path="/developer/" exact component={Developer} />
          <Route
            path="/formz/:id/data"
            exact
            render={props => <FormzData {...props} />}
          />
          <Route path="/register" exact component={UserRegistration} />
          <Route path="/login" exact component={UserLogin} />
        </Switch>
      </div>
    );
  }
}

export default Main_Content;
