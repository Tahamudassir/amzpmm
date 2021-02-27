import axios from "axios";
import { message } from "antd";

const baseURL = process.env.REACT_APP_API_URL;
const service = axios.create({
  baseURL,
  timeout: 30000,
});
// // API Request interceptor
service.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem("AUTH_TOKEN");
    config.headers = {
      Authorization: `Bearer ${jwtToken}`,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return config;
  },
  (error) => {
    message.error(error.message);
    Promise.reject(error);
  }
);
export default service;

// // API respone interceptor
// service.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     let notificationParam = {
//       message: "",
//     };

//     // Remove token and redirect
//     if (error.response.status === 400 || error.response.status === 403) {
//       localStorage.removeItem("AUTH_TOKEN");
//       notificationParam.message = "Authentication Fail";
//       notificationParam.description = "Please login again";
//       history.push(ENTRY_ROUTE);
//       window.location.reload();
//     }

//     if (error.response.status === 404) {
//       notificationParam.message = "Not Found";
//     }

//     if (error.response.status === 500) {
//       notificationParam.message = "Internal Server Error";
//     }

//     if (error.response.status === 508) {
//       notificationParam.message = "Time Out";
//     }

//     message.error(notificationParam.message);
//     return Promise.reject(error);
//   }
// );
