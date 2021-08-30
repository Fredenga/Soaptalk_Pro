import { Container, List, ListItem, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Group,
  Home,
  PermIdentity,
  Storefront,
  VideoLibrary,
  Event,
  Bookmark,
  Work,
  Cloud,
  Star,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  left: {
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    position: "sticky",
    top: "56px",
  },
  container: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingInline: "auto",
    },
  },
  item: {
    marginBottom: "18px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(2),
    },
  },
  text: {
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.left}>
      <Container className={classes.container}>
        <List className={classes.list}>
          <Link to="/" className="link">
            <ListItem className={classes.item}>
              <Home />
              <Typography className={classes.text}>Home</Typography>
            </ListItem>
          </Link>
          <Link to="/friends" className="link">
            <ListItem className={classes.item}>
              <PermIdentity />
              <Typography className={classes.text}>Friends</Typography>
            </ListItem>
          </Link>
          <Link className="link" to="/groups">
            <ListItem className={classes.item}>
              <Group />
              <Typography className={classes.text}>Groups</Typography>
            </ListItem>
          </Link>

          <Link className="link">
            <ListItem className={classes.item}>
              <Star />
              <Typography className={classes.text}>Favourites</Typography>
            </ListItem>
          </Link>
          <Link className="link">
            <ListItem className={classes.item}>
              <Storefront />
              <Typography className={classes.text}>Ecommerce</Typography>
            </ListItem>
          </Link>
          <Link className="link">
            <ListItem className={classes.item}>
              <VideoLibrary />
              <Typography className={classes.text}>Videos</Typography>
            </ListItem>
          </Link>
          <Link className="link">
            <ListItem className={classes.item}>
              <Event />
              <Typography className={classes.text}>Events</Typography>
            </ListItem>
          </Link>
          <Link className="link">
            <ListItem className={classes.item}>
              <Bookmark />
              <Typography className={classes.text}>Saved</Typography>
            </ListItem>
          </Link>
          <Link className="link">
            <ListItem className={classes.item}>
              <Work />
              <Typography className={classes.text}>Jobs</Typography>
            </ListItem>
          </Link>
          <Link className="link">
            <ListItem className={classes.item}>
              <Cloud />
              <Typography className={classes.text}>Weather</Typography>
            </ListItem>
          </Link>
        </List>
      </Container>
    </div>
  );
};

export default Leftbar;
