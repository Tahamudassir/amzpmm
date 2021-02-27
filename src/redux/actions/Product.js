import types from "../constants/Products";

export const getProductsAction = (queryData) => {
  return {
    type: types.GET_PRODUCT,
    payload: queryData,
  };
};

export const filterProductsAction = (queryData) => {
  return {
    type: types.FILTER_PRODUCTS,
    payload: queryData,
  };
};

export const viewProductAction = (queryData) => {
  return {
    type: types.VIEW_PRODUCT,
    payload: queryData,
  };
};

export const editProductAction = (queryData) => {
  return {
    type: types.FILTER_PRODUCTS,
    payload: queryData,
  };
};

export const editProductImageAction = (queryData) => {
  return {
    type: types.FILTER_PRODUCTS,
    payload: queryData,
  };
};
