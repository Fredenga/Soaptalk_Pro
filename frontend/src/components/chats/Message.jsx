import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../../context/Auth/AuthContext";
const useStyles = makeStyles((theme) => ({
  top: {
    marginTop: "10px",
    display: "flex",
    justifyContent: (props) => props.own && "flex-end",
  },
  message: {
    marginLeft: "10px",
    padding: "10px",
    borderRadius: "16px",
    maxWidth: "300px",
    backgroundColor: (props) =>
      props.own ? theme.palette.primary.main : theme.palette.primary.light,
    color: "white",
  },
  bottom: {
    fontSize: "12px",
    display: "flex",
    color: "grey",
    justifyContent: (props) => props.own && "flex-end",
  },
}));

const Message = ({ message }) => {
  const { user } = useAuth();
  let own;
  if (message) {
    own = message.sender === user._id;
  }
  const classes = useStyles({ own });
  return (
    <div>
      <div className={classes.top}>
        <Avatar
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt="sender"
        />
        <Typography className={classes.message}>{message.text}</Typography>
      </div>
      <div className={classes.bottom}>
        <Typography>{new Date(message.createdAt).toDateString()}</Typography>
      </div>
    </div>
  );
};

export default Message;
