import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoDefinirAIsencaoDeFreteNaLojaOnline1.png";
import Image2 from "../../assets/ComoDefinirAIsencaoDeFreteNaLojaOnline2.png";
import Image3 from "../../assets/ComoDefinirAIsencaoDeFreteNaLojaOnline3.png";
import Image4 from "../../assets/ComoDefinirAIsencaoDeFreteNaLojaOnline4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoDefinirAIsencaoDeFreteNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como definir a Isenção de Frete na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Você sabia que na Loja Online é possível oferecer <b>Frete Grátis</b>{" "}
          aos seus clientes? Neste artigo, você aprenderá a configurar esta
          opção na sua loja.
        </p>
        <p>
          Para isso, acesse o menu lateral{" "}
          <b>Loja Online, submenu Configurações.</b>
        </p>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Acesse a aba <b>Entregas</b>. Você poderá isentar o frete de duas
          formas, na primeira compra do cliente ou a partir de um valor mínimo
          de venda.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <h3>
          <strong>Valor mínimo de venda</strong>
        </h3>
        <p>
          Para isentar o frete do seu cliente a partir de um valor, você deverá
          marcar a opção <b>Isentar Frete a partir de valor mínimo</b>. Assim, o
          sistema abrirá um novo campo para informar o valor desejado da compra,
          assim o cliente terá este benefício.
        </p>

        <BoxImage src={Image3} />
        <p>
          Feito isso, clique em <b>Salvar</b>. Quando o seu cliente realizar uma
          compra acima deste valor, ele terá o valor do frete isento.
        </p>
      </Typography>
      <Typography variant="body1" gutterBottom>
        <h3>
          <strong>Primeira compra</strong>
        </h3>
        <p>
          Além dessa forma, o frete também poderá ser isento na primeira compra
          do cliente, independente do valor. Para isso, você deverá marcar a
          opção <b>Primeira Compra Com Frete Grátis.</b> Assim, após se
          cadastrar e realizar a primeira compra, o cliente terá frete grátis
        </p>

        <BoxImage src={Image4} />
        <p>
          Após marcar esta opção, clique em <b>Salvar</b>. Desse modo, os
          próximos clientes que se cadastrarem já terão este benefício
          disponível para a primeira compra. <br />
          <br />
          <b>Importante!</b> Você poderá utilizar estas duas opções juntas.
          Dessa forma, seu cliente terá frete grátis na primeira compra e ao
          comprar acima do valor mínimo.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoDefinirAIsencaoDeFreteNaLojaOnline;
