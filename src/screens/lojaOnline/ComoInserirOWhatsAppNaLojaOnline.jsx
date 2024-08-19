import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoInserirOWhatsAppNaLojaOnline1.png";
import Image2 from "../../assets/ComoInserirOWhatsAppNaLojaOnline2.png";
import Image3 from "../../assets/ComoInserirOWhatsAppNaLojaOnline3.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoInserirOWhatsAppNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>Como inserir o WhatsApp na Loja Online</TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Para facilitar ainda mais a comunicação dos usuários do seu site com
          sua equipe de vendas, nada melhor do que inserir o contato do WhatsApp
          diretamente na <b>Loja Online!</b>
        </p>
        <p>
          Primeiramente, acesse o menu lateral{" "}
          <b>Loja Online, submenu Configurações.</b>
        </p>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Na nova tela, vá até a aba <b>Configurações</b> e localize a seção
          <b>Informações de contato.</b> Assim, você verá o campo
          <b> WhatsApp da sua loja, </b>
          onde você deverá preencher o número do telefone que será utilizado
          para os atendimentos. Ao lado terá a opção <b>Destacar</b>, que ao
          habilitar, será exibida na sua Loja Online o ícone do WhatsApp
          juntamente com o número. Mas caso deixar desabilitada, somente
          aparecerá o ícone do aplicativo.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Depois de <b>Salvar Alterações realizadas</b>, você poderá{" "}
          <b>acessar o site da sua Loja Online</b> e verificar que será exibido
          o ícone do <b>WhatsApp</b>, juntamente com o número de contato, se
          esse tenha sido destacado.
        </p>

        <BoxImage src={Image3} />
        <p>
          Ao clicar sobre este ícone, seu cliente será direcionado para uma nova
          conversa via WhastApp com o contato informado, onde será possível
          enviar mensagens e tirar dúvidas com o atendente.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoInserirOWhatsAppNaLojaOnline;
