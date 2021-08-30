import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Friend from "./friend";
const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
  },
  title: {
    paddingTop: theme.spacing(9),
    paddingLeft: theme.spacing(3),
    color: theme.palette.primary.main,
  },
}));

const FriendList = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" className={classes.title}>
        Meet brilliant people
      </Typography>
      <main className={classes.main}>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </main>
    </>
  );
};

export default FriendList;
