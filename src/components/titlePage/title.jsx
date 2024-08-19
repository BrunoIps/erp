import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
}));

const TitleComponent = ({ children }) => {
  return (
    <Title variant="h4" component="h1">
      {children}
    </Title>
  );
};

export default TitleComponent;
