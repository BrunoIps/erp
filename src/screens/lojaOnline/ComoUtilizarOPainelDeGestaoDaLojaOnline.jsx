import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoUtilizarOPainel1.png";
import Image2 from "../../assets/ComoUtilizarOPainel2.png";
import Image3 from "../../assets/ComoUtilizarOPainel3.png";
import Image4 from "../../assets/ComoUtilizarOPainel4.png";
import Image5 from "../../assets/ComoUtilizarOPainel5.png";
import Image6 from "../../assets/ComoUtilizarOPainel6.png";
import Image7 from "../../assets/ComoUtilizarOPainel7.png";
import Image8 from "../../assets/ComoUtilizarOPainel8.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoUtilizarOPainelDeGestaoDaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como utilizar o Painel de Gestão da Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Com o painel de gestão da Loja Online é possível acompanhar os
          resultados que sua loja virtual está apresentando com muito mais
          praticidade.
        </p>
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Para isso, acesse o menu lateral <strong>Loja Online,</strong> submenu{" "}
          <strong>Painel da Loja.</strong>
        </p>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Ao acessar o <strong>Painel da Loja,</strong> logo poderá visualizar
          alguns botões de rápido acesso, que ao clicar sobre eles, você será
          direcionado à respectiva sessão.
        </p>
        <BoxImage src={Image2} />
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Abaixo, terá a sessão de <strong>Alterar data da Dashboard,</strong>{" "}
          onde você poderá selecionar se os dados do painel serão exibidos por
          mês ou por ano, e ainda poderá escolher qual você quer visualizar.
        </p>
        <p>
          Além disso, clicando sobre o ícone de <strong>Configurações</strong>{" "}
          (ícone da engrenagem, ao lado do ano), você poderá selecionar as
          informações que realmente são relevantes para o seu negócio.
        </p>
        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Na sequência, serão listados os clientes que fazem aniversário no mês
          vigente. Para aparecer quais são os clientes que estão de aniversário,
          basta clicar sobre <strong>Clientes</strong>, e se abrirá a listagem,
          como na imagem abaixo.
        </p>
        <BoxImage src={Image4} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Logo após, gráfico dos seus{" "}
          <strong>
            Pedidos Aprovados / Cancelados e Custo do Envio por Estado.
          </strong>
        </p>
        <BoxImage src={Image5} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Na sequência, é exibido o gráfico com suas{" "}
          <strong>Últimas Vendas.</strong> Nele, são expostos os status de cada
          uma delas, como por exemplo, Entregue, Entregue a Transportadora,
          Pagamento Pendente. E o Gráfico{" "}
          <strong>Valor(R$) Médio das Vendas,</strong> com Valor Total e Valor
          Médio.
        </p>
        <BoxImage src={Image6} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Dois gráficos bastante importantes, são o de{" "}
          <strong>Formas de Envio e Formas de Pagamento.</strong> Lembrando que
          as formas de pagamento a ser exibidas serão aquelas definidas no menu{" "}
          <strong>Configuração da Loja.</strong>
        </p>
        <BoxImage src={Image7} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          E, por fim, você terá um gráfico com as informações das
          <strong> Vendas por Estado.</strong>
        </p>
        <BoxImage src={Image8} />
        <p>
          Esperamos que este painel possa lhe auxiliar a ter uma visão mais
          ampla das movimentações da sua loja virtual.{" "}
        </p>
      </Typography>
    </Container>
  );
};

export default ComoUtilizarOPainelDeGestaoDaLojaOnline;
