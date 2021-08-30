import {
  AppBar,
  Avatar,
  alpha,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Cancel,
  Chat,
  Language,
  Notifications,
  Search,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth/AuthContext";

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "fixed",
    top: "0",
  },
  tool: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "25px",
  },
  right: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  icon: {
    marginRight: "15px",
    cursor: "pointer",
  },
  input: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: alpha(theme.palette.common.white, 0.7),
    width: "45%",
    borderRadius: "16px",
    paddingInline: "10px",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "75%",
    },
  },
  type: {
    width: "95%",
  },
  search: {
    color: "gray",
  },
  cancel: {
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  alternative: {
    marginRight: "8px",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  const name = user.username.split(" ")[0];

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.tool}>
        <Link className="link" to="/">
          <Typography>Soaptalk</Typography>
        </Link>

        <div className={classes.input}>
          <Search className={classes.search} />
          <InputBase className={classes.type} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.right}>
          <Search
            className={classes.alternative}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.icon}>
            <Notifications />
          </Badge>
          <Link className="link" to="/chats">
            <Badge badgeContent={4} color="secondary" className={classes.icon}>
              <Chat />
            </Badge>
          </Link>
          <Language className={classes.icon} />

          <Avatar
            alt={user.username}
            //src="https://images.unsplash.com/photo-1523264766116-1e09b3145b84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            src={user.img}
          />
          <Typography style={{ marginLeft: "10px" }}>{name}</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
