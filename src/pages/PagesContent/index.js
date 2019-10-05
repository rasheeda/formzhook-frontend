import React from "react";
import { Route, Switch } from "react-router-dom";
import UserRegistration from "../../pages/Register";
import UserLogin from "../../pages/Login";

const PagesContent = () => {
  return (
    <div>
      <Switch>
        <Route path="/register" exact component={UserRegistration} />
        <Route path="/login" exact component={UserLogin} />
      </Switch>
    </div>
  );
};

export default PagesContent;
