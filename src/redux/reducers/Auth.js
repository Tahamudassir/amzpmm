import types from "../constants/Auth";

const initState = {
  loading: false,
  redirect: "",
  token: null,
  allowRedirect: false,
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case types.SIGNIN:
      return {
        ...state,
        loading: true,
      };
    case types.AUTHENTICATED:
      return {
        ...state,
        loading: false,
        redirect: "/",
        allowRedirect: true,
        token: action.payload.token,
        user: action.payload.payload,
        authenticated: true,
      };
    case types.SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        allowRedirect: false,
        authenticated: false,
      };
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        token: action.token,
      };
    }
    case types.CHANGE_PASSWORD:
      return {
        ...state,
        loading: true,
      };
    case types.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.EDIT_USER:
      return {
        ...state,
        loading: true,
      };
    case types.EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.EDIT_USER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default auth;
