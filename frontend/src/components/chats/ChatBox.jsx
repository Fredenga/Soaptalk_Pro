import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Message from "./Message";
import Sender from "./Sender";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    top: "56px",
    paddingTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bottom: {
    position: "sticky",
    bottom: 0,
    width: "100%",
  },
  top: {
    paddingInline: theme.spacing(2),
  },
}));

const ChatBox = ({ messages }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.top}>
        {messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
        {!messages && (
          <Typography>Click contact to open conversation</Typography>
        )}
      </div>
      <div className={classes.bottom}>
        <Sender />
      </div>
    </Container>
  );
};

export default ChatBox;
