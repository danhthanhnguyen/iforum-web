import "../styles/Main/Main.css";
import React from "react";
import Grid from "@mui/material/Grid";
import SideBar from "./SideBar";
import ListQuestions from "./ListQuestions";
import StatusBar from "./StatusBar";
import Container from "@mui/material/Container";

function Main() {
  return (
    <div className="main-section">
      <Container maxWidth="lg">
        <Grid className="main-section__grid" container spacing={3}>
          <Grid item xs={2}>
            <SideBar />
          </Grid>
          <Grid item xs={7}>
            <ListQuestions />
          </Grid>
          <Grid item xs={3}>
            <StatusBar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
