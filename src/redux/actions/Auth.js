import types from "../constants/Auth";

export const signInAction = (user) => {
  return {
    type: types.SIGNIN,
    payload: user,
  };
};
