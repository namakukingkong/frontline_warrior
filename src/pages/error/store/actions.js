export const updateMessage = ({ commit, state }, params) => {
  commit('SET_MESSAGE', state.message + params);
};
