import { put, takeLatest, select } from "redux-saga/effects";
import { message } from "antd";
import {
  getReservationsPmApi,
  getReservationsPmmApi,
  reserveProductApi,
} from "../api/Reservations";
import { getErrorMessage } from "../constants/ErrorMessage";
// import { selectUser } from "../selectors";
import types from "../constants/Reservations";

function* getReservationsPm() {
  try {
    const response = yield getReservationsPmApi();
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.GET_RESERVED_PRODUCTS_SUCCESS_PM,
        payload: response.data,
      });
    } else {
      yield put({ type: types.GET_RESERVED_PRODUCTS_FAILURE_PM });
      message.error("Failed to get reserved products");
    }
  } catch (error) {
    yield put({ type: types.GET_RESERVED_PRODUCTS_FAILURE_PM });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

function* getReservationsPmm() {
  try {
    const response = yield getReservationsPmmApi();
    if (response.status >= 200 && response.status < 300) {
      console.log("response", response.data);
      yield put({
        type: types.GET_RESERVED_PRODUCTS_SUCCESS_PMM,
        payload: response.data,
      });
    } else {
      yield put({ type: types.GET_RESERVED_PRODUCTS_FAILURE_PMM });
      message.error("Failed to get reserved products");
    }
  } catch (error) {
    yield put({ type: types.GET_RESERVED_PRODUCTS_FAILURE_PMM });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}
function* reserveProduct(action) {
  try {
    const response = yield reserveProductApi(action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.RESERVE_PRODUCT_SUCCESS });
      message.success("reservation added successfully");
    } else {
      yield put({ type: types.RESERVE_PRODUCT_FAILURE });
    }
  } catch (error) {
    yield put({ type: types.RESERVE_PRODUCT_FAILURE });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

export default function* reservationsSaga() {
  yield takeLatest(types.GET_RESERVED_PRODUCTS_PM, getReservationsPm);
  yield takeLatest(types.GET_RESERVED_PRODUCTS_PMM, getReservationsPmm);
  yield takeLatest(types.RESERVE_PRODUCT, reserveProduct);
}
