import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <IconButton edge="start" color="inherit" aria-label="logo">
            <SchoolIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Central de Ajuda Aprenda ERP
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
