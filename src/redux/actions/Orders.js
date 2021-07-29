import types from "../constants/Orders";

export const getOrdersAction = (queryObj) => {
  return {
    type: types.GET_ORDERS,
    payload: queryObj,
  };
};

export const getOrdersPmAction = (payload) => {
  return {
    type: types.GET_ORDERS_PM,
    payload: payload,
  };
};

export const addNewOrderAction = (queryData) => {
  return {
    type: types.NEW_ORDER,
    payload: queryData,
  };
};

export const viewOrderAction = (id) => {
  return {
    type: types.VIEW_ORDER,
    payload: id,
  };
};

export const editOrderAction = (queryData) => {
  return {
    type: types.EDIT_ORDER,
    payload: queryData,
  };
};

export const editOrderPicAction = (queryData) => {
  return {
    type: types.EDIT_ORDER_PIC,
    payload: queryData,
  };
};

export const searchOrderByCustomerEmail = (payload) => {
  return {
    type: types.SEARCH_ORDER_BY_CUSTOMER_EMAIL,
    payload,
  };
};

export const searchOrderById = (payload) => {
  return {
    type: types.SEARCH_ORDER_BY_ID,
    payload,
  };
};

export const searchByProductId = (payload) => {
  return {
    type: types.SEARCH_ORDER_BY_PRODUCT_ID,
    payload,
  };
};

export const exportToExcelAction = (dates) => {
  return {
    type: types.EXPORT_TO_EXCEL,
    payload: dates,
  };
};

export const exportToExcelPmAction = (dates) => {
  return {
    type: types.EXPORT_TO_EXCEL_PM,
    payload: dates,
  };
};
