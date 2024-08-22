import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoCadastrarProdutosAlimenticiosFoodsNoSistemaERP1.png";
import Image2 from "../../assets/ComoCadastrarProdutosAlimenticiosFoodsNoSistemaERP2.png";
import Image3 from "../../assets/ComoCadastrarProdutosAlimenticiosFoodsNoSistemaERP3.png";
import Image4 from "../../assets/ComoCadastrarProdutosAlimenticiosFoodsNoSistemaERP4.png";
import Image5 from "../../assets/ComoCadastrarProdutosAlimenticiosFoodsNoSistemaERP5.png";
import Image6 from "../../assets/ComoCadastrarProdutosAlimenticiosFoodsNoSistemaERP6.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoCadastrarProdutosAlimenticiosFoodsNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como cadastrar Produtos Alimentícios (Foods) no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        Uma vez que você já tenha gerado pedidos e/ou orçamentos, será
        necessário aprová-los para gerar os lançamentos financeiros e emitir
        suas respectivas notas fiscais.
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          A venda de produtos alimentícios é um recurso que a cada dia vem
          crescendo e se tornando mais uma opção para os empreendedores. E por
          virtude disso, desenvolvemos a possibilidade do cadastro desses itens.
        </p>

        <p>
          Primeiramente será necessário cadastrar seu produto. Sendo assim,
          acesse o menu lateral <strong>Cadastros</strong>, submenu{" "}
          <strong>Novo Produto</strong> e insira os dados necessários, como
          Nome, Preço de Custo, Preço de Venda e demais informações que
          considerar importante.
        </p>

        <p>
          Após informar os dados, clique em <strong>Salvar</strong>. Depois
          disso, será necessário ir até a seção <strong>Foods</strong> dentro do
          cadastro do produto e habilite o campo{" "}
          <strong>É Um Produto Alimentício?</strong>
        </p>

        <BoxImage src={Image1} />

        <p>
          Imediatamente, o sistema exibirá a aba <strong>Complementos</strong>,
          onde você poderá expandi-la e para dar início ao preenchimento das
          informações.
        </p>

        <BoxImage src={Image2} />

        <p>
          Em seguida, clique no campo{" "}
          <strong>Adicionar Grupo de Complementos</strong> e informe o nome do
          grupo de complementos e adicionar os complementos que pertencem a este
          respectivo grupo. Você poderá também adicionar a quantidade máxima e
          mínima de cada grupo que este complemento pode ser utilizado na venda
          do produto. Caso não seja estipulada uma quantidade mínima e máxima, o
          campo deve ficar em branco.
        </p>
        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Nesse exemplo, será vendido um hambúrguer como produto principal, e de
          complementos serão cadastrados dois grupos de complementos, Batata
          Frita e Refrigerante.
        </p>
        <p>
          Para dar continuidade, após informar o nome do grupo e suas devidas
          quantidades, selecione Adicionar Complementos para informar as
          possibilidades.
        </p>
        <BoxImage src={Image4} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>Logo as informações apresentadas serão:</p>
        <p>
          <BoxImage src={Image5} />
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Código</strong>: o código será apresentado automaticamente
          pelo sistema, mas poderá ser modificado por você;
        </p>
        <p>
          <strong>Nome</strong>: informe o nome do complemento;
        </p>
        <p>
          <strong>Descrição</strong>: descreva características para a venda,
          como tamanhos;
        </p>
        <p>
          <strong>Preço</strong>: informe o preço do complemento de acordo com a
          descrição. Caso seja um complemento de opção gratuita, deixe o campo
          em branco.
        </p>

        <p>
          Se necessário, para adicionar um outro grupo, basta clicar novamente
          em <strong>Adicionar Grupo de Complementos</strong> e siga as mesmas
          instruções de preenchimento.
        </p>

        <BoxImage src={Image6} />

        <p>
          Em seguida, basta Salvar as informações para realizar a venda de seus
          produtos alimentícios e de seus complementos!
        </p>
      </Typography>
    </Container>
  );
};
export default ComoCadastrarProdutosAlimenticiosFoodsNoSistemaERP;
