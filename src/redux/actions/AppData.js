import types from "../constants/AppData";

export const addCategoryAction = (queryObj) => {
  return {
    type: types.ADD_CATEGORY,
    payload: queryObj,
  };
};

export const getCategoryAction = () => {
  return {
    type: types.GET_CATEGORY,
  };
};

export const addMarketAction = (queryObj) => {
  return {
    type: types.ADD_MARKET,
    payload: queryObj,
  };
};

export const getMarketsAction = () => {
  return {
    type: types.GET_MARKET,
  };
};
export const deleteMarketAction = (payload) => {
  return {
    type: types.DELETE_MARKET,
    payload,
  };
};
export const deleteCategoryAction = (payload) => {
  return {
    type: types.DELETE_CATEGORY,
    payload,
  };
};
