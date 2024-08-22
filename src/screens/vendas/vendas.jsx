import React from "react";
import Grid from "@mui/material/Grid";
import CustomCard from "../../components/Card/CustomCard";
import { generateRoute } from "../../utils/geradorDeRotas";
import { vendas } from "../../mocks/vendas";

const Vendas = () => {
  return (
    <>
      <h1>Vendas</h1>
      <Grid container spacing={2}>
        {vendas.map((card, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
            <CustomCard text={card.text} route={generateRoute(card.text)} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Vendas;
