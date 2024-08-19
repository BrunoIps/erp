import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoCancelaVendasRealizadasNaLojaOnline1.png";
import Image2 from "../../assets/ComoCancelaVendasRealizadasNaLojaOnline2.png";
import Image3 from "../../assets/ComoCancelaVendasRealizadasNaLojaOnline3.png";
import Image4 from "../../assets/ComoCancelaVendasRealizadasNaLojaOnline4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoCancelaVendasRealizadasNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como cancelar vendas realizadas na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          As vendas realizadas pela Loja Online, também podem ser canceladas
          através do Sistema ERP, caso o cliente solicite o cancelamento ou haja
          algum problema no processamento do pedido. O Sistema ERP permite que
          os administradores tenham controle sobre todas as operações de venda,
          incluindo a possibilidade de cancelamento, garantindo uma gestão
          eficiente e ágil. Para isso, acesse o menu lateral <b>Loja Online,</b>
          submenu <b>Vendas</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, você deverá selecione o pedido que deseja cancelar, assim o
          sistema apresentará um modal de atalhos. Neste modal, clique em
          <b> Cancelar Pedido.</b>
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Feito isso, o sistema irá apresentar um popup, para a confirmação do
          cancelamento do pedido. Clique em <b>OK</b> para cancelar.
        </p>

        <BoxImage src={Image3} />
        <p>
          Por fim, o sistema apresentará o <b>Status do Pagamento</b> como{" "}
          <b>Cancelado</b>, caso o pedido não esteja faturado, e Devolvido, caso
          o pedido esteja faturado.
        </p>

        <BoxImage src={Image4} />
      </Typography>
    </Container>
  );
};
export default ComoCancelaVendasRealizadasNaLojaOnline;
