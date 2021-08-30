import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Duo } from "@material-ui/icons";
import Contact from "./Contact";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    paddingTop: theme.spacing(2),
    color: "white",
    position: "sticky",
    top: "56px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  title: {
    fontSize: "16px",
  },
  live: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  text: {
    fontSize: "18px",
    marginRight: "10px",
  },
}));
const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography gutterBottom className={classes.title}>
        Live Friends
      </Typography>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <div className={classes.live}>
        <Duo />
        <Typography className={classes.text}>Live Video</Typography>
      </div>
    </Container>
  );
};

export default Rightbar;
