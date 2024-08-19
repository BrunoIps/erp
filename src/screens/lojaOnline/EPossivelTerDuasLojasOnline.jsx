import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";

import BoxImage from "../../components/Image/BoxImage";

const EPossivelTerDuasLojasOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>É possível ter duas Lojas Online</TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          O nosso sistema possibilita uma Loja Online por licença. No entanto
          possuímos integrações com diversas lojas virtuais, onde você pode
          cadastrar quantas integrações achar necessário, sem limitações por
          licença!
        </p>
        <p>
          Para cada integração, criamos um artigo para facilitar e sanar toda e
          qualquer dúvida que possa surgir no momento da integração.
        </p>
      </Typography>
    </Container>
  );
};
export default EPossivelTerDuasLojasOnline;
