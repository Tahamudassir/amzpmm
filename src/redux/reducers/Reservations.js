import types from "../constants/Reservations";

const initState = {
  loading: false,
  reserveOrdersPmm: null,
  reserveOrdersPm: null,
};

const reservations = (state = initState, action) => {
  switch (action.type) {
    case types.GET_RESERVED_PRODUCTS_PM:
      return {
        ...state,
        loading: true,
      };
    case types.GET_RESERVED_PRODUCTS_SUCCESS_PM:
      return {
        ...state,
        loading: false,
        reservedOrdersPm: action.payload,
      };
    case types.GET_RESERVED_PRODUCTS_FAILURE_PM:
      return {
        ...state,
        loading: false,
      };
    case types.GET_RESERVED_PRODUCTS_PMM:
      return {
        ...state,
        loading: true,
      };
    case types.GET_RESERVED_PRODUCTS_SUCCESS_PMM:
      return {
        ...state,
        loading: false,
        reserveOrdersPmm: action.payload,
      };
    case types.GET_RESERVED_PRODUCTS_FAILURE_PMM:
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
    default:
      return state;
  }
};

export default reservations;
