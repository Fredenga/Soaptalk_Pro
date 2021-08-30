import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { alpha } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: alpha(theme.palette.common.white, 0.9),
  },
  media: {
    height: 180,
  },
  img: {
    height: "100%",
    width: "100%",
  },
}));

export default function GroupTop() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <img
            className={classes.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wF4I6Ne4E5BAtVqv59L4j0VUxJTPTBVc4A&usqp=CAU"
            alt=""
          />
          <Typography gutterBottom variant="h5" component="h2">
            Joker Music Group
          </Typography>
          <Typography variant="body2" component="p">
            250 members
          </Typography>
          <AvatarGroup max={4}>
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/8836485/pexels-photo-8836485.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
            <Avatar
              alt="Trevor Henderson"
              src="https://images.pexels.com/photos/8721987/pexels-photo-8721987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/8723497/pexels-photo-8723497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Avatar
              alt="Travis Howard"
              src="https://images.pexels.com/photos/7038432/pexels-photo-7038432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://images.pexels.com/photos/7530969/pexels-photo-7530969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://images.pexels.com/photos/6774990/pexels-photo-6774990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://images.pexels.com/photos/7825917/pexels-photo-7825917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </AvatarGroup>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
