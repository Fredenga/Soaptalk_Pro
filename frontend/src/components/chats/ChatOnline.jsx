import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Contact from "../Contact";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    paddingTop: theme.spacing(3),
    color: "white",
    position: "fixed",
    top: "56px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </Container>
  );
};

export default Rightbar;
