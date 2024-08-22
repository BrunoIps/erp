import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarOServidordeEmailNoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarOServidordeEmailNoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarOServidordeEmailNoSistemaERP3.png";
import Image4 from "../../assets/ComoConfigurarOServidordeEmailNoSistemaERP4.png";
import Image5 from "../../assets/ComoConfigurarOServidordeEmailNoSistemaERP5.png";
import Image6 from "../../assets/ComoConfigurarOServidordeEmailNoSistemaERP6.png";

import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarOServidordeEmailNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar o Servidor de E-mail no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          O Servidor de E-mails no Sistema ERP permite que você envie e-mails
          para seus clientes e fornecedores diretamente do seu próprio servidor
          dentro do sistema, facilitando os processos na sua empresa. Com essa
          configuração você poderá enviar Pedidos, Boletos, NF-e e outros
          documentos diretamente pelo Sistema ERP para seus clientes.
        </p>
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Para isso, acesse o menu lateral Cadastros, submenu <b>Empresas</b>.
        </p>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Nesta tela, edite a <b>Empresa</b> a qual você deseja configurar o
          servidor de e-mails, ou clique duas vezes no nome da empresa para
          abrir a edição.
        </p>

        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Após aberto o cadastro da empresa, clique na aba,{" "}
          <b>Servidor de E-mails.</b>
        </p>

        <BoxImage src={Image3} />
        <p>
          Em seguida, você deverá marcar a opção Personalizar Servidor de
          e-mails. Uma vez clicado nesta opção, serão exibidos novos campos para
          preenchimento. São eles:
        </p>
        <BoxImage src={Image4} />
        <p>
          <strong>Provedor de E-mail:</strong> selecione o provedor de e-mail,
          que é o local onde você criou o seu e-mail. Se o servidor de e-mails
          que você utiliza for Gmail (incluindo Google Apps/Business com seu
          domínio) ou Hotmail, selecione a opção correspondente. Caso você
          utilize um servidor de e-mails como Locaweb, Hostgator, KingHost,
          UolHost, Outlook, selecione a opção <strong>Outros</strong>.
        </p>

        <p>
          <strong>Protocolo de Comunicação:</strong> neste campo selecione a
          opção SMTP. SMTP (Simples Mail Transfer Protocol) é um protocolo de
          envio de informações, ele recebe informações do remetente e envia à
          internet para que um servidor POP/IMAP o receba e direcione à caixa do
          destinatário.
        </p>

        <p>
          <strong>Utilizar Protocolo SSL:</strong> selecione se seu provedor
          utiliza protocolos de criptografia no acesso ao e-mail.{" "}
          <strong>Fique atento!</strong> Verifique junto ao servidor do seu
          e-mail sobre Utilizar Protocolo SSL.
        </p>

        <p>
          <strong>Endereço do servidor:</strong> informe o endereço do servidor
          de saída do seu provedor de e-mails. Normalmente é algo parecido com “
          <em>smtp.seudominio.com.br</em>”, ou “<em>mail.seudominio.com.br</em>
          ”. Exemplo: smtp.gmail.com.
        </p>

        <p>
          <strong>Porta:</strong> informe a porta utilizada pelo seu provedor
          para o envio dos e-mails. Esta informação sempre está junto com as
          outras informações de configuração do seu provedor de e-mails.
        </p>

        <p>
          <strong>Usuário:</strong> neste campo, informe o endereço de e-mail
          que será utilizado para enviar os documentos aos destinatários. O
          e-mail informado neste campo deve ser o mesmo que você acessa para
          logar na sua caixa de entrada. Logo, não seria o e-mail de login ao
          Sistema ERP.
        </p>

        <p>
          <strong>Senha:</strong> coloque a senha que você utiliza para acessar
          este e-mail mencionado no campo anterior. Novamente, reforçando: não
          seria a senha de acesso ao Sistema ERP e sim, de acesso à sua caixa de
          e-mails.
        </p>

        <p>
          Depois de efetuar essa configuração, você deve clicar no botão{" "}
          <strong>Enviar E-mail de Teste</strong>.
        </p>

        <p>
          Dessa forma, abrirá uma pequena janela para inserir o e-mail que
          deseja enviar o e-mail de teste. Portanto, preencha o campo e clique
          em <strong>Enviar</strong>.
        </p>

        <BoxImage src={Image5} />
        <p>
          Se as configurações estiverem corretas, o sistema apresentará a
          mensagem conforme a imagem abaixo:
        </p>
        <BoxImage src={Image6} />
        <p>
          Pronto! Agora, basta <b>Salvar</b> a configuração e você estará
          enviando e-mails com seu próprio servidor aos seus clientes.
        </p>
        <p>
          <strong>Atenção usuários do GMAIL!</strong>
          Os usuários do Gmail necessitam liberar a permissão de acesso do
          Sistema ERP ao servidor de e-mails do Google. Para isso,{" "}
          <a href="/cadastros-basicos/configurando-o-servidor-do-gmail">
            clique aqui
          </a>{" "}
          e, irá visualizar como estar configurando o servidor de saída para
          Contas Google.
        </p>

        <p>
          <strong>Atenção usuários!</strong>
          Seguem alguns exemplos de servidores e portas:
        </p>

        <ul>
          <li>GMAIL – Servidor: smtp.gmail.com – Porta: 587 sem SSL</li>
          <li>OUTLOOK – Servidor: smtp.office365.com – Porta: 587 sem SSL</li>
          <li>LOCAWEB – Servidor: email-ssl.com.br – Porta: 587 sem SSL</li>
          <li>
            HOSTINGER – Servidor: smtp.hostinger.com.br – Porta: 587 sem SSL
          </li>
        </ul>

        <p>
          Caso os exemplos de servidores informados não seja o seu, necessitará
          estar entrando em contato com seu provedor de e-mails e verificando as
          informações para preenchimento correto dos dados do sistema.
        </p>
      </Typography>
    </Container>
  );
};

export default ComoConfigurarOServidordeEmailNoSistemaERP;
