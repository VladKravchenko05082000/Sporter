import { CONSTANTS } from "utils/global/global";
import { ENDPOINTS } from "utils/endpoints/endpoint-constant";

import { instance } from "dataAccess";

const { AUTH_TOKEN } = CONSTANTS;
const { SIGN_IN } = ENDPOINTS;

export const LOGIN = "Login";
const login = (data) => {
  return {
    type: LOGIN,
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
