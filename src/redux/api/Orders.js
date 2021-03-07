import API from "../config/lib";

export async function getOrdersApi() {
  return API.get("/order/getuserorders");
}

export async function addOrdersApi(queryData) {
  return API.post("/order/add", queryData);
}
export async function getOrdersByStatusApi(queryData) {
  return API.post("/order/getuserorderbystatus", queryData);
}
export async function viewOrderApi(queryData) {
  return API.post("/order/getorderbyid", queryData);
}
export async function editOrderApi(queryData) {
  return API.post("/order/editorder", queryData);
}
