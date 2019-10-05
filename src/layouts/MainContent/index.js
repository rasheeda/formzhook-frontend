import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../../components/Dashboard"
import Formz from "../../components/Formz";
import Developer from "../../components/Developer";
import FormzData from "../../components/FormzData";
import UserRegistration from "../../pages/Register";
import UserLogin from "../../pages/Login";
import ProtectedRoute from "../../utils/u_protected.route";

class MainContent extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <ProtectedRoute path="/" exact component={Dashboard} />
          <ProtectedRoute path="/formz/" exact component={Formz} />
          <ProtectedRoute path="/developers/" exact component={Developer} />
          <ProtectedRoute
            path="/formz/:unique_id/data"
            exact
            component={props => <FormzData {...props} />}
          />
          <Route path="/register" exact component={UserRegistration} />
          <Route path="/login" exact component={UserLogin} />
        </Switch>
      </div>
    );
  }
}

export default MainContent;

