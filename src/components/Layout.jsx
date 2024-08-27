import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import NestedList from "./NestedList/list";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => (
  <AppBar position="fixed" color="default">
    <Toolbar sx={{ justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          paddingRight: "245px",
        }}
      >
        <IconButton edge="start" color="inherit" aria-label="logo">
          <SchoolIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Central de Ajuda Bhsys
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
    </Toolbar>
  </AppBar>
);

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "64px" }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            padding: 2,
            paddingRight: "320px",
          }}
        >
          <Grid container spacing={2}>
            {/* Menu à esquerda */}
            <Grid item xs={12} md={3}>
              <Box sx={{ padding: 2 }}>
                <NestedList />
              </Box>
            </Grid>

            {/* Conteúdo à direita */}
            <Grid item xs={12} md={9}>
              <Box sx={{ padding: 2 }}>{children}</Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default MainLayout;
