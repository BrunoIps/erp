import React from "react";
import Grid from "@mui/material/Grid";
import { cardsLojaOnline } from "../../mocks/loja-online";
import CustomCard from "../../components/Card/CustomCard";
import { generateRoute } from "../../utils/geradorDeRotas";

const LojaOnlineIndex = () => {
  return (
    <>
      <h1>Loja Online</h1>
      <Grid container spacing={2}>
        {cardsLojaOnline.map((card, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
            <CustomCard text={card.text} route={generateRoute(card.text)} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LojaOnlineIndex;
