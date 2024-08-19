import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarasIntegracoeesNaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarasIntegracoeesNaLojaOnlineDoSistemaERP2.png";

import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarasIntegracoeesNaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar as Integrações na Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Para tornar sua Loja Online ainda mais completa, um dos recursos
          disponíveis é utilizar integração com plataformas externas. Depois de
          ter personalizado a parte Visual da sua Loja Online, bem como as
          Configurações, meios de Pagamentos aceitos e formas de Entregas, você
          realizar integrações com outras plataformas. São elas: Ebit, Pixel
          Facebook e DS Lite. Siga a leitura deste artigo e saiba detalhes sobre
          cada uma!
        </p>
        <p>
          Primeiramente, acesse o menu lateral Loja Online, submenu
          <b>Configurações</b> e selecione a aba <b>Integrações</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>Neste momento, você poderá integrar com as seguintes plataformas.</p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <strong>Ebit:</strong> a integração com a Ebit Nielsen permite que o
          site da sua loja seja melhor visto pelos usuários. Isto se deve ao
          fato de que essa plataforma registra a opinião de clientes sobre as
          reais experiências que tiveram ao comprar na sua loja virtual. Se você
          possui acesso à essa ferramenta e deseja integrar à Loja Online, siga
          este artigo:{" "}
          <a href="/loja-online/como-configurar-o-ebit-na-loja-online-do-sistema-erp">
            Como configurar o Ebit na Loja Online
          </a>
          .
        </p>

        <p>
          <strong>Facebook Pixel:</strong> o Pixel do Facebook tem a finalidade
          de rastrear várias informações em relação as ações que os usuários
          realizam no seu site. Você poderá verificar informações sobre o
          interesse em determinado produto, quais produtos foram adicionados no
          carrinho de compras, as procuras realizadas no seu site e muitos
          outros dados. Além de claro, integrar sua loja online no shopping das
          redes sociais. Saiba tudo sobre esta configuração através do artigo:
          Como configurar o Pixel do Facebook na Loja Online.
        </p>

        <p>
          <strong>DS Lite:</strong> esta integração permite que você realize
          vendas na Loja Online através de dropshipping. Isso nada mais é do que
          sua empresa ser a responsável pela venda, mas não pela entrega do
          produto. O envio das mercadorias fica por conta do fornecedor. Então,
          com a integração via DS Lite, assim que uma venda for realizada na
          Loja Online, você poderá encaminhar o detalhamento para o fornecedor
          para que ocorra esse despacho. Quer saber mais sobre este assunto?
          Para isso, siga o artigo: Como configurar a DS Lite na Loja Online.
        </p>

        <p>
          Ter um chat online, selo de qualidade e segurança, painel para
          analisar dados do seu site e vincular às redes sociais, além de vender
          produtos via dropshipping, com certeza são formas de deixar sua loja
          virtual ainda mais completa. Portanto, agora que você já conhece as
          plataformas disponíveis para integração junto à Loja Online, é o
          momento de realizar as devidas configurações.
        </p>

        <p>
          Depois de seguir todos os passos, você poderá clicar em{" "}
          <strong>Exibir Loja</strong> para começar a vender!
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarasIntegracoeesNaLojaOnlineDoSistemaERP;
