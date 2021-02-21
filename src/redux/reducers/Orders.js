import types from "../constants/Orders";

const initState = {
  loading: false,
  orders: null,
  orderStatus: "",
  orderNumber: "",
  customer_email: "",
  product_id: "",
};

const orders = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ORDERS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case types.GET_ORDERS_FAILURE: {
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default orders;
