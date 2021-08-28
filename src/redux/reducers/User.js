import types from "../constants/User";

const initState = {
  loading: false,
  pmm: [],
};

const users = (state = initState, action) => {
  switch (action.type) {
    case types.GET_PMM:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PMM_SUCCESS:
      return {
        ...state,
        loading: false,
        pmm: action.payload,
      };

    default:
      return state;
  }
};

export default users;
