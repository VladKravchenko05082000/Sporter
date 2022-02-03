import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import NotFoundPage from "components/error-NotFoundPage";
import AllUsers from "screens/all-users";
import SignInForm from "screens/sign-in-screen/sign-in-form";

import { ROUTES } from "utils/routes-constant/constant-routes";

const { ALL_USERS } = ROUTES;

const Navigator = () => {
  const { token } = useSelector((state) => state.authReducer);
  return (
    <Routes>
      <Route />
      {token.length > 0 ? (
        <Route path="/">
          <Route path={ALL_USERS} element={<AllUsers />} />
          <Route path="/" element={<Navigate to={ALL_USERS} />} />
        </Route>
      ) : (
        <Route path="/">
          <Route path="/" element={<SignInForm />} />
          <Route path={ALL_USERS} element={<Navigate to="/" />} />
        </Route>
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Navigator;
