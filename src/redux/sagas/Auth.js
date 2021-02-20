import { put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import {
  signinApi,
  changePasswordApi,
  updateUserProfile,
  registerApi,
} from "../api/Auth";
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

function* editUserProfile(action) {
  try {
    const response = yield updateUserProfile(action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.EDIT_USER_SUCCESS,
        payload: response.data.result,
      });
      message.success("Profile updated");
    } else {
      yield put({ type: types.EDIT_USER_FAILURE });
    }
  } catch (error) {
    yield put({ type: types.EDIT_USER_FAILURE });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

function* registerUser(action) {
  try {
    const response = yield registerApi(action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.SIGNUP_SUCCESS });
      yield put({ type: types.SET_INITIAL_VALUES });
      message.success(
        "Registration request has been sent you will recieve an email notification soon"
      );
    } else {
      yield put({ type: types.SIGNUP_FAILED });
    }
  } catch (error) {
    yield put({ type: types.SIGNUP_FAILED });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}
export default function* AuthSaga() {
  yield takeLatest(types.SIGNIN, signin);
  yield takeLatest(types.CHANGE_PASSWORD, changePassword);
  yield takeLatest(types.EDIT_USER, editUserProfile);
  yield takeLatest(types.SIGNUP, registerUser);
}
