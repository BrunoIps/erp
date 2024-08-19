import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarAPagSeguroNaLojaOnlineDoSistemaERPDescontinuada1.png";
import Image2 from "../../assets/ComoConfigurarAPagSeguroNaLojaOnlineDoSistemaERPDescontinuada2.png";
import Image3 from "../../assets/ComoConfigurarAPagSeguroNaLojaOnlineDoSistemaERPDescontinuada3.png";
import Image4 from "../../assets/ComoConfigurarAPagSeguroNaLojaOnlineDoSistemaERPDescontinuada4.png";
import Image5 from "../../assets/ComoConfigurarAPagSeguroNaLojaOnlineDoSistemaERPDescontinuada5.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarAPagSeguroNaLojaOnlineDoSistemaERPDescontinuada = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar a PagSeguro na Loja Online do Sistema ERP
        (Descontinuada)
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Para que você possa utilizar a integração com a PagSeguro na sua Loja
          Online, você precisará realizar algumas configurações. Neste artigo,
          você verá em poucos passos como é fácil realizar estas configurações.
        </p>
        <p>
          Para começar, você precisará gerar o token na sua PagSeguro com o
          redirecionamento da Loja Online.
        </p>
        <p>
          Acesse a sua conta PagSeguro, na tela principal, clique em{" "}
          <strong>Venda Online</strong> e em seguida em{" "}
          <strong>Integrações</strong>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, você precisará informar a URL da sua Loja Online no momento do
          pagamento no campo <strong>Página de redirecionamento fixa</strong>.
          Informe também o{" "}
          <strong>Código da transação para a página de redirecionamento</strong>{" "}
          (entre em contato com a PagSeguro para geração do ID) e após isto,
          clique em <strong>Salvar Configurações</strong>.
        </p>

        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Feito isso, você deverá clicar em <strong>Gerar Token</strong>. Com o
          Token gerado, copie o código e o guarde para utilizá-lo nas
          configurações da Loja Online.
        </p>
        <p>
          Com o Token salvo, estando no Sistema ERP, acesse o menu lateral Loja
          Online, submenu <strong>Configurações</strong>.
        </p>

        <BoxImage src={Image3} />
        <p>
          O sistema abrirá diversas opções de plataformas de cobrança
          automática, selecione a <strong>PagSeguro</strong>.
        </p>

        <BoxImage src={Image4} />
        <p>
          Após selecionar a <strong>PagSeguro</strong>, o sistema abrirá um
          modal para que você preencha algumas informações. São elas:
        </p>
        <BoxImage src={Image5} />
        <p>
          <strong>Plano de Conta para Tarifas:</strong> informe um plano de
          contas de despesa que será utilizado no lançamento das tarifas;
        </p>
        <p>
          <strong>Email PagSeguro:</strong> informe o e-mail da sua conta na
          PagSeguro;
        </p>
        <p>
          <strong>Token PagSeguro:</strong> lembra o token que geramos no início
          do artigo? Você deverá informá-lo neste campo;
        </p>
        <p>
          <strong>Tipo de Checkout:</strong> selecione se deseja que os dados do
          cartão do cliente sejam preenchidos na tela da Loja Online
          (Transparente) ou se deseja que seja aberto um modal da PagSeguro para
          que o cliente informe os dados;
        </p>
        <p>
          <strong>Meios de Pagamento:</strong> selecione os pagamentos que você
          irá aceitar pela PagSeguro. Após selecionar, clique no{" "}
          <strong>ícone de mais</strong> para adicioná-la.
        </p>
        <p>
          Depois de preencher estas informações, clique em{" "}
          <strong>Salvar Alterações</strong> no topo da tela. Assim, o sistema
          aplicará a configuração realizada na sua loja. Dessa forma, quando o
          cliente finalizar a venda e selecionar a forma de pagamento PagSeguro,
          automaticamente o sistema abrirá os campos para preenchimento.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarAPagSeguroNaLojaOnlineDoSistemaERPDescontinuada;
