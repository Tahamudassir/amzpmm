import types from "../constants/Announcements";

export const getAnnouncementAction = () => {
  return {
    type: types.GET_ANNOUNCEMENT,
  };
};
