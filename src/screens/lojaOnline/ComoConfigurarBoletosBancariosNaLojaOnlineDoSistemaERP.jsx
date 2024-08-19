import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarBoletosBancariosNaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarBoletosBancariosNaLojaOnlineDoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarBoletosBancariosNaLojaOnlineDoSistemaERP3.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarBoletosBancariosNaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar Boletos Bancários na Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Para realizar mais vendas, você poderá disponibilizar a forma de
          pagamento Boleto Bancário na sua Loja Online.
        </p>
        {/* aqui precisa fazer pagina */}

        {/* <p>
          Porém, antes de começar, você já precisa ter uma conta bancária
          habilitada para a emissão de boleto no Sistema ERP. Veja o artigo:
          Como cadastrar uma Conta Bancária para emitir boletos no Sistema ERP e
          saiba mais sobre o assunto.
        </p> */}
        <p>
          Com a sua conta habilitada, você precisará acessar o menu lateral
          <b> Loja Online</b>, submenu <b>Configurações</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, na aba de <b>Configurações</b>, em{" "}
          <b>Plataformas para cobrança automática</b>, selecione{" "}
          <b>Boleto Bancário</b>. Neste momento, será necessário preencher os
          seguintes campos:
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <b>Conta Bancária:</b> informe a conta bancária habilitada que emitirá
          os boletos;
          <br />
          <b>Dias para vencimento:</b> informe quantos dias após a emissão será
          o vencimento do boleto. <br />
          <br />
          Um pouco mais abaixo, na seção{" "}
          <b>Defina desconto para pagamentos à vista,</b> você poderá informar
          um desconto para encorajar seus cliente a realizar compras utilizando
          esta forma de pagamento.
        </p>

        <BoxImage src={Image3} />
        <p>
          Prontinho, agora você só precisa clicar em <b>Salvar</b>. Feito isso,
          a forma de pagamento Boleto Bancário já estará disponível em sua Loja
          Online. Assim, quando o seu cliente finalizar a venda e selecionar a
          forma de pagamento Boleto Bancário, será gerado automaticamente um
          boleto, onde ele poderá realizar o pagamento.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarBoletosBancariosNaLojaOnlineDoSistemaERP;
