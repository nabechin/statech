export default (state = "", action) => {
  switch (action.type) {
    case "COPY_ARTICLE":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
