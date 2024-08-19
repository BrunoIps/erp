import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const FooterNavigation = ({ prev, next }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: 4, display: "flex", alignItems: "stretch" }}
    >
      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        {prev ? (
          <Card
            component={Link}
            to={prev.route}
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              boxShadow: 3,
              p: 2,
              flexGrow: 1,
            }}
          >
            <ArrowBackIosIcon sx={{ mr: 2 }} />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="body2" color="textSecondary">
                Previous
              </Typography>
              <Typography variant="body1" color="primary">
                {prev.text}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Box sx={{ height: "100%", flexGrow: 1 }} />
        )}
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        {next ? (
          <Card
            component={Link}
            to={next.route}
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              boxShadow: 3,
              p: 2,
              flexGrow: 1,
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography variant="body2" color="textSecondary">
                Next
              </Typography>
              <Typography variant="body1" color="primary">
                {next.text}
              </Typography>
            </CardContent>
            <ArrowForwardIosIcon sx={{ ml: 2 }} />
          </Card>
        ) : (
          <Box sx={{ height: "100%", flexGrow: 1 }} />
        )}
      </Grid>
    </Grid>
  );
};

export default FooterNavigation;
