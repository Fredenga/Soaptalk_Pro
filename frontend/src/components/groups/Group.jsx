import GroupTop from "./GroupTop";
import {
  Container,
  Fab,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import Post from "../Post";
import { useEffect, useState } from "react";
import axios from "axios";
import { Add } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  top: {
    width: "100%",
  },
  container: {
    height: "100%",
    paddingTop: theme.spacing(8),
    position: "relative",
  },
  title: {
    color: theme.palette.primary.main,
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  absolute: {
    position: "absolute",
    right: 0,
    bottom: 2,
    marginRight: "10px",
  },
}));

const Group = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/posts");
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);
  return (
    <Container className={classes.container}>
      <div className={classes.top}>
        <GroupTop />
      </div>
      <div className={classes.bottom}>
        <Typography variant="h6" className={classes.title}>
          Recent Activity
        </Typography>
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
        <Tooltip title="Add" aria-label="add">
          <Fab color="primary" className={classes.absolute}>
            <Add />
          </Fab>
        </Tooltip>
      </div>
    </Container>
  );
};

export default Group;
