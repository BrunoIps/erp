import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoVenderProdutosPizzaNaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoVenderProdutosPizzaNaLojaOnlineDoSistemaERP2.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoVenderProdutosPizzaNaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como vender Produtos Pizza na Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        {/*
        aqui tem que fazer pagina
        <p>
          Antes de começar, certifique-se de que já possui os produtos
          cadastrados corretamente. Caso ainda não tenha realizado o cadastro,
          veja o artigo{" "}
          <a href="URL_DO_ARTIGO">
            Como cadastrar Produtos do Tipo Pizza no Sistema ERP
          </a>{" "}
          e saiba mais sobre o assunto.
        </p>
        <br />
        <p>
          Com o produto já cadastrado, você precisará enviá-lo à sua LOJA
          Online. Caso não saiba como realizar este passo a passo, você poderá
          acompanhar o artigo{" "}
          <a href="URL_DO_ARTIGO">
            Como enviar os produtos para a loja online.
          </a>
        </p>
        <br /> */}
        <p>
          Agora, os seus pedidos destes produtos serão realizados da seguinte
          forma. Acesse a sua LOJA Online e escolha um produto.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Com o produto escolhido, você já poderá começar a montar o seu pedido.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Primeiro, você deverá escolher o tamanho da sua pizza. Após isto,
          escolha a quantidade de sabores que você deseja. Em seguida, escolha a
          borda e a massa que deseja.
        </p>
        <br />
        <p>Por fim, você poderá escolher os sabores da sua pizza.</p>
        <br />
        <p>
          <strong>Importante!</strong> O sistema permitirá que você adicione os
          sabores de acordo com a quantidade de sabores selecionada
          anteriormente. Para cada tamanho e sabor, foi configurado um preço de
          venda diferente no cadastro do produto. Assim, quando for adicionado
          mais de um sabor na mesma pizza, o sistema irá dividir o valor total
          da pizza individual pela quantidade dos outros sabores.
        </p>
        <br />
        <p>
          Por fim, você poderá definir a quantidade que deseja comprar da mesma
          pizza (com os mesmo sabores) e utilizar o campo{" "}
          <strong>Observações</strong> caso deseje informar algo sobre o seu
          pedido. Após isto, basta clicar em{" "}
          <strong>Adicionar ao Carrinho</strong> caso for comprar mais produtos,
          ou clicar em <strong>Comprar</strong> para finalizar a compra.
        </p>
        <br />
        <p>
          Agora, basta selecionar a <strong>Forma de Entrega</strong> e clicar
          em <strong>Escolher Forma de Pagamento</strong>.
        </p>
        <br />
        <p>
          Para finalizar, clique em <strong>Finalizar Compra</strong>, assim o
          seu pedido será enviado e começará a ser preparado.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoVenderProdutosPizzaNaLojaOnlineDoSistemaERP;
