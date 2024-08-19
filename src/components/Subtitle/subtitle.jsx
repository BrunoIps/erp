import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  fontSize: "1.4rem",
}));

const SubTitle = ({ children }) => {
  return <Title component="h1">{children}</Title>;
};

export default SubTitle;
