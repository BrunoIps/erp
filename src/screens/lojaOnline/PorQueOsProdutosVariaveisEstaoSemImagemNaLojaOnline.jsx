import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/SemImagem.png";
import Image2 from "../../assets/SemImagem2.png";
import Image3 from "../../assets/SemImagem3.png";
import Image4 from "../../assets/SemImagem4.png";
import Image5 from "../../assets/SemImagem5.png";
import BoxImage from "../../components/Image/BoxImage";

const PorQueOsProdutosVariaveisEstaoSemImagemNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Por que os Produtos Variáveis estão sem imagem na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        Se você realiza a venda de produtos variáveis em sua Loja Online, pode
        ter se deparado com produtos sem imagem. Porém, quando selecionada a
        variação desejada, a imagem é apresentada normalmente. Neste artigo, te
        explicaremos por que isto ocorre.
      </Typography>
      <BoxImage src={Image1} />
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Ao cadastrar produtos variáveis para a venda na Loja Online, é
          importante que sejam anexadas imagens no cadastro do produto. Assim,
          seu cliente poderá visualizar o produto e ter certeza que é o que
          deseja comprar. Porém, para que o produto apresente uma imagem
          principal, sem ter sido escolhida alguma variação, é necessário anexar
          imagens no cadastro do produto pai.
        </p>
      </Typography>

      <p>
        Para isso, acesse o menu lateral <strong>Cadastros,</strong> submenu
        <strong> Produtos</strong> e edite o cadastro do produto pai.
      </p>
      <BoxImage src={Image2} />

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Em seguida, na aba <strong>Fotos,</strong> você poderá anexar uma
          imagem.
        </p>
        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Com a imagem anexada, basta você clicar em <strong>Salvar,</strong> no
          canto superior direito da tela.
        </p>
        <BoxImage src={Image4} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Agora, ao acessar o produto na Loja Online, será apresentada a imagem
          anexada ao produto pai.
        </p>
        <BoxImage src={Image5} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Caso você precise adicionar imagens em diversos produtos, poderá
          realizar esta ação em massa. Para isso, siga o passo a passo do artigo{" "}
          <a href="/cadastros-basicos/como-adicionar-imagens-em-lote-nos-produtos-do-sistema-erp">
            Como adicionar Imagens em lote nos Produtos do Sistema ERP
          </a>
          . Agora é com você, aproveite ao máximo as oportunidades do Sistema
          ERP! Esperamos que este artigo tenha esclarecido suas dúvidas e que te
          ajude a aproveitar ainda mais as funcionalidades disponíveis. Restou
          alguma dúvida? Entre em contato com o seu fornecedor para maiores
          informações!
        </p>
      </Typography>
    </Container>
  );
};
export default PorQueOsProdutosVariaveisEstaoSemImagemNaLojaOnline;
