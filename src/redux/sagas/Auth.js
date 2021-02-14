import { put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { signinApi, changePasswordApi } from "../api/Auth";
import { getErrorMessage } from "../constants/ErrorMessage";
import types from "../constants/Auth";

function* signin(action) {
  try {
    const response = yield signinApi(action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.AUTHENTICATED, payload: response.data });
      localStorage.setItem("AUTH_TOKEN", response.data.token);
    } else {
      yield put({ type: types.SIGNIN_FAILED });
    }
  } catch (error) {
    yield put({ type: types.SIGNIN_FAILED });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

function* changePassword(action) {
  console.log("called changepassword");

  try {
    const response = yield changePasswordApi(action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.CHANGE_PASSWORD_SUCCESS });
      message.success("Password changed");
    } else {
      yield put({ type: types.CHANGE_PASSWORD_FAILURE });
    }
  } catch (error) {
    yield put({ type: types.CHANGE_PASSWORD_FAILURE });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

export default function* AuthSaga() {
  yield takeLatest(types.SIGNIN, signin);
  yield takeLatest(types.CHANGE_PASSWORD, changePassword);
}
