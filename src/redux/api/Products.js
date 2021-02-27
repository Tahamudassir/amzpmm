import API from "../config/lib";

export async function getProductsApi() {
  return API.get("/product/sort");
}
export async function filterProductsApi(queryData) {
  return API.post("/order/add", queryData);
}
export async function viewProductApi(queryData) {
  return API.post("/product/getbyid", queryData);
}
export async function editProductApi(queryData) {
  return API.post("/product/edit", queryData);
}
export async function editProductImageApi(queryData) {
  return API.post("/order/add", queryData);
}
