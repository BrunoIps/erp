import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoGeraraURLdaLojaEOTokenNaMoovin1.png";
import Image2 from "../../assets/ComoGeraraURLdaLojaEOTokenNaMoovin2.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoGeraraURLdaLojaEOTokenNaMoovin = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como gerar a URL da Loja e o Token na Moovin
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Para realizar a integração com a Moovin no ERP, você precisará ter a
          URL da Loja e o Token. Neste artigo, você aprenderá como obter estas
          duas informações.
        </p>
        <br />
        <p>
          <strong>URL da Loja</strong>
        </p>
        <p>
          A URL que você deverá informar no campo <strong>URL da Loja</strong>{" "}
          na sua integração, terá uma parte fixa (destacada em{" "}
          <strong>Preto</strong>) e uma parte variável (destacada em{" "}
          <strong>Vermelho</strong>).
        </p>
        <p>http://sualoja.integration.moovin.com.br/webservice/</p>
        <p>
          Basta você realizar a substituição da informação destacada em vermelho
          pelo nome da sua loja.
        </p>
        <br />
        <p>
          <strong>Token</strong>
        </p>
        <p>Para obter o Token, você deverá seguir alguns passos.</p>
        <p>
          <strong>1.</strong> Acesse a sua plataforma Moovin;
        </p>
        <p>
          <strong>2.</strong> No menu <strong>Configurações</strong>, clique em{" "}
          <strong>Webservice</strong>.
        </p>
        <BoxImage src={Image1} />

        <p>
          <strong>3.</strong> Se você já possui o Token, o sistema o
          apresentará. Caso não possua, será apresentada a opção Gerar Token.
        </p>
        <BoxImage src={Image2} />

        <p>
          <strong>4.</strong> Caso tenha gerado o Token, clique em Salvar no
          final da tela. E pronto, você já terá os dados necessários para
          realizar a integração da sua loja da Moovin com o ERP.
        </p>

        <p>
          Com todos os dados necessários, preencha as devidas informações na
          configuração da Jet NEO no ERP! Saiba mais em:
          <a href="/loja-online/como-realizar-a-integracao-com-a-moovin-no-sistema-erp">
            {" "}
            Como realizar a integração com a Moovin no Sistema ERP.
          </a>
        </p>
      </Typography>
    </Container>
  );
};
export default ComoGeraraURLdaLojaEOTokenNaMoovin;
