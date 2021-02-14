import types from "../constants/Auth";

const initState = {
  loading: false,
  redirect: "",
  token: localStorage.getItem("AUTH_TOKEN"),
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
    default:
      return state;
  }
};

export default auth;
