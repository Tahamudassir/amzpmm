import types from "../constants/Products";

const initState = {
  loading: false,
  products: null,
};

const reservations = (state = initState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reservations;
