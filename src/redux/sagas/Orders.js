import { put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { getOrdersApi } from "../api/Orders";
import { getErrorMessage } from "../constants/ErrorMessage";
import types from "../constants/Orders";

function* getOrders() {
  try {
    const response = yield getOrdersApi();
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.GET_ORDERS_SUCCESS, payload: response.data });
    } else {
      yield put({ type: types.GET_ORDERS_FAILURE });
    }
  } catch (error) {
    yield put({ type: types.GET_ORDERS_FAILURE });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

export default function* AuthSaga() {
  yield takeLatest(types.GET_ORDERS, getOrders);
}
