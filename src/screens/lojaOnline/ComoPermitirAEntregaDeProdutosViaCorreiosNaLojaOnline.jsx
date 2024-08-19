import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoPermitirAEntregaDeProdutosViaCorreiosNaLojaOnline1.png";
import Image2 from "../../assets/ComoPermitirAEntregaDeProdutosViaCorreiosNaLojaOnline2.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoPermitirAEntregaDeProdutosViaCorreiosNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como permitir a Entrega de Produtos via Correios na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          No momento de configurar as entregas de mercadorias através dos
          Correios na Loja Online, é necessário se atentar a outros fatores. Um
          deles é configurar o produto que está anunciado no site para que seja
          possível ser enviado via SIGEP Web (Correios). Realizando esta
          configuração, o frete será calculado corretamente na sua loja virtual
          e evitará futuros problemas.
        </p>
        <p>
          Para isso, acesse o menu lateral <b>Loja Online</b>, submenu{" "}
          <b>Produtos</b>.
        </p>
      </Typography>

      <Typography variant="body1" gutterBottom>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Nesta página, <b>expanda o produto </b>que deseja entregar através dos
          correios e habilite o campo <b>Permitir Sigep (Correios)</b>. Por fim,
          clique em <b>Salvar</b>.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <b>Importante!</b> Quando você configura sua Loja Online para realizar
          entregas via Correios, automaticamente o sistema configura todos os
          produtos para permitir a entrega via correios. Mas em caso do frete
          não estar calculando corretamente na Loja Online, é necessário
          confirmar se este campo continua habilitado.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoPermitirAEntregaDeProdutosViaCorreiosNaLojaOnline;
