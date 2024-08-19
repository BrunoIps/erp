import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarOPixelDoFacebook.png";
import Image2 from "../../assets/ComoConfigurarOPixelDoFacebook2.png";
import Image3 from "../../assets/ComoConfigurarOPixelDoFacebook3.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarOPixelDoFacebookNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar o Pixel do Facebook na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          O Pixel do Facebook é um código que, quando inserido nas configurações
          da Loja Online, permite rastrear uma série de comportamentos dos
          usuários dentro da sua página. Veja como é fácil utilizar esse recurso
          seguindo o seguinte passo a passo:
        </p>
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <strong>Como adquirir o Script do Pixel do Facebook</strong>
        </p>
        <ul>
          <li>
            <strong>Primeiro passo:</strong> acessar sua conta Facebook;
          </li>
          <br />
          <li>
            <strong>Segundo passo:</strong> acessar o Gerenciador de anúncios;
          </li>
          <br />
          <li>
            <strong>Terceiro passo:</strong> em “Todas as ferramentas”, clicar
            em “Configurações de negócios”;
          </li>
          <br />
          <li>
            <strong>Quarto passo:</strong> acessar menu lateral “Fonte de
            dados”, ao expandir a ferramenta, clique em “Pixels” e em
            “Adicionar” para cadastrar pixel. Ao avançar, será informado o
            código do Pixel para você copiar;
          </li>
          <br />
          <li>
            <strong>Quinto passo:</strong> caso não tenha conseguido copiar o
            código do Pixel, poderá selecionar o Pixel que deseja, em seguida
            clicar em Abrir no Gerenciador de Eventos, onde poderá clicar em
            Adicionar eventos. Será aberta uma nova tela, onde deve selecionar a
            opção De um novo site. Logo em seguida, selecione a opção Instalar o
            código manualmente e por fim, clique em Copiar código.
          </li>
          <br />
        </ul>
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <strong>Como configurar o Pixel na Loja Online</strong>
        </p>
        <p>
          Acesse o menu lateral <strong>Loja Online,</strong> submenu
          Configurações. Em seguida, acesse a aba <strong>Integrações.</strong>
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, no campo <strong>Facebook Pixel,</strong> clique em{" "}
          <strong>Ativar</strong> e em seguida, <strong>cole o pixel</strong>{" "}
          gerado no Facebook.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Por fim, basta <strong>Salvar</strong> esta configuração e você já
          pode utilizar esta ferramenta.
        </p>
        <BoxImage src={Image3} />
      </Typography>
    </Container>
  );
};
export default ComoConfigurarOPixelDoFacebookNaLojaOnline;
