import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoBloquearUsuariosDaLojaOnline1.png";
import Image2 from "../../assets/ComoBloquearUsuariosDaLojaOnline2.png";
import Image3 from "../../assets/ComoBloquearUsuariosDaLojaOnline3.png";
import Image4 from "../../assets/ComoBloquearUsuariosDaLojaOnline4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoBloquearUsuariosDaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>Como Bloquear Usuários da Loja Online</TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          O bloqueio de usuários para compras na sua Loja Online é importante
          para impedir que compras por Spam sejam frequentes, e também, para
          impedir a venda para clientes que já causaram um certo transtorno a
          você. Os usuários bloqueados ainda poderão acessar sua Loja Online,
          porém não poderão criar novas contas nem fazer pedidos.
        </p>
        <p>
          Para utilizar esta função, você deve acessar o menu lateral{" "}
          <b>Loja Online, submenu Usuários Bloqueados.</b>
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          A partir desse momento, serão apresentados todos os clientes que já se
          encontram bloqueados na sua Loja Online.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Logo, para bloquear um cliente, deve ser feita a busca no campo
          Cliente informando o nome completo ou CPF/CNPJ do mesmo.
        </p>

        <BoxImage src={Image3} />

        <p>
          Vale ressaltar que para um cliente ser disponibilizado a bloqueio, o
          mesmo deve ter um cadastro de pessoa no sistema e estar rotulado como{" "}
          <strong>Cliente</strong>, no cadastro de <strong>Pessoas</strong>.
          <br />
          Após localizar o cliente desejado, clique no campo{" "}
          <strong>Bloquear</strong>, ao lado. Assim, o sistema apresentará a
          mensagem de confirmação de que este cliente foi bloqueado com sucesso.
        </p>

        <p>
          Além disso, caso você deseje que este cliente volte a ter a
          possibilidade de comprar em seu site, basta realizar a exclusão deste
          registro para desbloqueá-lo. Portanto, estando na listagem de{" "}
          <strong>Usuários Bloqueados</strong>, selecione o cliente desejado e
          clique na opção <strong>Excluir Selecionados</strong>.
        </p>

        <BoxImage src={Image4} />
      </Typography>
    </Container>
  );
};
export default ComoBloquearUsuariosDaLojaOnline;
