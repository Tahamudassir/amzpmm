import { put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { getAnnouncementApi } from "../api/Announcement";
import { getErrorMessage } from "../constants/ErrorMessage";
import types from "../constants/Announcements";

function* getAnnouncements() {
  try {
    const response = yield getAnnouncementApi();
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.GET_ANNOUNCEMENT_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({ type: types.GET_ANNOUNCEMENT_FALURE });
    }
  } catch (error) {
    yield put({ type: types.GET_ANNOUNCEMENT_FALURE });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

export default function* AnnouncementSaga() {
  yield takeLatest(types.GET_ANNOUNCEMENT, getAnnouncements);
}
