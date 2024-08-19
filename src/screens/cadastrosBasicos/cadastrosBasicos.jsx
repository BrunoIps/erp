import React from "react";
import Grid from "@mui/material/Grid";
import CustomCard from "../../components/Card/CustomCard";
import { generateRoute } from "../../utils/geradorDeRotas";
import { cadastroBasico } from "../../mocks/cadastrosBasicos";

const CadastroBasicoIndex = () => {
  return (
    <>
      <h1>Cadastros Básicos</h1>
      <Grid container spacing={2}>
        {cadastroBasico.map((card, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
            <CustomCard text={card.text} route={generateRoute(card.text)} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CadastroBasicoIndex;
