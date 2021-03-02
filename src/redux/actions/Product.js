import types from "../constants/Products";

export const getProductsAction = (queryData) => {
  return {
    type: types.GET_PRODUCTS,
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

export const addProductAction = (queryData) => {
  return {
    type: types.ADD_PRODUCT,
    payload: queryData,
  };
};

export const editProductAction = (queryData) => {
  return {
    type: types.EDIT_PRODUCT,
    payload: queryData,
  };
};

export const editProductImageAction = (queryData) => {
  return {
    type: types.EDIT_PRODUCT_IMAGE,
    payload: queryData,
  };
};
