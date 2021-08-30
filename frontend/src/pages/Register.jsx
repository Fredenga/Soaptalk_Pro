import { Paper, Typography, alpha, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
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
    height: "60%",
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
    backgroundColor: theme.palette.info.main,
    width: "70%",
    color: "white",
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
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const classes = useStyles();
  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await axios.post("auth/register", {
      username,
      email,
      password,
    });
    history.push("/login");
    console.log(response.data);
  };
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4">
        Soaptalk
      </Typography>
      <Paper elevation={3} className={classes.paper}>
        <form action="" className={classes.form}>
          <TextField
            label="Username"
            className={classes.input}
            variant="outlined"
            autoFocus
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email address"
            className={classes.input}
            variant="outlined"
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
            onClick={handleRegister}
          >
            Register
          </Button>
          <Typography className={classes.sign}>
            Already have an account?{" "}
            <b className={classes.bold}>
              <Link to="/login" className="link">
                Login
              </Link>{" "}
            </b>
          </Typography>
        </form>
      </Paper>
    </div>
  );
};

export default Register;
