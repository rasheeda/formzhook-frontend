import React from "react";
import { Switch } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import Formz from "../../components/Formz";
import Developer from "../../components/Developer";
import FormzData from "../../components/FormzData";
import ProtectedRoute from "../../utils/u_protected.route";

const MainContent = () => {
  return (
    <div>
      <Switch>
        <ProtectedRoute path="/" exact component={Dashboard} />
        <ProtectedRoute path="/dashboard" exact component={Dashboard} />
        <ProtectedRoute path="/formz/" exact component={Formz} />
        <ProtectedRoute path="/developers/" exact component={Developer} />
        <ProtectedRoute
          path="/formz/:unique_id/data"
          exact
          component={props => <FormzData {...props} />}
        />
      </Switch>
    </div>
  );
};

export default MainContent;
