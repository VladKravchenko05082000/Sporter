import { CONSTANTS } from "utils/global/global";
import { ENDPOINTS } from "utils/endpoints/endpoint-constant";

import { instance } from "dataAccess";

const { AUTH_TOKEN } = CONSTANTS;
const { SIGN_IN, LOGIN_RESTORE_PASSWORD_EMAIL } = ENDPOINTS;

export const LOGIN = "Login";
const login = (data) => {
  return {
    type: LOGIN,
    data,
  };
};

export const RESET_PASSWORD_SEND_CODE = "Reset_Password_Send_Code";
const resetPasswordSendCode = (data) => {
  return {
    type: RESET_PASSWORD_SEND_CODE,
    data,
  };
};

export const LOGOUT = "Logout";
export const logout = () => {
  localStorage.clear();
  return {
    type: LOGOUT,
  };
};

export const requestLogin = (email, password) => {
  return async (dispatch) => {
    const response = await instance.post(SIGN_IN, { email, password });
    dispatch(login(response.data));
    localStorage.setItem(AUTH_TOKEN, response.data.auth_token);
  };
};

export const requestResetPasswordSendCode = (email) => {
  return async (dispatch) => {
    const response = await instance.post(LOGIN_RESTORE_PASSWORD_EMAIL, {
      email,
    });
    dispatch(resetPasswordSendCode(response.data));
  };
};
