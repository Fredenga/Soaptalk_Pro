import {
  fetchPostStart,
  fetchPostSuccess,
  fetchPostFailure,
} from "./PostAction";
import axios from "axios";
export default async function fetchPosts(dispatch) {
  dispatch(fetchPostStart());
  try {
    const response = await axios.get("/posts/");
    dispatch(fetchPostSuccess(response.data));
  } catch (err) {
    dispatch(fetchPostFailure());
  }
}
