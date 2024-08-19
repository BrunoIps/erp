import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarOEbitNaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarOEbitNaLojaOnlineDoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarOEbitNaLojaOnlineDoSistemaERP3.png";
import Image4 from "../../assets/ComoConfigurarOEbitNaLojaOnlineDoSistemaERP4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarOEbitNaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar o Ebit na Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          O selo Ebit é uma certificação que classifica a qualidade das lojas
          virtuais brasileiras, a partir da opinião dos seus consumidores. Para
          isso, é preciso realizar um cadastro no{" "}
          <a href="https://www.ebit.com.br/">site</a> e atender aos requisitos
          para conseguir o reconhecimento em um dos seus diferentes status.
        </p>
        <p>
          Agora, para configurar o Ebit junto à Loja Online, acesse o menu
          lateral <b>Loja Online,</b> submenu <b>Configurações</b> e clique na
          aba
          <b>Integrações</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Neste momento, localize a integração com a Ebit e clique em{" "}
          <b>Ativar</b>. Em seguida, o sistema apresentará um novo campo para
          informar o <b>ID da Loja na e-bit</b>. Nele, você deverá informar o
          código de cadastro da sua loja virtual, fornecido pela Ebit.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Assim que preencher o campo solicitado, é necessário <b>Salvar</b> a
          configuração. Dessa forma, ao acessar o seu site, os usuários poderão
          verificar o selo Ebit no rodapé da página (parte inferior), conforme
          mostra a imagem abaixo.
        </p>

        <BoxImage src={Image3} />
        <p>
          Ao clicar sobre este selo, o usuário é direcionado para a tela de
          reputação da sua empresa no painel da Ebit, onde poderá verificar os
          elogios e reclamações que outros clientes realizaram em relação ao seu
          site.
        </p>

        <BoxImage src={Image4} />
        <p>
          Sem dúvidas essa integração garante uma melhor experiência e
          satisfação de compra para o consumidor, além de elevar a credibilidade
          da sua loja. Então não deixe de ativar agora mesmo e tornar seu site
          ainda mais confiável!
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarOEbitNaLojaOnlineDoSistemaERP;
