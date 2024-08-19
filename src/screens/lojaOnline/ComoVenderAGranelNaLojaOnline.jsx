import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoVenderAGranelNaLojaOnline1.png";
import Image2 from "../../assets/ComoVenderAGranelNaLojaOnline2.png";
import Image3 from "../../assets/ComoVenderAGranelNaLojaOnline3.png";
import Image4 from "../../assets/ComoVenderAGranelNaLojaOnline4.png";
import Image5 from "../../assets/ComoVenderAGranelNaLojaOnline5.png";
import Image6 from "../../assets/ComoVenderAGranelNaLojaOnline6.png";
import Image7 from "../../assets/ComoVenderAGranelNaLojaOnline7.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoVenderAGranelNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como criar Cupom de Desconto na Loja Online
      </TitleComponent>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Você sabia que além de vender produtos de unidade inteira na Loja
          Online, também é possível realizar vendas de produtos a granel?
          Normalmente essa funcionalidade é utilizada por empresas do segmento
          alimentício. Com ela, o seu cliente poderá realizar compra de produtos
          fracionados, como por exemplo: 1,50 kg ou 0,350 g. Se ficou
          interessado em saber como configurar a sua loja virtual dessa maneira,
          siga a leitura deste artigo.
        </p>
        <p>
          Primeiramente, será necessário você definir quais produtos deseja
          vender de forma fracionada na Loja Online. Para isso, acesse o menu
          lateral <strong>Cadastros</strong>, submenu <strong>Produtos</strong>{" "}
          e <strong>edite</strong> o produto desejado.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Agora, na edição do produto, na aba <strong>Dados</strong>, role a
          tela até a seção <strong>Estoque</strong> e expanda. Feito isso, você
          verá a opção{" "}
          <strong>Permitir Quantidade Fracionada na Loja Online</strong>, a qual
          deverá habilitar. Depois disso, clique em <strong>Salvar</strong> no
          topo da tela.
        </p>

        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Importante!</strong>
        </p>
        <ul>
          <li>
            O preço de venda do produto deverá ser o preço de um unidade
            completa. Por exemplo, se você permitirá venda em gramas, o preço de
            venda do produto deverá ser o preço de um quilograma.
          </li>
          <li>
            Esse procedimento deverá ser realizado manualmente em todos os
            produtos que deseja realizar venda a granel na Loja Online.
          </li>
        </ul>
        <p>
          Após configurar os produtos desejados, é o momento de informá-los na
          Loja Online. Para isso, acesse o menu lateral{" "}
          <strong>Loja Online</strong>, submenu <strong>Produtos</strong>.
        </p>

        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Nesta tela, localize os produtos desejados e marque a opção{" "}
          <strong>Vender na Loja.</strong>
        </p>
        <BoxImage src={Image4} />

        <p>
          Mas além disso, você também pode definir o número de casas decimais
          que serão exibidas no seu site. Isso se realiza acessando o menu
          lateral <strong>Loja Online,</strong> submenu{" "}
          <strong>Configurações</strong> e clicando na aba
          <strong>Configurações</strong>.
        </p>
        <BoxImage src={Image5} />
        <p>
          Nesta tela, localize o campo{" "}
          <strong>Casas Decimais para quantidades</strong> e insira a quantidade
          de casas decimais (número após a vírgula) que você deseja habilitar no
          seu site, para que os clientes informem a quantidade de compra. Feito
          isso, clique em <strong>Salvar</strong>.
        </p>
        <BoxImage src={Image6} />
        <p>
          Agora, quando o cliente acessar sua loja virtual e desejar comprar o
          produto a granel, ele poderá inserir a quantidade fracionada que
          deseja comprar do item, conforme a imagem abaixo.
        </p>
        <BoxImage src={Image7} />
      </Typography>
    </Container>
  );
};

export default ComoVenderAGranelNaLojaOnline;
