import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoPersonalizarOsModelosDeEmailsEnviadosNaLojaOnline1.png";
import Image2 from "../../assets/ComoPersonalizarOsModelosDeEmailsEnviadosNaLojaOnline2.png";
import Image3 from "../../assets/ComoPersonalizarOsModelosDeEmailsEnviadosNaLojaOnline3.png";
import Image4 from "../../assets/ComoPersonalizarOsModelosDeEmailsEnviadosNaLojaOnline4.png";
import Image5 from "../../assets/ComoPersonalizarOsModelosDeEmailsEnviadosNaLojaOnline5.png";
import Image6 from "../../assets/ComoPersonalizarOsModelosDeEmailsEnviadosNaLojaOnline6.png";
import Image7 from "../../assets/ComoPersonalizarOsModelosDeEmailsEnviadosNaLojaOnline7.png";

import BoxImage from "../../components/Image/BoxImage";

const ComoPersonalizarOsModelosDeEmailsEnviadosNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como personalizar os Modelos de E-mails enviados na Loja Online
      </TitleComponent>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Neste artigo, você aprenderá a personalizar os E-mails que serão
          enviados ao seu cliente de acordo com os status do pedido.
        </p>
        <p>
          Antes de começar, acesse o menu lateral <b>Loja Online</b>, submenu
          <b> Configurações</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Na aba de <b>Configurações</b>, marque a opção{" "}
          <b>E-mail automático por status da venda.</b>
        </p>
        <BoxImage src={Image2} />
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Agora, você precisará acessar o menu lateral <b>Loja Online</b>,
          submenu
          <b>Modelos de E-mail.</b>
        </p>

        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          O sistema apresentará uma listagem de todas as etapas da venda em que
          serão enviados e-mails para atualizar o cliente sobre seu pedido.
        </p>

        <BoxImage src={Image4} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Então, basta expandir o status desejado, assim você poderá
          personalizar o conteúdo que será enviado ao cliente.
        </p>

        <p>
          Neste campo, você poderá informar o conteúdo do e-mail que deseja que
          seja enviado.
        </p>
        <BoxImage src={Image5} />

        <p>
          Logo abaixo você verá um dicionário com várias chaves para
          substituição, que podem ser inclusas no corpo do seu e-mail para que o
          sistema puxe as informações do cliente e pedido.
        </p>
        <BoxImage src={Image6} />
        <p>
          Além disso, você também poderá habilitar ou desabilitar o recursos
          para que os clientes enviem anexos junto ao e-mail. E caso você deseja
          enviar anexos, poderá selecioná-los no campo{" "}
          <b>Modelo de Documento</b>.
        </p>

        <BoxImage src={Image7} />
        <p>
          Depois de personalizar as mensagens que serão enviadas por e-mail aos
          clientes da Loja Online, clique em <b>Salvar</b>, no topo da tela.
        </p>
        <p>
          Prontinho, agora o seu cliente receberá um e-mail personalizado toda
          vez que o pedido mudar de status.
        </p>
      </Typography>
    </Container>
  );
};

export default ComoPersonalizarOsModelosDeEmailsEnviadosNaLojaOnline;
