import { combineReducers, createStore } from 'redux';

let reducers = combineReducers({});

const store = createStore(reducers);

window.store = store;

export default store;
