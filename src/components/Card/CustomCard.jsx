import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";

const HoverCard = styled(Card)(({ theme }) => ({
  transition: "0.3s",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover,
    boxShadow: `0px 0px 0px 2px ${theme.palette.primary.main}`,
    cursor: "pointer",
    "& .MuiTypography-root": {
      color: theme.palette.primary.main,
    },
  },
  borderRadius: theme.shape.borderRadius,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "transparent",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  minWidth: "250px",
  width: "100%",
}));

const CustomCard = ({ text, route }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = () => {
    // console.log(`${location.pathname}${route}`);
    navigate(`${location.pathname}${route}`);
  };

  return (
    <HoverCard onClick={handleCardClick}>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" component="p">
          {text}
        </Typography>
        <ArrowForwardIosIcon fontSize="small" />
      </CardContent>
    </HoverCard>
  );
};

export default CustomCard;
