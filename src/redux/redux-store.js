import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";

let ruducers = combineReducers({
  auth: authReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(ruducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

// let store = createStore(ruducers, applyMiddleware(thunkMiddleWare));

export default store;