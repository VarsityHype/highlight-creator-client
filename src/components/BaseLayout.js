import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";
import Grid from '@material-ui/core/Container';

const BaseLayout = props => {
  return (
    <div style={{ height: "100%" }}>
      <AppBar />
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center">
      <Grid item xs={12}>
      {props.children}
      </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default BaseLayout;
