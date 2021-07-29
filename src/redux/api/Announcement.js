import API from "../config/lib";

export async function getAnnouncementApi() {
  return API.get("/announcement/");
}
