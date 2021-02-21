import types from "../constants/Auth";

export const signInAction = (user) => {
  return {
    type: types.SIGNIN,
    payload: user,
  };
};

export const changePasswordAction = (queryData) => {
  return {
    type: types.CHANGE_PASSWORD,
    payload: queryData,
  };
};
export const editUserAction = (queryData) => {
  return {
    type: types.EDIT_USER,
    payload: queryData,
  };
};

export const signUpAction = (queryData) => {
  return {
    type: types.SIGNUP,
    payload: queryData,
  };
};
