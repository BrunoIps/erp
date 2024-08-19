import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarAPagarMenaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarAPagarMenaLojaOnlineDoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarAPagarMenaLojaOnlineDoSistemaERP3.png";
import Image4 from "../../assets/ComoConfigurarAPagarMenaLojaOnlineDoSistemaERP4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarAPagarMenaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar a Pagar.me na Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Para configurar sua conta Pagar.me com a Loja Online, siga estes
          passos:
        </p>

        <p>
          1. <a href="https://id.pagar.me/signin">Acesse sua conta Pagar.me</a>
        </p>

        <p>
          2. No <strong>canto superior</strong>, clique no nome da sua empresa
          (onde diz "ver minha conta").
        </p>

        <p>
          3. No <strong>menu esquerdo</strong>, na seção Configurações, clique
          no link API KEYS.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>4. Copie as chaves "Chave de API" e "Chave de criptografia".</p>

        <p>
          5. Abra{" "}
          <strong>
            Loja Online &gt; Configurações &gt; Aba Configurações &gt; Seção
            Pagamentos e Preços
          </strong>{" "}
          e marque a opção "Pagar.me".
        </p>

        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          6. Preencha os campos <strong>Chave de API</strong> e{" "}
          <strong>Chave criptografada</strong> com as chaves recém copiadas do
          site da Pagar.me.
        </p>
        <BoxImage src={Image3} />
        <h4>Importante!</h4>
        <p>
          As informações da chaves podem variar de acordo com a Versão do painel
          da Pagar.me, onde a <strong>Chave Criptografada</strong> pode estar
          sendo apresentada como <strong>Chave Pública</strong>.
        </p>

        <BoxImage src={Image4} />
        <p>
          Pronto! Agora seus clientes poderão utilizar a integração com a
          Pagar.me para efetuar os pagamentos na sua Loja Online!
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarAPagarMenaLojaOnlineDoSistemaERP;
