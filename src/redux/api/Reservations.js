import API from "../config/lib";

export async function getReservationsApi() {
  return API.get("/reservation/getuserreservations");
}

// export async function getReservationsPmApi() {
//   return API.get("/reservation/getuserreservations");
// }
export async function reserveProductApi(queryData) {
  return API.post("/reservation/add", queryData);
}

export async function releaseProductApi(queryData) {
  return API.post("/reservation/release", queryData);
}
