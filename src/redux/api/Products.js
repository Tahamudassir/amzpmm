import API from "../config/lib";

export async function getProductsApi(queryData) {
  return API.post("/product/sort", queryData);
}
export async function addProductApi(queryData) {
  return API.post("/product/add", queryData);
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
  if (queryData.amazonImage) {
    return API.post(
      `/product/editamazonimage/${queryData.id}`,
      queryData.formData
    );
  }
  return API.post(`/product/editimage/${queryData.id}`, queryData.formData);
}
