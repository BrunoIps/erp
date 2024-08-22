import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ConfigurandoOServidorDoGmail1.png";
import Image2 from "../../assets/ConfigurandoOServidorDoGmail2.png";
import Image3 from "../../assets/ConfigurandoOServidorDoGmail3.png";
import Image4 from "../../assets/ConfigurandoOServidorDoGmail4.png";
import Image5 from "../../assets/ConfigurandoOServidorDoGmail5.png";
import Image6 from "../../assets/ConfigurandoOServidorDoGmail6.png";
import Image7 from "../../assets/ConfigurandoOServidorDoGmail7.png";

import BoxImage from "../../components/Image/BoxImage";

const ConfigurandoOServidorDoGmail = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>Configurando o Servidor do Gmail</TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Para proteção de sua conta, o Google deixou de de oferecer suporte
          para o uso de app menos seguros ou dispositivos de terceiros que
          solicitam login na conta Google usando apenas seu nome de usuário e
          senha. Essa mudança esta sendo válida desde o da 31/05/2022.
        </p>
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          As soluções do Sistema ERP já atendem essa mudança, basta informar a
          “senha de app” gerada para o dispositivo e continuar enviando o e-mail
          normalmente.
        </p>
        <p>
          O <b>Primeiro Passo</b> é estar acessando o link disponibilizado pelo
          Gmail, onde você será direcionado para a tela de login de seu e-mail.
          Clique no link abaixo para acessar a página:
        </p>
        <a href="https://myaccount.google.com/apppasswords">
          https://myaccount.google.com/apppasswords
        </a>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Ao logar você será direcionado a tela de Senhas App, onde no campo app
          você irá selecionar a opção Outro(nome personalizado)
        </p>

        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Lembrando que, caso apresente a informação de que sua conta não possui
          essa configuração, entre em contato com o Gmail, para que lhe auxiliem
          a disponibilizar essa funcionalidade.
        </p>
        <p>
          Em seguida, informe o nome <b>ERP</b> e clique na opção <b>GERAR</b>
        </p>

        <BoxImage src={Image3} />
        <p>
          Feito isso, será geada uma senha de app, basta copiá-la e seguir as
          orientações para inseri-la no Sistema ERP. Orientamos, para que essa
          senha senha sempre salva, pois não é possível visualiza-la no Gmail
          novamente.
        </p>
        <BoxImage src={Image4} />
        <h4>Sistema ERP</h4>
        <p>
          Você irá acessar o seu Sistema ERP, acessando Menu Lateral Cadastros e
          em seguida Submenu Empresas
        </p>

        <BoxImage src={Image5} />
        <p>
          Edite o cadastro de sua empresa que possui o Servidor de e-mails
          configurado e clique na aba Servidor de e-mails
        </p>
        <BoxImage src={Image6} />
        <p>
          Onde no campo Senha, você irá informar a senha que foi gerada
          anteriormente na configuração de Senhas App e salve as alterações
        </p>
        <BoxImage src={Image7} />
        <p>
          Em seguida valide a configuração clicando em Enviar Email de Teste,
          para confirmar o funcionamento de envio de informações no sistema para
          o e-mail.
        </p>
      </Typography>
    </Container>
  );
};

export default ConfigurandoOServidorDoGmail;
