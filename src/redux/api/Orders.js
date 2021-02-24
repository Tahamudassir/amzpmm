import API from "../config/lib";

export async function getOrdersApi() {
  return API.get("/order/getorders");
}

export async function addOrdersApi(queryData) {
  return API.post("/order/add", queryData);
}
