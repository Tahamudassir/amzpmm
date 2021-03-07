import API from "../config/lib";

export function getProductsApi(queryData) {
  return API.post("/product/getbyuserid", queryData);
}

export function getProductsPmApi(queryData) {
  return API.post("/product/sort", queryData);
}
export function addProductApi(queryData) {
  return API.post("/product/add", queryData);
}
export function filterProductsApi(queryData) {
  return API.post("/order/add", queryData);
}
export function viewProductApi(queryData) {
  return API.post("/product/getbyid", queryData);
}
export function editProductApi(queryData) {
  return API.post("/product/edit", queryData);
}
export function editProductImageApi(queryData) {
  if (queryData.amazonImage) {
    return API.post(
      `/product/editamazonimage/${queryData.id}`,
      queryData.formData
    );
  }
  return API.post(`/product/editimage/${queryData.id}`, queryData.formData);
}
