import axios from "axios";
// import { message } from "antd";
// import history from "../../history";
const baseURL = process.env.REACT_APP_API_URL;

const service = axios.create({
  baseURL,
  timeout: 30000,
  headers: { Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN") },
});
// Config
// const ENTRY_ROUTE = "/login";
// const TOKEN_PAYLOAD_KEY = "authorization";
// const PUBLIC_REQUEST_KEY = "public-request";
// // API Request interceptor
// service.interceptors.request.use(
//   (config) => {
//     const jwtToken = localStorage.getItem("AUTH_TOKEN");
//     if (jwtToken) {
//       config.headers[TOKEN_PAYLOAD_KEY] = jwtToken;
//     }
//     if (!jwtToken && !config.headers[PUBLIC_REQUEST_KEY]) {
//       history.push(ENTRY_ROUTE);
//       window.location.reload();
//     }

//     return config;
//   },
//   (error) => {
//     // Do something with request error here
//     message.error(error.message);
//     Promise.reject(error);
//   }
// );

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

export default service;
