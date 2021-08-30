import { Grid } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Grid container>
        <Grid item md={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item md={8} xs={10}>
          <Feed />
        </Grid>
        <Grid item md={2} xs={false}>
          <Rightbar />
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;
