import { applyMiddleware, createStore } from "redux";

import rootReducer from "./rootReducer";

import ThunkMiddleware from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;
