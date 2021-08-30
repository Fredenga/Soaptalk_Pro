import { Container, makeStyles } from "@material-ui/core";
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
}));

const StatusBar = () => {
  const classes = useStyles();
  return <Container className={classes.container}></Container>;
};

export default StatusBar;
