export const copyArticle = (article) => {
  return {
    type: "COPY_ARTICLE",
    payload: article,
  };
};
