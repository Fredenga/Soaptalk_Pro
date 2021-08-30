export const loginStart = () => {
  return {
    type: "LOGIN_START",
  };
};
export const loginSuccess = (user) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: user,
  };
};
export const loginFailure = () => {
  return {
    type: "LOGIN_FAILURE",
  };
};
export const logOut = () => {
  return {
    type: "LOGIN_OUT",
  };
};
