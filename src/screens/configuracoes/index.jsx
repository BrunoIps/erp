import React from "react";
import Grid from "@mui/material/Grid";
import CustomCard from "../../components/Card/CustomCard";
import { generateRoute } from "../../utils/geradorDeRotas";
import { configuracoes } from "../../mocks/configuracoes";

const ConfiguracoesIndex = () => {
  return (
    <>
      <h1>Configurações</h1>
      <Grid container spacing={2}>
        {configuracoes.map((card, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
            <CustomCard text={card.text} route={generateRoute(card.text)} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ConfiguracoesIndex;
