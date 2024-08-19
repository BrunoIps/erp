import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ConfigurandoSuaLojaDeliveryDentroDaLojaOnline1.png";
import Image2 from "../../assets/ConfigurandoSuaLojaDeliveryDentroDaLojaOnline2.png";
import Image3 from "../../assets/ConfigurandoSuaLojaDeliveryDentroDaLojaOnline3.png";
import BoxImage from "../../components/Image/BoxImage";

const ConfigurandoSuaLojaDeliveryDentroDaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Configurando sua loja Delivery dentro da Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Agora no Sistema ERP é possível personalizar sua loja para finalidade
          de delivery, auxiliando asssim nas suas vendas.
        </p>
        <p>
          Acesse Menu Lateral Loja Online e em seguida no Submenu{" "}
          <b>Configurações</b>
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Então em Visual selecione a opção de <b>Delivery</b>
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Ao lado é possível estar visualizando como será a visualização de sua
          Loja Online com a opção de delivery. Além disso, você também pode
          estar personalizando o modelo, clicando em Personalize o modelo. Para
          estar fazendo os ajustes que são disponibilizados a qual desejas
        </p>

        <BoxImage src={Image3} />
        <p>
          Feita as configurações. Clique em salvar alterações. E em seguida,
          visualize sua loja
        </p>
      </Typography>
    </Container>
  );
};
export default ConfigurandoSuaLojaDeliveryDentroDaLojaOnline;
