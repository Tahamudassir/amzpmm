export const selectUser = (state) => {
  return state.auth && state.auth.user ? state.auth.user : null;
};
