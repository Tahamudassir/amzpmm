import API from "../config/lib";
import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;

export async function addCategoryApi(queryData) {
  return API.post("/category/add", queryData);
}
export async function addMarketApi(queryData) {
  return API.post("/market/add", queryData);
}
export async function getMarketApi(queryData) {
  return axios.get(`${baseURL}/market`, queryData);
}
export async function getCategoryApi(queryData) {
  return axios.get(`${baseURL}/category`, queryData);
}
export function getRulesRegulationsApi(queryData) {
  return API.get("/order/editorder", queryData);
}
export function addRulesRegulationsApi(queryData) {
  return API.post("/order/editorder", queryData);
}
export function deleteCategoryApi(queryData) {
  return API.post("/category/delete", queryData);
}
export function deleteMarketApi(queryData) {
  return API.post("/market/delete", queryData);
}
