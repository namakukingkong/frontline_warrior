export default {
  getMessage: (state, getters) => (params) => {
    return "Iam called from "+ params
  }
};
