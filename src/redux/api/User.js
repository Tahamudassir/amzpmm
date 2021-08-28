import API from "../config/lib";

export function getPmmApi() {
  return API.get("/admin/getpmm");
}
