import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userData: {},
  isAuth: false,
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload }

    default:
      return state;
  }
}

export const setAuthUserData = (login, isAuth) => ({ type: SET_USER_DATA, payload: { login, isAuth } });


export const login = ({ email, password }) => async (dispatch) => {
  let data = await authAPI.login(email, password);
  debugger
};

export default authReducer;