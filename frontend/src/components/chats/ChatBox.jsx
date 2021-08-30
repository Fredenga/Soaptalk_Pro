import { Container } from "@material-ui/core";
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

const ChatBox = () => {
  const classes = useStyles();
  let own = false;
  return (
    <Container className={classes.container}>
      <div className={classes.top}>
        <Message own={own} />
        <Message own={true} />
        <Message own={own} />
        <Message own={true} />
        <Message own={own} />
        <Message own={true} />
        <Message own={own} />
        <Message own={true} />
        <Message own={own} />
        <Message own={true} />
        <Message own={own} />
      </div>
      <div className={classes.bottom}>
        <Sender />
      </div>
    </Container>
  );
};

export default ChatBox;
