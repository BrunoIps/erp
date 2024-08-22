import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoAprovarEFaturarPedidosEOrcamentosNoSistemaERP1.png";
import Image2 from "../../assets/ComoAprovarEFaturarPedidosEOrcamentosNoSistemaERP2.png";
import Image3 from "../../assets/ComoAprovarEFaturarPedidosEOrcamentosNoSistemaERP3.png";
import Image4 from "../../assets/ComoAprovarEFaturarPedidosEOrcamentosNoSistemaERP4.png";
import Image5 from "../../assets/ComoAprovarEFaturarPedidosEOrcamentosNoSistemaERP5.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoAprovarEFaturarPedidosEOrcamentosNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como Aprovar e Faturar Pedidos e Orçamentos no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        Uma vez que você já tenha gerado pedidos e/ou orçamentos, será
        necessário aprová-los para gerar os lançamentos financeiros e emitir
        suas respectivas notas fiscais.
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Para realizar esse processo, acesse o menu lateral Vendas, submenu
          <b> Pedidos</b> e <b>Orçamentos</b>.
        </p>
        <p>
          <BoxImage src={Image1} />
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Nesse momento será exibida uma listagem com todos os seus pedidos e
          orçamentos.
        </p>
        <p>
          Vamos começar pelo processo de <b>Aprovação de Orçamentos</b>. Estando
          na listagem, clique em <b>editar</b> no ícone de lápis. Após isto,
          dentro do orçamento, ao clicar em <b>Mais Ações</b> aparecerá uma
          série de opções, clique em <b>Aprovar Orçamento.</b>
        </p>
        <BoxImage src={Image2} />

        <p>
          Outro caminho possível é, estando na listagem de
          <b> Pedidos e Orçamentos,</b>
          selecione o Orçamento e na barra de atalhos clique em <b>Aprovar</b>.
        </p>
        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Nessa etapa, o orçamento aprovado se torna um <b>Pedido</b>.
        </p>
        <p>
          Caso deseje realizar qualquer edição no Pedido, basta clicar no ícone
          de edição ou dar duplo clique sobre o pedido que deseja modificar.
          Agora, o próximo passo será <b>faturar o pedido</b>, para poder emitir
          a NF-e.
        </p>
        <p>
          Edite o pedido desejado e clique em Mais ações e escolha a opção
          <b> Aprovar Pedido.</b>
        </p>
        <BoxImage src={Image4} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Outro caminho possível é, estando na listagem de Pedidos e Orçamentos,
          selecione o Pedido e na barra de atalhos clique em <b>Aprovar</b>.
        </p>
        <p>
          <BoxImage src={Image5} />
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Ao clicar em <b>Aprovar/Aprovar Pedido,</b> você será direcionado para
          a tela de <b>Cadastro de Lançamentos.</b> O seu lançamento já virá com
          todas as informações preenchidas no seu pedido, basta você verificar e
          realizar a alteração necessária (se houver) e você já poderá clicar em
          <b> Salvar</b>. Com isso seu pedido será faturado, ou seja, os
          produtos sairão do estoque e o valor a receber, será lançado no seu
          fluxo de caixa (como um valor já quitado ou a receber futuramente).
        </p>
        <p>
          Após o seu pedido estar com o status de Pedido Faturado, você poderá
          emitir sua NF-e. Siga o artigo:{" "}
          <a href="/vendas/como-emitir-nf-e-atraves-de-pedidos-no-sistema-erp">
            Como emitir nota fiscal (NF-e) através de um pedido no Sistema ERP
          </a>{" "}
          e saiba mais sobre o assunto.{" "}
        </p>
      </Typography>
    </Container>
  );
};
export default ComoAprovarEFaturarPedidosEOrcamentosNoSistemaERP;
