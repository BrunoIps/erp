import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ListItemButton, Divider, IconButton } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { cardsLojaOnline } from "../../mocks/loja-online";
import { generateRoute } from "../../utils/geradorDeRotas";
import { cadastroBasico } from "../../mocks/cadastrosBasicos";
import { vendas } from "../../mocks/vendas";

const StyledListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
  backgroundColor: selected ? theme?.palette?.primary?.light : "inherit",
  "&:hover": {
    backgroundColor: selected
      ? theme?.palette?.primary?.light
      : theme?.palette?.action?.hover,
    "& .MuiListItemText-primary": {
      color: theme?.palette?.primary?.main,
    },
  },
  "& .MuiListItemText-primary": {
    color: selected ? theme?.palette?.primary?.main : "inherit",
  },
}));

export const topics = [
  {
    text: "Cadastros Básicos",
    route: "/cadastros-basicos",
    subItems: cadastroBasico,
  },
  { text: "Loja Online", route: "/loja-online", subItems: cardsLojaOnline },
  { text: "Vendas", route: "/vendas", subItems: vendas },
];

const NestedList = ({ maxHeight }) => {
  const [open, setOpen] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme(); // UseTheme para acessar o tema

  useEffect(() => {
    const savedOpen = JSON.parse(localStorage.getItem("openTopics")) || [];
    setOpen(savedOpen);
  }, []);

  console.log(cardsLojaOnline.filter((card) => !card.element));

  useEffect(() => {
    localStorage.setItem("openTopics", JSON.stringify(open));
  }, [open]);

  const handleClick = (index) => {
    setOpen((prevOpen) =>
      prevOpen.includes(index)
        ? prevOpen.filter((i) => i !== index)
        : [...prevOpen, index]
    );
  };

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <List
        sx={{
          width: "110%",
          bgcolor: "background.paper",
          maxHeight: maxHeight,
          overflowY: "auto",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {topics.map((topic, index) => {
          const isActive = location.pathname.startsWith(topic.route);
          const isOpen = open.includes(index);

          return (
            <React.Fragment key={index}>
              <StyledListItemButton selected={isActive}>
                <ListItemText
                  primary={topic.text}
                  primaryTypographyProps={{
                    color: isActive ? "primary" : "inherit",
                    fontWeight: isActive ? "bold" : "regular",
                    fontSize: "0.875rem",
                  }}
                  onClick={() => handleCardClick(topic.route)}
                />
                <IconButton onClick={() => handleClick(index)} size="small">
                  {isOpen ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </StyledListItemButton>
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {topic.subItems.map((subItem, subIndex) => {
                    const subItemRoute = `${topic.route}${generateRoute(
                      subItem.text
                    )}`;
                    const isSubItemActive = location.pathname === subItemRoute;

                    return (
                      <React.Fragment key={subIndex}>
                        <ListItemButton
                          component={Link}
                          to={subItemRoute}
                          sx={{
                            pl: 4,
                          }}
                          onClick={() => handleCardClick(subItemRoute)}
                        >
                          <ListItemText
                            primary={subItem.text}
                            primaryTypographyProps={{
                              fontSize: "0.875rem",
                              color: isSubItemActive
                                ? theme?.palette?.primary?.main
                                : "text.secondary",
                            }}
                          />
                        </ListItemButton>
                        {subIndex < topic.subItems.length - 1 && <Divider />}
                      </React.Fragment>
                    );
                  })}
                </List>
              </Collapse>
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};

export default NestedList;
