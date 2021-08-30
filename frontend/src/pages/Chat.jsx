import { Grid } from "@material-ui/core";
import Navbar from "../components/Navbar";
import ChatMenu from "../components/chats/ChatMenu";
import ChatBox from "../components/chats/ChatBox";
import ChatOnline from "../components/chats/ChatOnline";
import { useAuth } from "../context/Auth/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const { user } = useAuth();
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getChats = async () => {
      try {
        const response = await axios.get("/chats/", {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        });
        setChats(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getChats();
  }, [user.accessToken]);

  return (
    <main>
      <Navbar />
      <Grid container>
        <Grid item md={2} xs={3}>
          <ChatMenu chats={chats} />
        </Grid>
        <Grid item md={8} xs={9}>
          <ChatBox />
        </Grid>
        <Grid item md={2} xs={false}>
          <ChatOnline />
        </Grid>
      </Grid>
    </main>
  );
};

export default Chat;
