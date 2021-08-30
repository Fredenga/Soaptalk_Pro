import { Grid } from "@material-ui/core";
import Group from "../components/groups/Group";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import StatusBar from "../components/groups/StatusBar";

export default function Groups() {
  return (
    <main>
      <Navbar />
      <Grid container>
        <Grid item md={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item md={8} xs={10}>
          <Group />
        </Grid>
        <Grid item md={2} xs="false">
          <StatusBar />
        </Grid>
      </Grid>
    </main>
  );
}
