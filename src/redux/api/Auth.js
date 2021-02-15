import API from "../config/lib";

export async function signinApi(queryObj) {
  return API.post(`/signin`, queryObj);
}
export async function changePasswordApi(queryObj) {
  return API.post("/user/editpass", queryObj);
}
export async function updateUserProfile(queryObj) {
  return API.post("/user/edit", queryObj);
}
