import types from "../constants/Reservations";

const initState = {
  loading: false,
  reservations: null,
  // reserveOrdersPm: null,
};

const reservations = (state = initState, action) => {
  switch (action.type) {
    case types.GET_RESERVED_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_RESERVED_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        reservations: action.payload,
      };
    case types.GET_RESERVED_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.RESERVE_PRODUCT:
      return {
        ...state,
        reserving: true,
      };
    case types.RESERVE_PRODUCT_SUCCESS:
      return {
        ...state,
        reserving: false,
      };
    case types.RESERVE_PRODUCT_FAILURE:
      return {
        ...state,
        reserving: false,
      };
    case types.RELEASE_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case types.RELEASE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        reservations: action.payload,
      };
    case types.RELEASE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reservations;
