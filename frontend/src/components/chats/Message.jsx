import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const Message = ({ own }) => {
  const classes = useStyles({ own });
  return (
    <div>
      <div className={classes.top}>
        <Avatar
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt="sender"
        />
        <Typography className={classes.message}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          itaque in laboriosam assumenda delectus, ipsam quasi, dignissimos
          quaerat velit pariatur adipisci quidem sunt, quibusdam perferendis
          molestias tempore ducimus possimus officia. Ex deserunt molestiae
          totam iure quo, fugiat ducimus atque quas earum minus autem. Magnam
          laudantium deserunt autem optio iste nisi!
        </Typography>
      </div>
      <div className={classes.bottom}>
        <Typography>1 hour ago</Typography>
      </div>
    </div>
  );
};

export default Message;
