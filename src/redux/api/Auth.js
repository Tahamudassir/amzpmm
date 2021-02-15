import API from "../config/lib";

let config = {
  headers: { Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN") },
};
export async function signinApi(queryObj) {
  return API.post(`/signin`, queryObj);
}
export async function changePasswordApi(queryObj) {
  return API.post("/user/editpass", queryObj, config);
}
