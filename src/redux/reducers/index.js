import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import Auth from "./Auth";
import Orders from "./Orders";
import Theme from "./Theme";

const rootReducer = combineReducers({
  theme: Theme,
  auth: Auth,
  orders: Orders,
});

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth", "orders"],
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
export default persistedReducer;
