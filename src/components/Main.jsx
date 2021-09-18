import "../styles/Main/Main.css";
import React from "react";
import Grid from "@mui/material/Grid";
import SideBar from "./SideBar";
import Container from "@mui/material/Container";

function Main() {
  return (
    <div className="main-section">
      <Container maxWidth="xl">
        <Grid className="main-section__grid" container spacing={3}>
          <Grid item xs={2}>
            <SideBar />
          </Grid>
          <Grid item xs={7}></Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
