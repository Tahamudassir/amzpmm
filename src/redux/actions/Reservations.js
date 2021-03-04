import types from "../constants/Reservations";

export const getReservationsPmmAction = () => {
  return {
    type: types.GET_RESERVED_PRODUCTS_PMM,
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
