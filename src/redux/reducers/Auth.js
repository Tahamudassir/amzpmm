import types from "../constants/Auth";

const initState = {
  loading: false,
  redirect: "",
  token: null,
  allowRedirect: false,
  authenticated: null,
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
    case types.SIGNUP:
      return {
        ...state,
        loading: true,
        allowRedirect: false,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        allowRedirect: true,
        redirectPath: "/login",
      };
    case types.SIGNUP_FAILED: {
      return {
        ...state,
        loading: false,
        allowRedirect: false,
      };
    }
    case types.SET_INITIAL_VALUES: {
      return {
        ...state,
        allowRedirect: null,
        redirectPath: "",
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
    case types.EDIT_USER_AVATAR:
      return {
        ...state,
        uploading: true,
      };
    case types.EDIT_USER_AVATAR_SUCCESS:
      return {
        ...state,
        uploading: false,
        user: action.payload,
      };
    case types.EDIT_USER_AVATAR_FAILURE:
      return {
        ...state,
        uploading: false,
      };
    default:
      return state;
  }
};

export default auth;
