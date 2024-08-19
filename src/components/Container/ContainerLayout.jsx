import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../Header/Header";
import Container from "@mui/material/Container";
import NestedList from "../NestedList/list";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ marginTop: "64px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <NestedList />
          </Grid>
          <Grid item xs={12} md={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Layout;
