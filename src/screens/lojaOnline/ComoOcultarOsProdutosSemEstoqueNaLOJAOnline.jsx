import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoOcultarOsProdutosSemEstoqueNaLOJAOnline1.png";
import Image2 from "../../assets/ComoOcultarOsProdutosSemEstoqueNaLOJAOnline2.png";
import Image3 from "../../assets/ComoOcultarOsProdutosSemEstoqueNaLOJAOnline3.png";
import Image4 from "../../assets/ComoOcultarOsProdutosSemEstoqueNaLOJAOnline4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoOcultarOsProdutosSemEstoqueNaLOJAOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como ocultar os Produtos sem estoque na LOJA Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Para auxiliar ainda mais os seus processos diários, desenvolvemos a
          possibilidade de deixar os itens que se encontram com saldo zero ou
          negativo, indisponíveis para venda em sua LOJA Online, assim você e
          seu cliente não passarão por transtornos de cancelamentos de venda e
          pagamentos. Acompanhe e aprenda como realizar essa configuração.
        </p>
        <p>
          Acesse o menu lateral <b>Loja Online,</b> submenu <b>Configurações</b>
          .
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Em seguida, acesse as configurações de <b>Entrega</b>.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, localize a opção{" "}
          <b>Permitir venda de itens fora do estoque,</b> será necessário que
          essa opção se encontre <b>desabilitada</b>.
        </p>

        <BoxImage src={Image3} />
        <p>
          Feito isso, basta <b>Salvar as Alterações.</b>
        </p>

        <BoxImage src={Image4} />
        <p>
          Agora, ao buscar um item que se encontra sem saldo, o sistema
          apresentará a mensagem de indisponibilidade, acompanhe a comparação:
        </p>
        <p>
          Veja também:
          <a href="/loja-online/como-enviar-produtos-para-a-loja-online-do-sistema-erp">
            {" "}
            Como enviar Produtos para a Loja Online
          </a>
        </p>
      </Typography>
    </Container>
  );
};
export default ComoOcultarOsProdutosSemEstoqueNaLOJAOnline;
