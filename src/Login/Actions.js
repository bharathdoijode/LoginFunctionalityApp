export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUserSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});