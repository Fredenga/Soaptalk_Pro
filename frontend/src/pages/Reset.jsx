import { Paper, Typography, alpha, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
  text: {
    color: theme.palette.info.main,
    cursor: "pointer",
    marginBottom: "10px",
  },
}));
const Reset = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4">
        Soaptalk
      </Typography>
      <Paper elevation={3} className={classes.paper}>
        <form action="" className={classes.form}>
          <TextField
            label="Email address"
            className={classes.input}
            variant="outlined"
            autoFocus
            type="email"
          />

          <TextField
            label="New Password"
            className={classes.input}
            variant="outlined"
            type="password"
          />
          <Button className={classes.button}>Reset</Button>
          <Typography className={classes.text}>
            <Link variant="h6" className="link" to="/login">
              Login
            </Link>
          </Typography>
        </form>
      </Paper>
    </div>
  );
};

export default Reset;
