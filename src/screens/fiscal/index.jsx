import React from "react";
import Grid from "@mui/material/Grid";
import CustomCard from "../../components/Card/CustomCard";
import { generateRoute } from "../../utils/geradorDeRotas";
import { fiscal } from "../../mocks/fiscal";

const FiscalIndex = () => {
  return (
    <>
      <h1>Fiscal</h1>
      <Grid container spacing={2}>
        {fiscal.map((card, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
            <CustomCard text={card.text} route={generateRoute(card.text)} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FiscalIndex;
