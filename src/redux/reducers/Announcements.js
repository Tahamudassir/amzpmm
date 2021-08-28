import types from "../constants/Announcements";

const initState = {
  loading: false,
  notifications: [],
  count: 0,
};

const Announcement = (state = initState, action) => {
  switch (action.type) {
    case types.MARK_AS_READ_ANNOUNCEMENT:
    case types.GET_ANNOUNCEMENT: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.GET_ANNOUNCEMENT_SUCCESS: {
      // console.log("usama=====><>>>", action.payload);
      return {
        ...state,
        loading: false,
        notifications: action.payload.announcement,
        count: action.payload.count,
      };
    }
    case types.GET_ANNOUNCEMENT_FALURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default Announcement;
