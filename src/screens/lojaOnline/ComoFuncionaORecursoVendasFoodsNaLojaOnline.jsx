import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoFuncionaORecursoVendasFoodsNaLojaOnline1.png";
import Image2 from "../../assets/ComoFuncionaORecursoVendasFoodsNaLojaOnline2.png";
import Image3 from "../../assets/ComoFuncionaORecursoVendasFoodsNaLojaOnline3.png";
import Image4 from "../../assets/ComoFuncionaORecursoVendasFoodsNaLojaOnline4.png";
import Image5 from "../../assets/ComoFuncionaORecursoVendasFoodsNaLojaOnline5.png";
import Image6 from "../../assets/ComoFuncionaORecursoVendasFoodsNaLojaOnline6.png";
import Image7 from "../../assets/ComoFuncionaORecursoVendasFoodsNaLojaOnline7.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoFuncionaORecursoVendasFoodsNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como funciona o recurso Vendas Foods na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          A Loja Online é uma loja virtual totalmente gratuita. Através dela,
          você consegue criar um site para vendas online da sua empresa, onde
          será possível utilizar a modalidade de vendas Foods. Antes de começar
          a vender, ressalto que alguns passos devem ser seguidos, então, veja
          como funciona.
        </p>

        <h4>Cadastrar Produtos</h4>
        <p>
          Uma das funções básicas dentro do Foods na Loja Online é o cadastro de
          produtos. É fundamental compreender como funcionam as seções e campos
          deste cadastro, pois é a partir dele que você irá, trabalhar com
          preços, definir comissões dos vendedores, configurar a seção de{" "}
          <b>Venda Foods</b> e informar os dados fiscais para não ter dores de
          cabeça futuras com emissão de notas.
        </p>

        <p>
          Para isso, acompanhe:{" "}
          <a href="/cadastros-basicos/como-cadastrar-produtos-simples-no-sistema-erp">
            Como cadastrar Produtos Simples no Sistema ERP
          </a>{" "}
          e{" "}
          <a href="/cadastros-basicos/como-cadastrar-produtos-alimenticios-foods-no-sistema-erp">
            Como cadastrar Produtos Alimentícios (Foods) no Sistema ERP
          </a>
        </p>

        <h4>Criar a Loja Online</h4>
        <p>
          Com esta ferramenta você não precisa investir nenhum capital para
          realizar seu site desde o princípio, pois pensamos em todos os
          detalhes para que você tenha uma loja virtual completa e que traga
          bons resultados no faturamento da sua empresa. Mas agora que você já
          conhece um pouco sobre a Loja Online, vamos te mostrar qual é o passo
          a passo para você criar seu site através deste recurso.
        </p>
        <p>
          Para isso, acompanhe:{" "}
          <a href="/loja-online/qual-e-o-passo-a-passo-para-criar-a-loja-online-no-sistema-erp">
            Qual é o passo a passo para criar a Loja Online
          </a>
        </p>

        <h4>Enviar Produtos para a Loja Online</h4>
        <p>
          Após configurar a sua Loja Online, chegou a hora de enviar seus
          produtos para lá e começar a realizar muitas vendas. Para isso, é
          necessário que você já tenha seus produtos cadastrados no Sistema ERP.
          Ainda tem dúvidas de como realizar esse envio? Não tem problema!
        </p>
        <p>
          Para isso, acompanhe:{" "}
          <a href="/loja-online/como-enviar-produtos-para-a-loja-online-do-sistema-erp">
            Como enviar Produtos para a Loja Online
          </a>
        </p>
        <h4>Vendas Foods na Loja Online</h4>
        <p>
          Por fim, após finalizar todos os cadastros apontados, chegou o momento
          de verificar como ocorrem as vendas desses alimentos no Loja Online e
          faturar muito!
        </p>
        <p>
          Seu cliente irá acessar a sua Loja Online, e na barra de pesquisas
          buscará pelo produto Foods, no exemplo o produto escolhido foi um
          Hambúrguer.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          A partir disso, o produto aparecerá com o valor original, podendo ser
          alterado pelo cliente de acordo com a adição de novos complementos,
          como por exemplo: Batata frita (sendo elas P, M ou G) ou Maionese
          Extra.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Esses complementos são informados dentro do cadastro do próprio
          produto (o hambúrguer) clicando na aba{" "}
          <b>Foods e Adicionar Grupo de Complementos,</b> podendo também
          adicionar mais complementos pertencentes ao mesmo grupo de
          complementos como o caso da batata frita, que é vendida em três
          tamanhos P, M e G.
        </p>

        <BoxImage src={Image3} />
        <p>
          Após o cadastro e adição dos complementos, será possível duplicar o
          pedido adicionando a quantia que deseja no campo <b>Quant</b>. se for
          necessário, em seguida para finalizar basta clicar no ícone{" "}
          <b>Comprar</b>.
        </p>

        <BoxImage src={Image4} />
        <p>
          Chegou a etapa final, e agora o cliente terá uma visão geral de sua
          compra, para concluir basta prosseguir para que seja possível escolher
          a forma de pagamento da encomenda, para isso será disponibilizado o
          ícone indicativo <b>Escolher forma de pagamento.</b>
        </p>
        <BoxImage src={Image5} />
        <p>
          A partir disso poderá ser decidida a forma de pagamento desejada, as
          mesmas são disponibilizadas após a configuração da sua Loja Online na
          aba de Pagamento. No nosso exemplo temos, Dinheiro, PIX, Cartão de
          crédito e Débito, mas novas possibilidades de pagamento poderão ser
          acrescentadas. Podendo também indicar um código de desconto se o
          cliente possuir.
        </p>
        <BoxImage src={Image6} />
        <p>
          Prontinho, após <b>Finalizar Compra </b>seu cliente receberá uma
          mensagem indicativa que o pedido foi concluído, apresentando também o
          número do pedido para acompanhamento.
        </p>
        <BoxImage src={Image7} />
      </Typography>
    </Container>
  );
};
export default ComoFuncionaORecursoVendasFoodsNaLojaOnline;
