import API from "../config/lib";

export async function getOrdersApi() {
  return API.get("/order/getorders");
}
