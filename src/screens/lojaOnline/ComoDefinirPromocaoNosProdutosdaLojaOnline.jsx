import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoDefinirPromoNosProdutos.png";
import Image2 from "../../assets/ComoDefinirPromoNosProdutos2.png";
import Image3 from "../../assets/ComoDefinirPromoNosProdutos3.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoDefinirPromocaoNosProdutosdaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como definir Promoção nos Produtos da Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Na Loja Online é possível informar o preço de venda dos produtos
          aplicado a uma promoção, conforme a imagem abaixo. Este produto
          possuía o preço padrão como R$10,00, porém nesse momento está sendo
          vendido por R$8,50. Neste artigo vamos te mostrar como realizar essa
          configuração. Acompanhe!
        </p>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Primeiramente, é necessário que você possua em seu sistema duas
          tabelas de preços diferentes. Uma delas terá o preço padrão do
          produto, e a outra terá o produto promocional do produto. Para saber
          como realizar o cadastro de tabela de preços, basta{" "}
          <a href="/cadastros-basicos/como-cadastrar-tabelas-de-precos-no-sistema-erp">
            clicar aqui.
          </a>
          {/* Precisa criar o link */}
        </p>
        <p>
          Depois disso, para definir a tabela de preços na Loja Online, acesse o
          menu lateral Loja Online, submenu <strong>Configurações.</strong>
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Em seguida, clique na aba <strong>Pagamentos e Preços.</strong>
        </p>

        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          No campo <strong>Tabela de Preço Base</strong> você irá informar a
          tabela de preços padrão da Loja Online. Ou seja, nesta tabela os
          produtos estarão com preços normais, sem estar na promoção. Já no
          campo <strong>Tabela de Preço Promocional</strong>, você irá informar
          a tabela de preços que serão usadas para promoções. Dessa forma, nesta
          tabela você deverá configurar o preço de venda dos produtos com a
          promoção.
        </p>
        <p>
          Se a opção{" "}
          <strong>Tabela de Preço Especial para Usuário Logado</strong> estiver
          habilitada, será possível definir tabelas de preços para seus
          clientes, informando uma tabela de preços dentro do cadastro do
          cliente, na aba <strong>Dados Financeiros/Contas Bancárias.</strong>{" "}
          Dessa forma, a tabela de preço base e a tabela de preço promocional
          não será levada em consideração.{" "}
        </p>
      </Typography>
    </Container>
  );
};
export default ComoDefinirPromocaoNosProdutosdaLojaOnline;
