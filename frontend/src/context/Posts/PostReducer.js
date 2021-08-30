const PostReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_POST_START":
      return {
        post: null,
        isFetching: true,
        error: false,
      };
    case "FETCH_POST_SUCCESS":
      return {
        post: action.payload,
        isFetching: false,
        error: false,
      };
    case "FETCH_POST_FAILURE":
      return {
        post: null,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};
export default PostReducer;
