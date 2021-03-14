import { put, takeLatest, select } from "redux-saga/effects";
import { message } from "antd";
import {
  // addCategoryApi,
  // addMarketApi,
  getCategoryApi,
  getMarketApi,
  // deleteMarketApi,
  // deleteCategoryApi,
} from "../api/AppData";
// import { selectMarkets, selectCategories } from "../selectors";
import { getErrorMessage } from "../constants/ErrorMessage";
import types from "../constants/AppData";

function* getCategories(action) {
  try {
    const response = yield getCategoryApi(action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.GET_CATEGORY_SUCCESS, payload: response.data });
    } else {
      yield put({ type: types.GET_CATEGORY_FAILURE });
    }
  } catch (error) {
    yield put({ type: types.GET_CATEGORY_FAILURE });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}
function* getMarkets(action) {
  try {
    const response = yield getMarketApi(action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.GET_MARKET_SUCCESS, payload: response.data });
    } else {
      yield put({ type: types.GET_MARKET_FAILURE });
    }
  } catch (error) {
    yield put({ type: types.GET_MARKET_FAILURE });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

// function* addCategory(action) {
//   try {
//     const response = yield addCategoryApi(action.payload);
//     if (response.status >= 200 && response.status < 300) {
//       yield put({
//         type: types.ADD_CATEGORY_SUCCESS,
//         payload: response.data.savedEvent,
//       });
//       message.success("category added successfully");
//     } else {
//       yield put({ type: types.ADD_CATEGORY_FAILURE });
//     }
//   } catch (error) {
//     yield put({ type: types.ADD_CATEGORY_FAILURE });
//     let errorMessage = yield getErrorMessage(error);
//     message.error(errorMessage);
//   }
// }

// function* addMarket(action) {
//   try {
//     const response = yield addMarketApi(action.payload);
//     if (response.status >= 200 && response.status < 300) {
//       yield put({
//         type: types.ADD_MARKET_SUCCESS,
//         payload: response.data.savedEvent,
//       });
//       message.success("market added successfully");
//     } else {
//       yield put({ type: types.ADD_MARKET_FAILURE });
//     }
//   } catch (error) {
//     yield put({ type: types.ADD_MARKET_FAILURE });
//     let errorMessage = yield getErrorMessage(error);
//     message.error(errorMessage);
//   }
// }

// function* deleteMarket(action) {
//   console.log("action ", action.payload);
//   try {
//     let markets = yield select(selectMarkets);
//     const response = yield deleteMarketApi(action.payload);

//     if (response.status >= 200 && response.status < 300) {
//       let newMarkets = markets.filter((mar) => mar._id !== action.payload.id);
//       yield put({
//         type: types.DELETE_MARKET_SUCCESS,
//         payload: newMarkets,
//       });
//       message.success("market deleted successfully");
//     } else {
//       yield put({ type: types.DELETE_MARKET_FAILURE });
//     }
//   } catch (error) {
//     yield put({ type: types.DELETE_MARKET_FAILURE });
//     let errorMessage = yield getErrorMessage(error);
//     message.error(errorMessage);
//   }
// }

// function* deleteCategory(action) {
//   try {
//     let categories = yield select(selectCategories);
//     const response = yield deleteCategoryApi(action.payload);
//     if (response.status >= 200 && response.status < 300) {
//       let newCategories = categories.filter(
//         (cat) => cat._id !== action.payload.id
//       );
//       yield put({
//         type: types.DELETE_CATEGORY_SUCCESS,
//         payload: newCategories,
//       });
//       message.success("category deleted successfully");
//     } else {
//       yield put({ type: types.DELETE_CATEGORY_FAILURE });
//     }
//   } catch (error) {
//     yield put({ type: types.DELETE_CATEGORY_FAILURE });
//     let errorMessage = yield getErrorMessage(error);
//     message.error(errorMessage);
//   }
// }

export default function* AppDataSaga() {
  // yield takeLatest(types.ADD_CATEGORY, addCategory);
  // yield takeLatest(types.ADD_MARKET, addMarket);
  yield takeLatest(types.GET_CATEGORY, getCategories);
  yield takeLatest(types.GET_MARKET, getMarkets);
  // yield takeLatest(types.DELETE_MARKET, deleteMarket);
  // yield takeLatest(types.DELETE_CATEGORY, deleteCategory);
}
