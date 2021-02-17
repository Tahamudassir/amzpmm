import { all } from "redux-saga/effects";
import Auth from "./Auth";
import Orders from "./Orders";

export default function* rootSaga() {
  yield all([Auth(), Orders()]);
}
