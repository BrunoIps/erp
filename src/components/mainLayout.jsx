import React, { useEffect, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import FooterNavigation from "./Footer/footer";
import NestedList, { topics } from "./NestedList/list";
import { generateRoute } from "../utils/geradorDeRotas";
import { useLocation } from "react-router-dom";

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

const Header = ({ handleDrawerToggle }) => (
  <AppBar position="fixed" color="default">
    <Toolbar sx={{ justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          paddingRight: { xs: "0px", md: "245px", lg: "245px" },
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { lg: "none" } }}
        >
          <MenuIcon />
        </IconButton>
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [children]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <NestedList maxHeight={contentHeight} />
    </div>
  );

  const getPrevAndNextRoutes = () => {
    let allRoutes = [];

    topics.forEach((topic) => {
      allRoutes.push({ route: topic.route, text: topic.text });
      allRoutes = allRoutes.concat(
        topic.subItems.map((subItem) => ({
          route: `${topic.route}${generateRoute(subItem.text)}`,
          text: subItem.text,
        }))
      );
    });

    const currentIndex = allRoutes.findIndex(
      (item) => item.route === location.pathname
    );

    const prev = currentIndex > 0 ? allRoutes[currentIndex - 1] : null;
    const next =
      currentIndex < allRoutes.length - 1 ? allRoutes[currentIndex + 1] : null;

    return { prev, next };
  };

  const { prev, next } = getPrevAndNextRoutes();

  return (
    <div>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "64px" }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            padding: 2,
            paddingRight: { xs: "0px", md: "320px", lg: "320px" },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3}>
              <Box sx={{ padding: 0, display: { xs: "none", lg: "block" } }}>
                <NestedList maxHeight={contentHeight} />
              </Box>
            </Grid>

            <Grid item xs={12} md={9} lg={9} ref={contentRef}>
              <Box sx={{ padding: 2, marginLeft: 10 }}>{children}</Box>
              <Box sx={{ padding: 2, marginLeft: 10 }}>
                <FooterNavigation prev={prev} next={next} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
};

export default MainLayout;
