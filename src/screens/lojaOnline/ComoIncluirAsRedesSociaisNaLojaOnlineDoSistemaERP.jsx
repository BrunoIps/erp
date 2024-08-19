import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoIncluirAsRedesSociaisNaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoIncluirAsRedesSociaisNaLojaOnlineDoSistemaERP2.png";
import Image3 from "../../assets/ComoIncluirAsRedesSociaisNaLojaOnlineDoSistemaERP3.png";
import Image4 from "../../assets/ComoIncluirAsRedesSociaisNaLojaOnlineDoSistemaERP4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoIncluirAsRedesSociaisNaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como incluir as Redes Sociais na Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Se você deseja informar as redes sociais da sua loja em seu site,
          basta acessar o menu lateral <b>Loja Online</b>, submenu{" "}
          <b>Configurações</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Após isto, você deverá acessar a aba <b>Configurações</b>
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, deslize a tela para baixo na seção <b>Redes Sociais.</b>
        </p>

        <BoxImage src={Image3} />
        <p>
          Por fim, basta clicar no campo <b>Rede Social,</b> assim o sistema lhe
          apresentará uma listagem com as redes sociais disponíveis. Basta você
          selecionar a que deseja e o sistema apresentará o ícone. Em seguida,
          informe o link da sua rede social e clique no ícone de mais para
          adicioná-lo.
        </p>

        <BoxImage src={Image4} />
        <p>
          Agora, basta salvar a configuração e a rede social aparecerá no seu
          site.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoIncluirAsRedesSociaisNaLojaOnlineDoSistemaERP;
