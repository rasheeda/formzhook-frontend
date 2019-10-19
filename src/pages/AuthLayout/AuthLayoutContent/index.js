import React from "react";
import { Route, Switch } from "react-router-dom";
import UserRegistration from "../Register";
import UserLogin from "../Login";

const AuthLayoutContent = () => {
  return (
    <div>
      <Switch>
        <Route path="/register" exact component={UserRegistration} />
        <Route path="/login" exact component={UserLogin} />
      </Switch>
    </div>
  );
};

export default AuthLayoutContent;
