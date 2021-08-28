import API from "../config/lib";

export async function getAnnouncementApi(userId) {
  return API.get(`/announcement/${userId}`);
}

export async function markAsReadAnnouncementApi(announcementId) {
  return API.put(`/announcement/markAsRead/${announcementId}`);
}
