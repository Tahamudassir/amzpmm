import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import expireIn from "redux-persist-transform-expire-in";
import Auth from "./Auth";
import Orders from "./Orders";
import Products from "./Products";
import Reservations from "./Reservations";
import Theme from "./Theme";
import AppData from "./AppData";
import Announcements from "./Announcements";
import User from "./User";
const expireTime = 24 * 60 * 60 * 1000;
const expirationKey = "expirationKey";
const LOGOUT = "LOGOUT";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
  blacklist: ["orders", "products", "reservations"],
  transforms: [expireIn(expireTime, expirationKey, {})],
};
// const authPersistConfig = {
//   key: "auth",
//   storage: storage,
//   blacklist: ["loading"],
// };

const appReducer = combineReducers({
  theme: Theme,
  // auth: persistReducer(authPersistConfig, Auth),
  auth: Auth,
  orders: Orders,
  products: Products,
  reservations: Reservations,
  appData: AppData,
  announcements: Announcements,
  pmm: User,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    // for all keys defined in your persistConfig(s)
    storage.removeItem("persist:orders");
    storage.removeItem("persist:auth");
    storage.removeItem("persist:root");
    state = undefined;
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
export default persistedReducer;
