import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import ButtonPurple from "components/purple-button";

import { logout } from "store/reducers/auth/action";

import { ROUTES } from "utils/routes-constant/constant-routes";

import style from "./style.module.scss";
import { Link } from "react-router-dom";
import Page from "./page";

const AllUsers = () => {
  const dispatch = useDispatch();

  const logoutHandle = () => {
    dispatch(logout()).then(window.location.reload());
  };

  return (
    <div className={style.all__users}>
      <p>Greetings</p>
      <ButtonPurple disabled text={"Logout"} onClick={logoutHandle} />
      <Page />
    </div>
  );
};

export default AllUsers;
