import {
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
  } from './Actions';
  
  const INITIAL_STATE = {
    user: null,
  };
  
  const AuthReducer = (state = INITIAL_STATE, action) => {
    const {
      type,
      payload,
    } = action;
  
    switch (type) {
      case LOGIN_USER_SUCCESS:
        return { ...state, user: payload };
  
      case LOGOUT_USER:
        return { ...state, user: null };
  
      default:
        return state;
    }
  };
  
  export default AuthReducer;