import { STATUSES } from "utils/status-constant/status-constant";

import { LOGIN } from "./action";

import { CONSTANTS } from "utils/global/global";

const { AUTH_TOKEN, AUTH__USER } = CONSTANTS;

const initialState = {
  authUser: localStorage.getItem(AUTH__USER),
  token: localStorage.getItem(AUTH_TOKEN),
  isAuth: false,
  status: STATUSES.INIT,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        authUser: action.data,
        token: action.data.auth_token,
        isAuth: true,
        status: STATUSES.READY,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
