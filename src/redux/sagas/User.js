import { put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { getPmmApi } from "../api/User";
import { getErrorMessage } from "../constants/ErrorMessage";

import types from "../constants/User";

function* getPmm(action) {
  try {
    const response = yield getPmmApi(action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.GET_PMM_SUCCESS, payload: response.data });
    } else {
      yield put({ type: types.STOP_LOADING });
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

export default function* userSaga() {
  yield takeLatest(types.GET_PMM, getPmm);
}
