import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoCadastrarCategoriasDeVendaParaOperacoesFiscaisNoSistemaERP1.png";
import Image2 from "../../assets/ComoCadastrarCategoriasDeVendaParaOperacoesFiscaisNoSistemaERP2.png";
import Image3 from "../../assets/ComoCadastrarCategoriasDeVendaParaOperacoesFiscaisNoSistemaERP3.png";

import BoxImage from "../../components/Image/BoxImage";

const ComoCadastrarCategoriasDeVendaParaOperacoesFiscaisNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como cadastrar Categorias de Venda para operações fiscais no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Além de utilizar as categorias de venda para que a venda não movimente
          estoque ou gere financeiro, você também a utiliza para cadastrar as
          operações fiscais. Ela é a responsável por informar na venda todos os
          tributos do produto vendido, de acordo com as informações descritas na
          operação fiscal. Então, vamos ver como se realiza este cadastro no
          sistema?!
        </p>
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <b>Importante!</b> O sistema tem por padrão utilizar em vendas a
          categoria “Venda de Materiais e Serviços”. Ou seja, se você gerar
          orçamentos/pedidos no sistema e não informar nenhuma categoria de
          venda, automaticamente o sistema utilizará esta. Logo, se você não
          deseja informar em toda a venda alguma categoria, recomendamos não
          cadastrar uma nova categoria e utilizar apenas a já cadastrada, que
          possui o nome “Venda de Materiais e Serviços”.
        </p>
        <p>
          Mas se você deseja criar uma nova categoria de venda, acesse o menu
          lateral <b>Cadastros</b>, submenu Categorias de <b>Venda</b>. Em
          seguida, clique em
          <b> Novo</b>.
        </p>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Na sequência, na tela{" "}
          <b>Cadastros de Categorias Pedidos/Orçamentos, </b>
          informe o seguintes dados:
        </p>

        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Nome:</strong> informe um nome para identificar a nova
          categoria que está sendo criada. <strong>Importante!</strong>{" "}
          Lembre-se que para utilizar esta categoria, você deve obrigatoriamente
          informá-la na venda, na aba Informações Gerais, no campo Categoria. E
          ainda, será necessário cadastrar as Operações Fiscais com o nome desta
          categoria.
        </p>

        <p>
          <strong>Movimenta Estoque:</strong> selecione esta opção se deseja que
          seja movimentado o estoque da venda no momento em que irá informá-la
          no pedido.
        </p>

        <p>
          <strong>Movimenta Financeiro:</strong> selecione esta opção se deseja
          que seja realizado o lançamento financeiro da venda no momento em que
          irá informá-la no pedido.
        </p>

        <p>
          <strong>Visível nas Operações Fiscais:</strong> é obrigatório
          habilitar esta opção para concluir a operação fiscal.
        </p>

        <p>
          Clique em <strong>Salvar</strong>, para concluir o cadastro de
          categorias de venda.
        </p>

        <BoxImage src={Image3} />
        <p>
          Após <b>Salvar</b> a categoria, você poderá configurar a operação
          fiscal em seu sistema, utilizando o nome da categoria recém
          cadastrada. Para saber mais detalhes sobre isto, siga o artigo:
          <a href="/fiscal/como-cadastrar-operacoes-fiscais-para-emitir-nf-e-no-sistema-erp">
            {" "}
            Como Cadastrar Operações Fiscais para NF-e no Sistema ERP.
          </a>
        </p>
      </Typography>
    </Container>
  );
};

export default ComoCadastrarCategoriasDeVendaParaOperacoesFiscaisNoSistemaERP;
