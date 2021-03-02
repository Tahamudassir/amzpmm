import { put, takeLatest, select } from "redux-saga/effects";
import { message } from "antd";
import { getOrdersApi, addOrdersApi } from "../api/Orders";
import { getErrorMessage } from "../constants/ErrorMessage";
import { selectUser } from "../selectors";
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
function* addNewOrder(action) {
  try {
    const user = yield select(selectUser);
    const order = action.payload;
    order.append("user", user.username);
    const response = yield addOrdersApi(action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.NEW_ORDER_SUCCESS });
      message.success("order added successfully");
    } else {
      yield put({ type: types.NEW_ORDER_FAILURE });
    }
  } catch (error) {
    yield put({ type: types.NEW_ORDER_FAILURE });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

export default function* orderSaga() {
  yield takeLatest(types.GET_ORDERS, getOrders);
  yield takeLatest(types.NEW_ORDER, addNewOrder);
}
