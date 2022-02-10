import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFoundPage from "components/error-NotFoundPage";

import { ROUTES } from "utils/routes-constant/constant-routes";

import SingInRoute from "./sign-in-route";
import PrivateRoute from "./private-route";
import AllUsers from "screens/all-users";
import SignInForm from "screens/sign-in-screen/sign-in-form";

const { ALL_USERS } = ROUTES;

const Navigator = () => {
  const PRIVATEROUTES = [{ path: ALL_USERS, component: AllUsers }];
  return (
    <Router>
      <Switch>
        <SingInRoute exact path="/" component={SignInForm} />

        {PRIVATEROUTES.map(({ path, component }, i) => {
          return (
            <PrivateRoute key={i} exact path={path} component={component} />
          );
        })}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Navigator;
