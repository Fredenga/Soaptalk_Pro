import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, InputBase, Typography } from "@material-ui/core";
import { AddPhotoAlternate, ClearSharp } from "@material-ui/icons";
import { useAuth } from "../context/Auth/AuthContext";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "50%",
    width: "50%",
    backgroundColor: "#485063",
    borderRadius: "2px",
    marginTop: "10%",
    marginLeft: "25%",
    padding: "10px",
    color: "lightgrey",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30%",
      marginLeft: "20%",
      width: "70%",
    },
  },
  post: {
    width: "100%",
    height: "80%",
    backgroundColor: "inherit",
    outline: "none",
    fontSize: "16px",
    border: "none",
    marginTop: theme.spacing(2),
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    marginBottom: "20px",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
  },
  photo: { color: "lightgrey", display: "flex", cursor: "pointer" },
}));

const CreatePost = ({ setCreate }) => {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useAuth();
  const reset = () => {
    setText("");
    setDescription("");
    setFile(null);
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "/posts",
        { text, description },
        {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        }
      );
    } catch (err) {}
  };
  return (
    <div className={classes.body}>
      <div className={classes.top}>
        <Typography gutterBottom style={{ alignSelf: "center" }}>
          Create Post
        </Typography>
        <ClearSharp
          style={{ cursor: "pointer" }}
          onClick={() => {
            reset();
            setCreate(false);
          }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <InputBase
          gutterBottom
          style={{ color: "lightgrey" }}
          placeholder="Tell us about your post"
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea
          className={classes.post}
          placeholder="Write something..."
          name="post"
          id="post"
          cols="30"
          rows="10"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className={classes.buttons}>
          <label htmlFor="fileupload">
            <div className={classes.photo}>
              <AddPhotoAlternate />
              <Typography>Add Photo</Typography>
            </div>
          </label>
          <input
            type="file"
            id="fileupload"
            style={{ display: "none" }}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <Button type="submit" style={{ color: "lightgrey" }}>
            Create Post
          </Button>
        </div>
      </form>
      {file && (
        <Typography style={{ color: "grey" }}>{`Image: ${URL.createObjectURL(
          file
        )}`}</Typography>
      )}
    </div>
  );
};

export default CreatePost;
