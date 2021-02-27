import axios from "axios";
import API from "../config/lib";
const baseURL = process.env.REACT_APP_API_URL;

export function signinApi(queryObj) {
  return axios.post(`${baseURL}/signin`, queryObj);
}
export async function changePasswordApi(queryObj) {
  return API.post("/user/editpass", queryObj);
}
export async function updateUserProfile(queryObj) {
  return API.post("/user/edit", queryObj);
}

export async function registerApi(queryObj) {
  return API.post("/signup", queryObj);
}
