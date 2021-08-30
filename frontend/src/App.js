import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Friends from "./pages/Friends";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Chat from "./pages/Chat";
import { useAuth } from "./context/Auth/AuthContext";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
export default function App() {
  const { user } = useAuth();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        {user && (
          <>
            <Route path="/friends">
              <Friends />
            </Route>
            <Route path="/groups">
              <Groups />
            </Route>
            <Route path="/reset">
              <Reset />
            </Route>
            <Route path="/chats">
              <Chat />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}
