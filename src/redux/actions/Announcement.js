import types from "../constants/Announcements";

export const getAnnouncementAction = (userId) => {
  return {
    type: types.GET_ANNOUNCEMENT,
    payload: userId,
  };
};

export const markAsReadAnnouncementAction = (announcementId) => {
  return {
    type: types.MARK_AS_READ_ANNOUNCEMENT,
    payload: announcementId,
  };
};
