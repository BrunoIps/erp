import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoCriarPaginasNaLojaOnline1.png";
import Image2 from "../../assets/ComoCriarPaginasNaLojaOnline2.png";
import Image3 from "../../assets/ComoCriarPaginasNaLojaOnline3.png";
import Image4 from "../../assets/ComoCriarPaginasNaLojaOnline4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoCriarPaginasNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>Como criar Páginas na Loja Online</TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Via de regra, as lojas virtuais possuem diferentes páginas, como
          políticas de troca, missão, visão e valores, sua história… E outras
          tantas, criadas de acordo com as necessidades do negócio.
        </p>
        <p>
          Na Loja Online, você pode criar quantas páginas desejar. E o caminho é
          bem simples, acesse o menu lateral{" "}
          <b>Loja Online, submenu Páginas e em seguida, clique em Novo.</b>
        </p>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, você será direcionado para a tela de cadastro da página. Neste
          momento, insira os seguintes dados.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <strong>Título da página:</strong> insira o título que a página terá.
          Lembrando que esse título será exibido no rodapé da sua loja, para os
          seus clientes acessarem;
          <br />
          <strong>URL Slug:</strong> ao inserir o título da página é carregado
          automaticamente o URL da página;
          <br />
          <strong>Conteúdo da página:</strong> neste campo você poderá incluir
          todo o conteúdo que desejar, podendo alterar fontes, tamanhos, cores,
          imagens e adaptar o texto às necessidades da sua empresa.
        </p>

        <p>
          A qualquer tempo, você pode clicar em{" "}
          <strong>Visualizar na Loja</strong> e verificar como está a aparência
          da página em sua Loja Online. Então, você será direcionado para esta
          tela.
        </p>

        <BoxImage src={Image3} />
        <p>
          Uma vez que todos os dados tenham sido corretamente informados, clique
          em <b>Salvar</b>.
        </p>
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, seu cliente poderá visualizar as páginas da sua loja. Esta
          informação poderá estar na parte inferior ou superior da tela, ela
          varia de acordo com o layout selecionado na configuração da Loja
          Online.
        </p>

        <BoxImage src={Image4} />
        <p>
          Ao clicar em uma das páginas, o usuário (seu cliente) será direcionado
          para o conteúdo cadastrado anteriormente.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoCriarPaginasNaLojaOnline;
