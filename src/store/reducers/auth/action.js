import { CONSTANTS } from "utils/global/global";
import { postAuthData } from "dataAccess/userApi/postAuthData";

const { AUTH_TOKEN } = CONSTANTS;

export const LOGIN = "Login";
const login = (data) => {
  return {
    type: LOGIN,
    data,
  };
};

export const requestLogin = (email, password) => {
  return async (dispatch) => {
    const response = await postAuthData(email, password);
    dispatch(login(response.data));
    localStorage.setItem(AUTH_TOKEN, response.data.auth_token);
  };
};
