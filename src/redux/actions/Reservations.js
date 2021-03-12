import types from "../constants/Reservations";

export const getReservationsAction = () => {
  return {
    type: types.GET_RESERVED_PRODUCTS,
  };
};

export const getReservationsPmAction = () => {
  return {
    type: types.GET_RESERVED_PRODUCTS_PM,
  };
};

export const reserveProductAction = (queryData) => {
  return {
    type: types.RESERVE_PRODUCT,
    payload: queryData,
  };
};

export const releaseProductAction = (queryData) => {
  return {
    type: types.RELEASE_PRODUCT,
    payload: queryData,
  };
};
