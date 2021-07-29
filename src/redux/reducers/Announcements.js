import types from "../constants/Announcements";

const initState = {
  loading: false,
  notifications: [],
};

const Announcement = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ANNOUNCEMENT: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        notifications: action.payload,
      };
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
