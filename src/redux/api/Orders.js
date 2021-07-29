import API from "../config/lib";

export function getOrdersApi(payload) {
  return API.get("/order/getuserordered", payload);
}
// pmOrdersApi
export async function getPmOrdersToCreateExcelApi(payload) {
  return API.post("/order/getOrdersToCreateExcel", payload);
}

// pmmOrdersApI
export async function getPmmOrdersToCreateExcelApi(payload) {
  return API.post("/order/getPmmOrdersToCreateExcel", payload);
}

//searchPmmOrders
export async function getPmmOrderOnSearchByOrderId(payload) {
  return API.post("/order/searchPmmOrders", payload);
}

export async function getPmmOrderOnSearchByCutomerEmail(payload) {
  return API.post("/order/searchPmmOrders", payload);
}

export async function getPmmOrderOnSearchByProductId(payload) {
  return API.post("/order/searchPmmOrders", payload);
}

//searchPmOrders
export async function getOrderOnSearchByOrderId(payload) {
  return API.post("/order/search", payload);
}

export async function getOrderOnSearchByCutomerEmail(payload) {
  return API.post("/order/search", payload);
}

export async function getOrderOnSearchByProductId(payload) {
  return API.post("/order/search", payload);
}
export function getOrdersPmApi() {
  return API.get("/order/getuserorders");
}
export function addOrdersApi(queryData) {
  return API.post("/order/add", queryData);
}
export function getOrdersByStatusApi(queryData) {
  return API.post("/order/getuserorderbystatus2", queryData);
}
export function getOrdersByStatusPmApi(queryData) {
  return API.post("/order/getuserorderbystatus", queryData);
}
export function viewOrderApi(queryData) {
  return API.post("/order/getorderbyid", queryData);
}
export function editOrderApi(queryData) {
  return API.post("/order/editorder", queryData);
}
export function editReviewPicApi(queryData) {
  return API.post(`/order/editreviewpic/${queryData.id}`, queryData.image);
}
export function editOrderPicApi(queryData) {
  return API.post(`/order/editorderpic/${queryData.id}`, queryData.image);
}
export function editRefundPicApi(queryData) {
  return API.post(`/order/editrefundpic/${queryData.id}`, queryData.image);
}
