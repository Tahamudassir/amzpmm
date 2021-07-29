import { put, takeLatest, select } from "redux-saga/effects";
import { message } from "antd";
import {
  getReservationsApi,
  reserveProductApi,
  releaseProductApi,
  getReservationsPmApi,
} from "../api/Reservations";
import { getErrorMessage } from "../constants/ErrorMessage";
import { selectReservations } from "../selectors";
import types from "../constants/Reservations";

function* getReservations() {
  try {
    let response = yield getReservationsApi();
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.GET_RESERVED_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({ type: types.STOP_LOADING });
      message.error("Failed to get reserved products");
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

function* getPmReservations() {
  try {
    const response = yield getReservationsPmApi();
    console.log("response", response);
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.GET_RESERVED_PRODUCTS_SUCCESS_PM,
        payload: response.data,
      });
    } else {
      yield put({ type: types.STOP_LOADING });
      message.error("Failed to get reserved products");
    }
  } catch (error) {
    console.log("error", error);
    yield put({ type: types.STOP_LOADING });
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

function* releaseProduct({ payload }) {
  try {
    const response = yield releaseProductApi(payload);
    const reservations = yield select(selectReservations);
    if (response.status >= 200 && response.status < 300) {
      const newReservations = reservations.filter(
        (reservation) => reservation._id !== payload.reservationId
      );
      yield put({
        type: types.RELEASE_PRODUCT_SUCCESS,
        payload: newReservations,
      });
      message.success("product released successfully");
    } else {
      yield put({ type: types.STOP_LOADING });
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

export default function* reservationsSaga() {
  yield takeLatest(types.GET_RESERVED_PRODUCTS, getReservations);
  yield takeLatest(types.GET_RESERVED_PRODUCTS_PM, getPmReservations);
  yield takeLatest(types.RESERVE_PRODUCT, reserveProduct);
  yield takeLatest(types.RELEASE_PRODUCT, releaseProduct);
}
