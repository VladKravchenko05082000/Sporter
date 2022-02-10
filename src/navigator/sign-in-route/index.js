import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { ROUTES } from "utils/routes-constant/constant-routes";

const SingInRoute = ({ component: Component, rest }) => {
  const { token } = useSelector((state) => state.authReducer);

  return (
    <Route
      {...rest}
      render={(props) =>
        token?.length ? (
          <Redirect to={ROUTES.ALL_USERS} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default SingInRoute;
