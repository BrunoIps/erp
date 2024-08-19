import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/QualEOPassoAPassoParaCriaraLojaOnlineNoSistemaERP1.png";
import Image2 from "../../assets/QualEOPassoAPassoParaCriaraLojaOnlineNoSistemaERP2.png";

import BoxImage from "../../components/Image/BoxImage";

const QualEOPassoAPassoParaCriaraLojaOnlineNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>Como Aprovar Clientes na Loja Online</TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          A <strong>Loja Online</strong> é uma loja virtual totalmente gratuita
          para aqueles que possuem licenças do Sistema ERP. Através dela, você
          consegue criar um site para vendas online da sua empresa, onde pode
          personalizar o layout de toda a página, oferecer formas de entrega e
          condições de pagamentos variadas. Com esta ferramenta você não precisa
          investir nenhum capital para realizar seu site desde o princípio, pois
          pensamos em todos os detalhes para que você tenha uma loja virtual
          completa e que traga bons resultados no faturamento da sua empresa.
        </p>

        <p>
          Mas agora que você já conhece um pouco sobre a Loja Online, vamos te
          mostrar qual é o passo a passo para você criar seu site através deste
          recurso.
        </p>

        <p>
          Tudo se inicia quando você já está logado no ERP. Assim, deve acessar
          o menu lateral <strong>Loja online</strong>, submenu{" "}
          <strong>Configurações</strong>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Na nova tela, você contará com várias configurações a serem
          realizadas. Mas por ter várias etapas, dividiremos esta explicação em
          alguns tópicos. Veja quais são eles:
        </p>

        <p>
          <a href="/loja-online/como-realizar-as-configuracoes-da-loja-online-no-sistema-erp">
            Como realizar as Configurações da Loja Online
          </a>
          <br />
          <br />
          <a href="/loja-online/como-configurar-os-pagamentos-na-loja-online-do-sistema-erp">
            Como configurar os Pagamentos na Loja Online
          </a>
          <br />
          <br />
          <a href="/loja-online/como-configurar-as-entregas-da-loja-online-no-sistema-erp">
            Como configurar as Entregas na Loja Online
          </a>
          <br />
          <br />
          <a href="/loja-online/como-configurar-as-integracoes-na-loja-online-do-sistema-erp">
            Como configurar as Integrações na Loja Online
          </a>
        </p>

        <p>
          Depois de realizar todas estas configurações, você deve{" "}
          <strong>Salvar as Alterações</strong> realizadas e clicar na opção{" "}
          <strong>Exibir Loja</strong>. <strong>Importante!</strong> Os seus
          clientes poderão acessar seu site somente quando esta opção estiver
          habilitada.
        </p>

        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Mas além de configurar estas configurações gerais, também é necessário
          que você informe quais produtos deseja vender no seu site.
          {/*  Para isto, acompanhe o artigo: Como enviar Produtos para a Loja Online.
              aqui tem que fazer pagina 
          */}
        </p>
      </Typography>
    </Container>
  );
};
export default QualEOPassoAPassoParaCriaraLojaOnlineNoSistemaERP;
