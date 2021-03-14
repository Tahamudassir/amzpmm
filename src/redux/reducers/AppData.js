import types from "../constants/AppData";

const initState = {
  markets: null,
  categories: null,
};

const appData = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [action.payload, ...state.categories],
      };
    case types.ADD_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.GET_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case types.GET_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_MARKET:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_MARKET_SUCCESS:
      return {
        ...state,
        loading: false,
        markets: [action.payload, ...state.markets],
      };
    case types.ADD_MARKET_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.GET_MARKET:
      return {
        ...state,
        loading: true,
      };
    case types.GET_MARKET_SUCCESS:
      return {
        ...state,
        loading: false,
        markets: action.payload,
      };
    case types.GET_MARKET_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.DELETE_MARKET:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_MARKET_SUCCESS:
      return {
        ...state,
        loading: false,
        markets: action.payload,
      };
    case types.DELETE_MARKET_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.DELETE_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case types.DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default appData;
