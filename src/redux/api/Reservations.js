import API from "../config/lib";

export async function getReservationsPmmApi() {
  return API.get("/reservation/getreservedproducts");
}

export async function getReservationsPmApi() {
  return API.get("/reservation/getuserreservations");
}
export async function reserveProductApi(queryData) {
  return API.post("/reservation/add", queryData);
}
