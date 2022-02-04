import React, { Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import NotFoundPage from "components/error-NotFoundPage";

import { ROUTES } from "utils/routes-constant/constant-routes";
import LoaderBox from "components/loaderBox";

const { ALL_USERS } = ROUTES;

const AllUsers = React.lazy(() => import("screens/all-users"));
const SignInForm = React.lazy(() =>
  import("screens/sign-in-screen/sign-in-form")
);

const Navigator = () => {
  const { token } = useSelector((state) => state.authReducer);
  return (
    <Routes>
      <Route />
      {token.length > 0 ? (
        <Route path="/">
          <Route
            path={ALL_USERS}
            element={
              <Suspense fallback={<LoaderBox />}>
                <AllUsers />
              </Suspense>
            }
          />
          <Route path="/" element={<Navigate to={ALL_USERS} />} />
        </Route>
      ) : (
        <Route path="/">
          <Route
            path="/"
            element={
              <Suspense fallback={<LoaderBox />}>
                <SignInForm />
              </Suspense>
            }
          />
          <Route path={ALL_USERS} element={<Navigate to="/" />} />
        </Route>
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Navigator;
