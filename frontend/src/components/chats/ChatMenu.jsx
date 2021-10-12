import { Container, InputBase, alpha, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Conversation from "./Conversation";

const useStyles = makeStyles((theme) => ({
  menu: {
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    position: "fixed",
    top: "56px",
    paddingTop: theme.spacing(3),
  },
  container: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingInline: "auto",
    },
  },
  input: {
    width: "90%",
    backgroundColor: alpha(theme.palette.common.white, 0.7),
    borderRadius: "16px",
    paddingInline: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "98%",
    },
  },
  contacts: {
    marginBlock: "15px",
  },
}));

const ChatMenu = ({ chats, setMessages }) => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <Container className={classes.container}>
        <InputBase placeholder="Friends" className={classes.input} />
        <Typography className={classes.contacts}>Contacts</Typography>
        {chats.map((chat) => (
          <Conversation key={chat._id} chat={chat} setMessages={setMessages} />
        ))}
      </Container>
    </div>
  );
};

export default ChatMenu;
