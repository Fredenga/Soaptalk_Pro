import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "./AuthActions";
export default async function login(user, dispatch) {
  dispatch(loginStart());
  try {
    const response = await axios.post("auth/login", user);
    dispatch(loginSuccess(response.data));
  } catch (err) {
    dispatch(loginFailure());
  }
}
