import { createContext, useContext, useEffect, useReducer } from "react";

// import { auth } from "../../Firebase";
import AuthReducer from "./AuthReducer";
export const useAuth = () => useContext(AuthContext);
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};
const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

  //TODO FIREBASE
  // const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState(null);
  // const history = useHistory();
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     //get user data and update it in the state
  //     setUser(user);
  //     setLoading(false);
  //     user && history.push("/");
  //   });
  // }, [user, history]);
  // const value = { user };

  // return (
  //   <AuthContext.Provider value={value}>
  //     {!loading && children}
  //   </AuthContext.Provider>
  // );
};
