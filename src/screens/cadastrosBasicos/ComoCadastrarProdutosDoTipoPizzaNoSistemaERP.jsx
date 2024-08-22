import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoCadastrarProdutosDoTipoPizzaNoSistemaERP1.png";
import Image2 from "../../assets/ComoCadastrarProdutosDoTipoPizzaNoSistemaERP2.png";
import Image3 from "../../assets/ComoCadastrarProdutosDoTipoPizzaNoSistemaERP3.png";
import Image4 from "../../assets/ComoCadastrarProdutosDoTipoPizzaNoSistemaERP4.png";
import Image5 from "../../assets/ComoCadastrarProdutosDoTipoPizzaNoSistemaERP5.png";
import Image6 from "../../assets/ComoCadastrarProdutosDoTipoPizzaNoSistemaERP6.png";
import Image7 from "../../assets/ComoCadastrarProdutosDoTipoPizzaNoSistemaERP7.png";

import BoxImage from "../../components/Image/BoxImage";

const ComoCadastrarProdutosDoTipoPizzaNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como cadastrar Produtos do Tipo Pizza no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          A fim de levar ainda mais benefícios para todos os segmentos,
          otimizamos o cadastro de produtos, no ERP é possível cadastrar
          produtos do tipo Pizza, variando em tamanhos, sabores, bordas e
          massas.
        </p>
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Para fazer esse cadastro, o caminho é bem simples. Acesse o menu
          lateral Cadastros, submenu Novo Produto.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Assim, se abrirá a tela de cadastro de Produtos, onde você deve
          inserir os dados do referido item e selecionar a opção Pizza, no campo
          <b> Tipo do Produto.</b>
        </p>

        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Preencha os dados básicos, a seção de Custos e Precificação, bem como
          as Informações Adicionais. Com esses dados cadastrados, clique em
          Salvar.
        </p>

        <p>
          Nessa etapa surgirão novas abas, onde você deverá preencher os dados
          Fiscais e demais informações pertinentes ao produto. Na aba Fotos,
          adicione imagens do produto, sendo possível incluir imagens presentes
          em seu computador ou adicionar as sugestões carregadas por nosso
          buscador automático de imagens.
        </p>

        <BoxImage src={Image3} />
        <p>
          Feito isso, acesse a aba Foods e marque o checkbox É um produto
          alimentício?
        </p>
        <BoxImage src={Image4} />
        <p>
          Ao marcar essa opção, surgirão diferentes seções onde você poderá
          incluir informações de diferentes Tamanhos, Sabores, Massas e Bordas.{" "}
        </p>
        <p>
          Para incluir as informações na seção Tamanhos, basta expandir a seção
          e clicar em Adicionar Tamanho. Será carregado automaticamente um
          código para cada novo tamanho e você pode definir a quantidade de
          sabores, como neste exemplo:
        </p>
        <BoxImage src={Image5} />
        <p>
          <b>Importante</b>! Você deverá marcar todas as quantidades de sabores
          que estarão disponíveis no produto.
        </p>
        <p>
          Na seção <b>Sabores</b>, o processo é bem semelhante. Clique em{" "}
          <b>Adicionar</b>
          Sabor e o código será carregado automaticamente. Você deverá, então,
          informar o <b>Nome</b> do sabor, a <b>Descrição</b> e os <b>Preços</b>{" "}
          de Venda por Tamanho.
        </p>
        <p>
          Fique atento! No cadastro do produto, informe o preço total que essa
          pizza possui a ser vendida somente com esse sabor. Assim, se por acaso
          seu cliente realizar a compra desse sabor com mais outro, o sistema
          irá dividir o valor total desse sabor de acordo com os demais sabores
          adicionados.
        </p>
        <BoxImage src={Image6} />
        <p>E não esqueça, você pode adicionar quantos sabores desejar!</p>
        <p>
          Você pode ainda cadastrar Massas e Bordas, incluindo apenas Nome e
          Preço de cada variação.
        </p>
        <BoxImage src={Image7} />
        <p>
          Com todos os dados corretamente informados, clique em <b>Salvar</b>. O
          seu produto do tipo pizza está pronto para ser comercializado.
        </p>
        <p>
          Fique Atento! Esse tipo de produto Pizza somente pode ser
          comercializado através da Loja Online.
        </p>
      </Typography>
    </Container>
  );
};

export default ComoCadastrarProdutosDoTipoPizzaNoSistemaERP;
