import { all } from "redux-saga/effects";
import Auth from "./Auth";
import Orders from "./Orders";
import Products from "./Products";

export default function* rootSaga() {
  yield all([Auth(), Orders(), Products()]);
}
