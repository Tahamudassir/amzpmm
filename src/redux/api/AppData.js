import API from "../config/lib";

export async function addCategoryApi(queryData) {
  return API.post("/category/add", queryData);
}
export async function addMarketApi(queryData) {
  return API.post("/market/add", queryData);
}
export async function getMarketApi(queryData) {
  return API.get("/market", queryData);
}
export async function getCategoryApi(queryData) {
  return API.get("/category", queryData);
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
