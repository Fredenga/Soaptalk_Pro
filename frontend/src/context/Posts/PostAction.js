export const fetchPostStart = () => {
  return {
    type: "FETCH_POST_START",
  };
};
export const fetchPostSuccess = (post) => {
  return {
    type: "FETCH_POST_SUCCESS",
    payload: post,
  };
};
export const fetchPostFailure = () => {
  return {
    type: "FETCH_POST_FAILURE",
  };
};
