import { combineReducers } from "redux";

import authReducer from "./reducers/auth/reducer";
import gettingUsersReducer from "./reducers/getting-users/reducer";
import userReducer from "./reducers/user/reducer";

export default combineReducers({
  authReducer,
  gettingUsersReducer,
  userReducer,
});
