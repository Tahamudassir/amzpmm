import types from "../constants/Orders";

export const getOrdersAction = () => {
  return {
    type: types.GET_ORDERS,
  };
};

export const addNewOrderAction = (queryData) => {
  return {
    type: types.NEW_ORDER,
    payload: queryData,
  };
};
