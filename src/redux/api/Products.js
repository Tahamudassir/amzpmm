import API from "../config/lib";
import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;

export function getProductsApi(queryData) {
  return API.post("/product/getbyuserid", queryData);
}

export function getProductsPmApi() {
  return API.post("/product/sort", { status: "Enabled" });
}
export function getProductsPublicApi() {
  return axios.post(`${baseURL}/product/sort`, { status: "Enabled" });
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
