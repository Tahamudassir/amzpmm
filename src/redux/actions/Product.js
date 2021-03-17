import types from "../constants/Products";

export const getProductsAction = (queryData) => {
  return {
    type: types.GET_PRODUCTS,
    payload: queryData,
  };
};

export const getProductsPmAction = (queryData) => {
  return {
    type: types.GET_PRODUCTS_PM,
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

export const searchByKeyword = (keyword) => {
  return {
    type: types.SEARCH_BY_KEYWORD,
    payload: keyword,
  };
};
export const searchById = (id) => {
  return {
    type: types.SEARCH_BY_ID,
    payload: id,
  };
};
export const searchByMarket = (market) => {
  return {
    type: types.SEARCH_BY_MARKET,
    payload: market,
  };
};
export const searchByCategory = (payload) => {
  return {
    type: types.SEARCH_BY_CATEGORY,
    payload,
  };
};

export const changeProductStatusAction = (queryOb) => {
  return {
    type: types.CHANGE_PRODUCT_STATUS,
    payload: queryOb,
  };
};
