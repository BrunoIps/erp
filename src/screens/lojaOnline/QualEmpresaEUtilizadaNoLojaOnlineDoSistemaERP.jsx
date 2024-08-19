import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/qualEmpresaEUtilizadaImage.png";

import BoxImage from "../../components/Image/BoxImage";

const QualEmpresaEUtilizadaNoLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Qual empresa é utilizada no Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        Se você utiliza a Loja Online para realizar a venda de seus produtos,
        sabe que após o cliente realizar a compra, ela será registrada no
        Sistema ERP. Mas se você gerencia mais de uma empresa no Sistema ERP, em
        qual delas a venda será registrada?
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        Ao configurar sua Loja Online, é necessário informar uma empresa padrão.
        Assim, todas as vendas geradas através do seu site serão cadastradas com
        a empresa informada no campo <strong>Empresa Padrão.</strong>
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Caso deseje, poderá alterar a empresa padrão acessando o menu lateral
          <strong>Loja Online,</strong> submenu <strong>Configurações</strong> e
          acessando a aba Configurações. No campo{" "}
          <strong>Empresa Padrão,</strong> basta selecionar a empresa que deseja
          e após isto, salvar a configuração.
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Lembrando que essa alteração não modifica as vendas que já foram
          realizadas para a empresa anterior.
        </p>
      </Typography>
    </Container>
  );
};
export default QualEmpresaEUtilizadaNoLojaOnlineDoSistemaERP;
