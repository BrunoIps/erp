import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoAprovarClientesNaLojaOnline1.png";
import Image2 from "../../assets/ComoAprovarClientesNaLojaOnline2.png";
import Image3 from "../../assets/ComoAprovarClientesNaLojaOnline3.png";
import Image4 from "../../assets/ComoAprovarClientesNaLojaOnline4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoAprovarClientesNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>Como Aprovar Clientes na Loja Online</TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          A aprovação de clientes na Loja Online permitir que somente clientes
          com o cadastro aprovado possam realizar compras na sua loja. Dessa
          forma, você terá que aprovar quem poderá realizar esta ação.
        </p>
        <p>
          Primeiramente, você precisa possuir a configuração de{" "}
          <b>Aprovar Clientes</b>
          ativa nas configurações da sua Loja Online. Para isso, acesse o menu
          lateral <b>Loja Online,</b> submenu <b>Configurações</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, você deverá acessar a aba <b>Configurações</b> e marcar a opção
          <b> Aprovar cadastros de clientes.</b>
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Feito isso, clique em <b>Salvar</b>. Assim, todos os clientes que
          realizarem o cadastro de uma conta em sua loja, precisarão ser
          aprovados para poder efetuar compras.
        </p>

        <p>
          Feito isso, para aprovar o cadastro destes clientes, você deverá
          acessar o menu lateral Loja Online, submenu{" "}
          <b>Aprovação de Clientes.</b>
        </p>

        <BoxImage src={Image3} />
        <p>
          Na nova tela, o sistema apresentará uma listagem dos cadastros
          esperando aprovação. Basta selecionar e no modal que se abrirá, clicar
          em <b>Aprovar Selecionados.</b> Caso deseje reprovar o cliente, basta
          selecioná-lo e no modal, clicar em <b>Reprovar Selecionados.</b>
        </p>

        <BoxImage src={Image4} />
        <p>
          Depois desta liberação, o cliente estará apto a finalizar a compra na
          sua loja virtual e efetuar a negociação.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoAprovarClientesNaLojaOnline;
