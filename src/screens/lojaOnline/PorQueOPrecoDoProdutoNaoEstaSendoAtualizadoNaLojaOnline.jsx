import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/PorQueOPrecoDoProdutoNaoEstaSendoAtualizadoNaLojaOnline1.png";
import Image2 from "../../assets/PorQueOPrecoDoProdutoNaoEstaSendoAtualizadoNaLojaOnline2.png";

import BoxImage from "../../components/Image/BoxImage";

const PorQueOPrecoDoProdutoNaoEstaSendoAtualizadoNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Por que o preço do Produto não está sendo atualizado na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Ao realizar a troca do preço de venda do produto, automaticamente você
          deseja que ele seja alterado em sua Loja Online. Mas o que fazer se o
          valor não esta sendo alterado?
        </p>
        <p>
          O preço de venda do produto só não será alterado caso haja uma tabela
          de preço configurada para a Loja Online. Para verificar isso, você
          precisará acessar o menu lateral <b>Loja Online,</b> submenu{" "}
          <b>Configurações</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Após isto, na aba Pagamento você deverá verificar qual tabela de preço
          esta vinculada a sua Loja Online.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>Após isto, você terá duas opções:</p>

        <ol>
          <li>
            Você poderá retirar a tabela de preço, assim sempre que alterar o
            preço de venda no cadastro do produto, ele será alterado
            automaticamente na Loja Online;
          </li>
          <li>
            Você precisará alterar o preço de venda dos produtos diretamente na
            tabela de preço e após salvar, o sistema irá alterar o preço do
            produto na Loja Online.
          </li>
        </ol>
      </Typography>
    </Container>
  );
};
export default PorQueOPrecoDoProdutoNaoEstaSendoAtualizadoNaLojaOnline;
