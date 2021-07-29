import { put, takeLatest, select } from "redux-saga/effects";
import moment from "moment-timezone";
import { message } from "antd";
import XLSX from "xlsx";
import {
  getOrdersApi,
  addOrdersApi,
  viewOrderApi,
  editOrderApi,
  getOrdersByStatusApi,
  getOrdersByStatusPmApi,
  editOrderPicApi,
  editRefundPicApi,
  editReviewPicApi,
  getOrdersPmApi,
  getPmOrdersToCreateExcelApi,
  getPmmOrdersToCreateExcelApi,
  getOrderOnSearchByOrderId,
  getOrderOnSearchByCutomerEmail,
  getOrderOnSearchByProductId,
  getPmmOrderOnSearchByOrderId,
  getPmmOrderOnSearchByCutomerEmail,
  getPmmOrderOnSearchByProductId,
} from "../api/Orders";
import { getErrorMessage } from "../constants/ErrorMessage";
import { selectUser } from "../selectors";
import types from "../constants/Orders";
import excelColWidth from "../constants/excelColWidth";

function* getOrders({ payload }) {
  try {
    let response;
    if (payload.status === "All") {
      response = yield getOrdersApi(payload);
    } else {
      response = yield getOrdersByStatusApi(payload);
    }
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.GET_ORDERS_SUCCESS, payload: response.data });
    } else {
      yield put({ type: types.STOP_LOADING });
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

function* getOrdersPm({ payload }) {
  try {
    let response;
    if (payload.status === "All") {
      response = yield getOrdersPmApi();
    } else {
      response = yield getOrdersByStatusPmApi(payload);
    }
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.GET_ORDERS_PM_SUCCESS, payload: response.data });
    } else {
      yield put({ type: types.STOP_LOADING });
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

function* addNewOrder(action) {
  try {
    const user = yield select(selectUser);
    const order = action.payload;
    order.append("user", user.username);
    const response = yield addOrdersApi(action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.NEW_ORDER_SUCCESS });
      yield put({ type: types.RESET_VARIABLES });
      message.success("order added successfully");
    } else {
      yield put({ type: types.STOP_LOADING });
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

function* viewOrder(action) {
  try {
    const response = yield viewOrderApi(action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.VIEW_ORDER_SUCCESS,
        payload: {
          ...response.data.events[0],
          chineseSeller: response.data.chineseSeller, //chaipy
        },
      });
    } else {
      yield put({ type: types.STOP_LOADING });
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

function* editOrder(action) {
  try {
    const response = yield editOrderApi(action.payload);
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.EDIT_ORDER_SUCCESS,
        payload: response.data.result,
      });
      message.success("order edited successfully");
    } else {
      yield put({ type: types.STOP_LOADING });
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

function* exportOrdersToExcel({ payload }) {
  try {
    let from = moment(payload.from);
    let to = moment(payload.to).add(1, "days");
    let response;

    if (payload.orderstatus === "All") {
      // response = yield getOrdersApi();
      response = yield getPmmOrdersToCreateExcelApi();
    } else {
      // response = yield getOrdersByStatusApi(
      response = yield getPmmOrdersToCreateExcelApi({
        status: payload.orderstatus,
      });
    }
    if (response.status >= 200 && response.status < 300) {
      const data = response.data.events;
      const excelData = data.filter((order) => {
        let d = moment(order.createdAt);
        return d.isBetween(from, to, "days", "[]");
      });

      let workbook = XLSX.utils.book_new();
      let worksheet = XLSX.utils.json_to_sheet(excelData);
      worksheet["!cols"] = excelColWidth;
      XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");

      yield XLSX.writeFile(workbook, "output.xlsx");
      yield put({ type: types.EXPORT_TO_EXCEL_SUCCESS });
    } else {
      yield put({ type: types.STOP_LOADING });
      message.error("failed to generate excel file");
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

function* exportOrdersPmToExcel({ payload }) {
  try {
    let from = moment(payload.from);
    let to = moment(payload.to).add(1, "days");
    let response;

    if (payload.orderstatus === "All") {
      // response = yield getOrdersPmApi();
      response = yield getPmOrdersToCreateExcelApi();
    } else {
      // response = yield getOrdersByStatusPmApi({
      //   status: payload.orderstatus,
      // });
      response = yield getPmOrdersToCreateExcelApi({
        status: payload.orderstatus,
      });
    }
    if (response.status >= 200 && response.status < 300) {
      const data = response.data.events;
      const excelData = data.filter((order) => {
        let d = moment(order.createdAt);
        return d.isBetween(from, to, "days", "[]");
      });

      let workbook = XLSX.utils.book_new();
      let worksheet = XLSX.utils.json_to_sheet(excelData);
      worksheet["!cols"] = excelColWidth;

      XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
      yield XLSX.writeFile(workbook, "output.xlsx");
      yield put({ type: types.STOP_LOADING });
    } else {
      yield put({ type: types.STOP_LOADING });
      message.error("failed to generate excel file");
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

function* editOrderPicture(action) {
  try {
    let orderPicType = action.payload.orderPicType;
    let response = null;

    if (orderPicType === "Order") {
      response = yield editOrderPicApi(action.payload);
    } else if (orderPicType === "Refund") {
      response = yield editRefundPicApi(action.payload);
    } else if (orderPicType === "Review") {
      response = yield editReviewPicApi(action.payload);
    }

    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.EDIT_ORDER_PIC_SUCCESS,
        payload: response.data.result,
      });

      message.success("updated successfully");
    } else {
      yield put({ type: types.STOP_LOADING });
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

// // pm Search through Orders
function* getOrderById({ payload }) {
  try {
    let response = yield getOrderOnSearchByOrderId(payload);
    if (payload.public) {
      //SearcheThroughPmOrders
      response = yield getOrderOnSearchByOrderId(payload);
    } else {
      response = yield getPmmOrderOnSearchByOrderId(payload);
    }
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.GET_ORDERS_SUCCESS,
        payload: response.data.events,
      });
    } else {
      yield put({ type: types.GET_ORDERS_FAILURE });
    }
  } catch (error) {
    yield put({ type: types.GET_ORDERS_FAILURE });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}
function* getOrderByCustomerEmail({ payload }) {
  try {
    let response;
    console.log(payload);
    if (payload.public) {
      //SearcheThroughPmOrders

      response = yield getOrderOnSearchByCutomerEmail(payload);
    } else {
      response = yield getPmmOrderOnSearchByCutomerEmail(payload);
    }
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.GET_ORDERS_SUCCESS,
        payload: response.data.events,
      });
    } else {
      yield put({ type: types.GET_ORDERS_FAILURE });
    }
  } catch (error) {
    yield put({ type: types.GET_ORDERS_FAILURE });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

function* getOrderByProductId({ payload }) {
  try {
    let response = null;
    if (payload.public) {
      //SearcheThroughPmOrders
      response = yield getOrderOnSearchByProductId(payload);
    } else {
      response = yield getPmmOrderOnSearchByProductId(payload);
    }
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.GET_ORDERS_SUCCESS,
        payload: response.data.events,
      });
    } else {
      yield put({ type: types.GET_ORDERS_FAILURE });
    }
  } catch (error) {
    yield put({ type: types.GET_ORDERS_FAILURE });
    let errorMessage = yield getErrorMessage(error);
    message.error(errorMessage);
  }
}

export default function* orderSaga() {
  yield takeLatest(types.GET_ORDERS, getOrders);
  yield takeLatest(types.GET_ORDERS_PM, getOrdersPm);
  yield takeLatest(types.EXPORT_TO_EXCEL, exportOrdersToExcel);
  yield takeLatest(types.EXPORT_TO_EXCEL_PM, exportOrdersPmToExcel);
  yield takeLatest(types.NEW_ORDER, addNewOrder);
  yield takeLatest(types.VIEW_ORDER, viewOrder);
  yield takeLatest(types.EDIT_ORDER, editOrder);
  yield takeLatest(types.EDIT_ORDER_PIC, editOrderPicture);
  yield takeLatest(types.SEARCH_ORDER_BY_ID, getOrderById);
  yield takeLatest(types.SEARCH_ORDER_BY_PRODUCT_ID, getOrderByProductId);
  yield takeLatest(
    types.SEARCH_ORDER_BY_CUSTOMER_EMAIL,
    getOrderByCustomerEmail
  );
}
