import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarODominioDaGoDaddyNaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarODominioDaGoDaddyNaLojaOnlineDoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarODominioDaGoDaddyNaLojaOnlineDoSistemaERP3.png";
import Image4 from "../../assets/ComoConfigurarODominioDaGoDaddyNaLojaOnlineDoSistemaERP4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarODominioDaGoDaddyNaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar o Domínio da GoDaddy na Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Neste artigo, você aprenderá em 3 passos, como realizar o apontamento
          do seu domínio criado no GoDaddy para a sua Loja Online. Acompanhe!
        </p>
        <p>
          1- Acesse sua conta{" "}
          <a href="https://sso.godaddy.com/?realm=idp&app=dashboard.api&path=%2fvh-login-redirect&marketid=pt-PT">
            GoDaddy
          </a>{" "}
          e clique em Meus Produtos, na seção Domínios, selecione o domínio
          desejado e clique em DNS.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          2- Agora, na nova tela, clique em <b>Adicionar.</b>
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          3- Ao acessar esta tela, você precisará realizar duas configurações.
        </p>

        <BoxImage src={Image3} />
        <p>
          <strong>Configurar o tipo CNAME</strong>
        </p>
        <p>
          1. Selecione <strong>CNAME</strong> no campo <strong>Type</strong>.
        </p>
        <p>
          2. Adicione o nome do subdomínio no campo destacado em vermelho. Por
          exemplo: <strong>www.loja</strong>.
        </p>
        <p>
          3. No campo <strong>Points to</strong> destacado em verde, adicione
          seu domínio <strong>domínio.com.br</strong>.
        </p>
        <p>
          4. No campo <strong>TTL</strong>, selecione <strong>1 Hour</strong>.
        </p>
        <p>
          Agora, basta clicar em <strong>Save</strong>.
        </p>
        <p>
          Abaixo está um exemplo de como deverá ficar a configuração final, após
          adicionar.
        </p>

        <BoxImage src={Image4} />
        <p>
          Feito isso, será necessário aguardar o apontamento. Isso pode levar
          até 48 horas para que seu domínio seja totalmente propagado. Você pode
          acompanhar a propagação através do site{" "}
          <a href="https://dnschecker.org/">DNS Checker.</a>
        </p>
        <p>
          <strong>Importante!</strong>
        </p>
        <p>
          • É importante ressaltar que você não poderá ter o mesmo domínio em
          sites diferentes. Se você já utiliza o domínio{" "}
          <a href="http://www.dominio.com.br">www.dominio.com.br</a> em
          determinado site, não poderá utilizá-lo na Loja Online. Para isso,
          você deverá criar um novo domínio, ou um subdomínio diferente, como
          por exemplo <strong>loja.dominio.com.br</strong>.
        </p>
        <p>
          • Seus clientes somente conseguirão acessar seu site utilizando o
          subdomínio cadastrado. Se você configurar{" "}
          <strong>www.dominio.com.br</strong>, o seu cliente NÃO conseguirá
          acessar seu site utilizando <strong>loja.dominio.com.br</strong> ou{" "}
          <strong>www.loja.dominio.com.br</strong>.
        </p>
        <p>
          Depois de configurar esse direcionamento e aguardar a propagação, você
          poderá inserir este domínio na sua Loja Online. Para isso, acompanhe o
          artigo:
        </p>
        <p>
          •{" "}
          <a href="/loja-online/como-configurar-o-dominio-personalizado-na-loja-online-do-sistema-erp">
            {" "}
            Como configurar o Domínio Personalizado na Loja Online.
          </a>
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarODominioDaGoDaddyNaLojaOnlineDoSistemaERP;
