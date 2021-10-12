import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/Auth/AuthContext";
const useStyles = makeStyles((theme) => ({
  conversation: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    cursor: "pointer",
  },
  name: {
    marginLeft: "10px",
  },
}));

const Conversation = ({ chat, setMessages }) => {
  const classes = useStyles();
  const [friend, setFriend] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const getFriend = async () => {
      try {
        const response = await axios.get(`/users/friend/${chat.receiverId}`, {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        });
        setFriend(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriend();
  }, [user.accessToken, chat.receiverId]);

  return (
    <div className={classes.conversation}>
      <Avatar
        src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />
      <Typography
        onClick={async () => {
          try {
            const response = await axios.get(`/messages/${chat._id}`, {
              headers: { token: `Bearer ${user.accessToken}` },
            });
            setMessages(response.data);
          } catch (err) {
            console.log(err);
          }
        }}
        className={classes.name}
      >
        {friend?.username}
      </Typography>
    </div>
  );
};

export default Conversation;
