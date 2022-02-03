import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import ButtonPurple from "components/purple-button";

import { logout } from "store/reducers/auth/action";

import style from "./style.module.scss";

const AllUsers = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutHandle = () => {
    dispatch(logout()).then(window.location.reload());
  };

  return (
    <div className={style.all__users}>
      <p>Greetings</p>
      <ButtonPurple disabled={true} text={"Logout"} onClick={logoutHandle} />
    </div>
  );
};

export default AllUsers;
