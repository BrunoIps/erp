import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoCriarCategoriasDeProdutosNaLojaOnline1.png";
import Image2 from "../../assets/ComoCriarCategoriasDeProdutosNaLojaOnline2.png";
import Image3 from "../../assets/ComoCriarCategoriasDeProdutosNaLojaOnline3.png";
import Image4 from "../../assets/ComoCriarCategoriasDeProdutosNaLojaOnline4.png";
import Image5 from "../../assets/ComoCriarCategoriasDeProdutosNaLojaOnline5.png";
import Image6 from "../../assets/ComoCriarCategoriasDeProdutosNaLojaOnline6.png";
import Image7 from "../../assets/ComoCriarCategoriasDeProdutosNaLojaOnline7.png";
import Image8 from "../../assets/ComoCriarCategoriasDeProdutosNaLojaOnline8.png";
import Image9 from "../../assets/ComoCriarCategoriasDeProdutosNaLojaOnline9.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoCriarCategoriasDeProdutosNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como criar Categorias de Produtos na Loja Online
      </TitleComponent>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          As categorias de produtos na Loja Online, também são conhecidas como o
          menu, é o local onde o cliente poderá navegar por diferentes nichos.
          Uma empresa de vestuário poderá ter diferentes categorias, como por
          exemplo: Blusa, Calça, Casaco, Saia, entre outros. Dentro de cada
          categoria, são informados os produtos correspondentes a ela.
        </p>
        <p>
          Na loja virtual criada na Loja Online, as categorias são exibidas de
          acordo com as que foram informadas no cadastro do produto anunciado no
          site. Então, caso deseje que seja informada uma nova categoria em seu
          site, é necessário criar esta categoria no Sistema ERP, informá-la no
          cadastro do produto e por fim, enviar o produto à Loja Online. Dessa
          forma, automaticamente será criada uma nova categoria de navegação no
          seu site, onde já terá informado o produto pertencente à ela. Vamos
          ver como realizar este procedimento?
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Criando a Categoria</strong>
        </p>
        <p>
          O primeiro passo será criar uma nova categoria de produto no Sistema
          ERP. Portanto, acesse o menu lateral <strong>Estoque</strong>, submenu
          C<strong>ategorias de Produtos</strong> e clique em{" "}
          <strong>Hierarquia</strong>.
        </p>
        <BoxImage src={Image1} />
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Na nova tela, clique em <strong>Adicionar</strong>. Dessa forma,
          automaticamente o sistema criará uma <strong>Nova Categoria</strong>.
          Portanto, <strong>selecione-a</strong> para poder editar as
          informações.
        </p>

        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Agora, na tela de edição da categoria, defina o <strong>nome</strong>{" "}
          que deseja, insira alguma <strong>descrição</strong> e informe alguma{" "}
          <strong>imagem</strong>, caso desejar. Por fim, clique em{" "}
          <strong>Salvar</strong>.
        </p>

        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <strong>Adicionando a Categoria no Produto.</strong>
        </p>
        <p>
          Depois de cadastrar a categoria, é o momento de inseri-la no cadastro
          do produto que deseja vender na Loja Online. Para isso, acesse o menu
          lateral <strong>Cadastros</strong>, submenu <strong>Produtos</strong>{" "}
          e edite o produto desejado. Caso ainda não tenha o produto cadastrado,
          basta clicar em <strong>Novo</strong> e preencher os campos
          necessários.
        </p>

        <BoxImage src={Image4} />

        <p>
          Agora, na edição do cadastro do produto, no campo{" "}
          <strong>Categoria</strong>, informe a categoria recém cadastrada e
          clique em <strong>Adicionar</strong> (ícone de +). Feito isso, clique
          em <strong>Salvar</strong>.
        </p>

        <BoxImage src={Image5} />

        <p>
          <strong>Enviando o Produto à Loja Online</strong>
        </p>
        <p>
          Por fim, o último passo é enviar este produto para a{" "}
          <strong>Loja Online.</strong>
          Portanto, acesse o menu lateral Loja Online, submenu{" "}
          <strong>Produtos</strong>.
        </p>
        <BoxImage src={Image6} />
        <p>
          Neste momento, <strong>localize o produto</strong> e clique em
          <strong> Vender na Loja.</strong>
        </p>
        <BoxImage src={Image7} />
        <p>
          <strong>Verificando a Categoria na Loja Online</strong>
        </p>
        <p>
          Dessa forma, ao acessar o site da sua Loja Online, você verá que uma
          nova categoria foi criada
        </p>
        <BoxImage src={Image8} />
        <p>
          Ao clicar sobre ela, você será direcionado para a tela da categoria,
          onde estará informado todos os produtos que pertencem a ela.
        </p>
        <BoxImage src={Image9} />
        <p>
          Com a divisão dos produtos por categoria, fica muito mais fácil que o
          usuário navegue por diferentes nichos, e com isso, ele poderá conhecer
          todos os artigos que sua empresa tem a oferecer.{" "}
        </p>
      </Typography>
    </Container>
  );
};

export default ComoCriarCategoriasDeProdutosNaLojaOnline;
