import {
  Avatar,
  Card,
  CardActions,
  Container,
  CardHeader,
  Button,
  Modal,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../context/Auth/AuthContext";

import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import CreatePost from "./CreatePost";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    Width: "50%",
    paddingTop: theme.spacing(8),
  },
  post: {
    marginTop: "15px",
    backgroundColor: "#e8fcff",
    marginInline: "auto",
    height: "60px",
    marginRight: theme.spacing(3),
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      width: "85%",
      marginInline: "auto",
    },
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  postText: {
    color: "orange",
  },
  button: {
    color: theme.palette.success.main,
    "&:hover": {
      backgroundColor: "#beface",
    },
  },
}));

const Feed = () => {
  const [create, setCreate] = useState(false);
  const classes = useStyles();
  const { user } = useAuth();
  const name = user.username.split(" ")[0];
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
      <Card className={classes.post}>
        <CardHeader
          avatar={
            <Avatar
              src="https://images.unsplash.com/photo-1523264766116-1e09b3145b84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              className={classes.avatar}
            />
          }
          title={`Hey there ${name}, say something`}
        />
        <CardActions className={classes.acts}>
          <Button className={classes.button} onClick={() => setCreate(true)}>
            Create new post
          </Button>
        </CardActions>
      </Card>
      <Modal open={create} onClose={() => setCreate(false)}>
        <CreatePost setCreate={setCreate} />
      </Modal>
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </Container>
  );
};

export default Feed;
