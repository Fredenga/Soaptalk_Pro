import { Grid } from "@material-ui/core";
import FriendList from "../components/friends/friendlist";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";

const Friends = () => {
  return (
    <main>
      <Navbar />
      <Grid container>
        <Grid item md={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item md={10} xs={10}>
          <FriendList />
        </Grid>
      </Grid>
    </main>
  );
};

export default Friends;
