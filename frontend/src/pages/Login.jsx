import { Paper, Typography, alpha, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { auth } from "../Firebase";
import login from "../context/Auth/Login";
import { useAuth } from "../context/Auth/AuthContext";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.7),
    flexDirection: "column",
    color: theme.palette.info.main,
  },
  paper: {
    height: "80%",
    width: "50%",
    outline: `1px solid lightgrey`,

    // [theme.breakpoints.down("sm")]: {
    //   height: "100%",
    //   width: "100%",
    // },
  },
  form: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  input: {
    marginBottom: "20px",
    width: "70%",
  },
  button: {
    backgroundColor: theme.palette.info.dark,
    width: "70%",
    color: "white",
    marginBottom: "20px",
  },
  google: {
    backgroundColor: "#8a1108",
    width: "70%",
    color: "white",
    marginBottom: "20px",
  },
  facebook: {
    backgroundColor: theme.palette.primary.main,
    width: "70%",
    color: "white",
    marginBottom: "10px",
  },
  text: {
    color: theme.palette.info.main,
    cursor: "pointer",
    marginBottom: "10px",
  },
  bold: {
    color: theme.palette.info.main,
    cursor: "pointer",
  },
  sign: {
    color: "grey",
  },
}));
const Login = () => {
  const { dispatch, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const classes = useStyles();
  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
    history.push("/");
    console.log(user);
  };
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4">
        Soaptalk
      </Typography>
      <Paper elevation={3} className={classes.paper}>
        <form className={classes.form}>
          <TextField
            label="Email address"
            className={classes.input}
            variant="outlined"
            autoFocus
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            className={classes.input}
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            className={classes.button}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            className={classes.google}
            onClick={() => {
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
            }}
          >
            Continue with Google
          </Button>
          <Button
            className={classes.facebook}
            onClick={() => {
              auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
            }}
          >
            Continue with Facebook
          </Button>
          <Typography className={classes.text}>
            <Link className="link" to="/reset">
              Forgot Password?
            </Link>
          </Typography>
          <Typography className={classes.sign}>
            New to Soaptalk?{" "}
            <b className={classes.bold}>
              <Link to="/register" className="link">
                Sign Up
              </Link>{" "}
            </b>
          </Typography>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
