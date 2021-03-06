import { all } from "redux-saga/effects";
import Auth from "./Auth";
import Orders from "./Orders";
import Products from "./Products";
import Reservations from "./Reservation";
import AppData from "./AppData";
import AnnouncementSaga from "./Announcement";
export default function* rootSaga() {
  yield all([
    Auth(),
    Orders(),
    Products(),
    Reservations(),
    AppData(),
    AnnouncementSaga(),
  ]);
}
