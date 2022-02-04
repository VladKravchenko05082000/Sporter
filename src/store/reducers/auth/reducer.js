import { STATUSES } from "utils/status-constant/status-constant";

import { LOGIN, LOGOUT, RESET_PASSWORD_SEND_CODE } from "./action";

import { CONSTANTS } from "utils/global/global";

const { AUTH_TOKEN, AUTH__USER } = CONSTANTS;

const initialState = {
  authUser: localStorage.getItem(AUTH__USER),
  token: localStorage.getItem(AUTH_TOKEN)
    ? localStorage.getItem(AUTH_TOKEN)
    : "",
  status: STATUSES.INIT,
  isCodeSent: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        authUser: action.data,
        token: action.data.auth_token,
        status: STATUSES.READY,
      };
    }
    case RESET_PASSWORD_SEND_CODE: {
      return {
        ...state,
        isCodeSent: action.data,
        status: STATUSES.READY,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default authReducer;
