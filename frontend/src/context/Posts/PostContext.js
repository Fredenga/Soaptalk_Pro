import { createContext, useContext, useReducer } from "react";
import PostReducer from "./PostReducer";
const INITIAL_STATE = {
  post: null,
  isFetching: false,
  error: false,
};
const PostContext = createContext(INITIAL_STATE);
export const usePost = () => useContext(PostContext);
export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);
  return (
    <PostContext.Provider
      value={{
        post: state.post,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
