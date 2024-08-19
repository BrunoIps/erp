import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarACieloNaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarACieloNaLojaOnlineDoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarACieloNaLojaOnlineDoSistemaERP3.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarACieloNaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar a Cielo na Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Com a configuração de pagamento via Cielo em sua loja online, seus
          clientes tem mais uma possibilidade de pagamento, facilitando e
          agilizando suas compras de forma segura e eficiente. Para configurar
          sua integração Cielo com a Loja Online, siga estes passos:
        </p>
        <p>Solicite o produto "API E-commerce" na Cielo.</p>
        <p>
          Ao finalizar o processo com a Cielo, você receberá por e-mail o
          MerchantId e o MerchantKey.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Preencha estas informações nas configurações da sua Loja Online,
          acesse menu Loja Online, Submenu Configurações.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Na Aba de <b>Configurações</b> na Seção Pagamentos e Preços clique na
          opção
          <b> Cielo</b> e preencha com os dados. Feito isso basta clicar em
          Salvar.
        </p>

        <BoxImage src={Image3} />
        <p>
          Pronto, simples e rápido! A partir de agora, aparecerá a opção "Cartão
          de Crédito" que seu cliente poderá usar para efetuar o pagamento
          online!
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarACieloNaLojaOnlineDoSistemaERP;
