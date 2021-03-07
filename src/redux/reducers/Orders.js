import types from "../constants/Orders";

const initState = {
  loading: false,
  orders: null,
  orderDetail: null,
  orderStatus: "",
  orderId: "",
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
    case types.GET_ORDERS_FAILURE:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case types.VIEW_ORDER:
      return {
        ...state,
        loading: true,
      };
    case types.VIEW_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orderDetail: action.payload,
      };
    case types.VIEW_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.EDIT_ORDER:
      return {
        ...state,
        editing: true,
      };
    case types.EDIT_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        editing: action.payload,
      };
    case types.EDIT_ORDER_FAILURE:
      return {
        ...state,
        editing: false,
      };
    case types.NEW_ORDER:
      return {
        ...state,
        loading: true,
      };
    case types.NEW_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.NEW_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.SEARCH_ORDER_BY_CUSTOMER_EMAIL:
      return {
        ...state,
        customer_email: action.payload,
      };
    case types.SEARCH_ORDER_BY_ID:
      return {
        ...state,
        orderId: action.payload,
      };
    case types.SEARCH_ORDER_BY_PRODUCT_ID:
      return {
        ...state,
        product_id: action.payload,
      };
    case types.EXPORT_TO_EXCEL:
      return {
        ...state,
        loading: true,
      };
    case types.EXPORT_TO_EXCEL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.EXPORT_TO_EXCEL_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default orders;
