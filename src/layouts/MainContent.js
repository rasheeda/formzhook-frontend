import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../sections/Dashboard";
import Formz from "../components/formz/Formz";
import Developer from "../sections/Developer";
import FormzData from "../components/formz/FormzData";
import UserRegistration from "../landing/register";
import UserLogin from "../landing/login";
import ProtectedRoute from "../components/protected.route";
import auth from "../models/auth";

class MainContent extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {console.log("MainContent isAuthen: ", auth.isAuthenticated())}
          <ProtectedRoute path="/" exact component={Dashboard} />
          <ProtectedRoute path="/formz/" exact component={Formz} />
          <ProtectedRoute path="/developer/" exact component={Developer} />
          <ProtectedRoute
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

export default MainContent;
