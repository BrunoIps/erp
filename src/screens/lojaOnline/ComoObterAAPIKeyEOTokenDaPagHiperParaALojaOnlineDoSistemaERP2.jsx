import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/pagHiper1.png";
import Image2 from "../../assets/pagHiper2.png";
import Image3 from "../../assets/pagHiper3.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoObterAAPIKeyEOTokenDaPagHiperParaALojaOnlineDoSistemaERP2 = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como obter a APIKey e o Token da PagHiper para a Loja Online do Sistema
        ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        Para integrar o PagHiper ao seu site de vendas você precisará do API Key
        e do Token do PagHiper. Consiga essas informações fazendo o passo a
        passo abaixo:
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>1º</strong>Acesse o painel do PagHiper e faça login na sua
          conta;
        </p>
        <p>
          <strong>2º</strong>Na aba <strong>Ferramentas</strong>, aperte em{" "}
          <strong>Retorno automático</strong>, nesta página você deve mudar o
          Status da URL para <strong>Ativado</strong> e clicar em{" "}
          <strong>Ativar URL</strong>. Deixe em branco o campo{" "}
          <strong>Página de retorno</strong>;
          <BoxImage src={Image1} />
        </p>
        <p>
          <strong>3º</strong>Após acesse o menu <strong>Minha Conta,</strong> e
          em
          <strong>Credenciais.</strong>
          <BoxImage src={Image2} />
        </p>
        <p>
          <strong>4º</strong> Copie o <strong>Api Key</strong> e{" "}
          <strong>Token</strong> cole no painel do ERP.
          <BoxImage src={Image3} />
        </p>
      </Typography>
    </Container>
  );
};
export default ComoObterAAPIKeyEOTokenDaPagHiperParaALojaOnlineDoSistemaERP2;
