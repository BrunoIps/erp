import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/comoCadastrarTabelasDePreco1.png";
import Image2 from "../../assets/comoCadastrarTabelasDePreco2.png";
import Image3 from "../../assets/comoCadastrarTabelasDePreco3.png";
import Image4 from "../../assets/comoCadastrarTabelasDePreco4.png";
import Image5 from "../../assets/comoCadastrarTabelasDePreco5.png";

import BoxImage from "../../components/Image/BoxImage";

const ComoCadastrarTabelasDePrecosNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como cadastrar Tabelas de Preços no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Com o Sistema ERP, você tem a possibilidade de cadastrar as tabelas de
          preços padrões e dinâmicas, que serão utilizadas para efetuar a venda
          dos seus produtos. Talvez o seu negócio tenha a necessidade de
          trabalhar com preços diferenciados para um mesmo produto, em casos
          como promoções em datas sazonais ou em vendas em maior volume (caso de
          vendas por atacado). Criando tabelas de preços, será muito fácil fazer
          essa diferenciação, por exemplo Tabela Atacado, Tabela Varejo, Tabela
          E-commerce e etc.
        </p>
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Para cadastrar uma tabela de preço padrão no sistema, acesse o menu
          lateral Estoque, submenu <strong> Tabelas de Preços.</strong>
        </p>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Na sequência, clique em <strong>+Novo</strong>.
        </p>
        <p>Na tela a seguir, será necessário preencher os seguintes dados.</p>

        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Nome:</strong> defina um nome para identificação da nova
          tabela de preço. A tabela que está sendo cadastrada, será informada
          para outras funcionalidades dentro do sistema;
          <br />
          <strong>Gênero:</strong> selecione dentre as opções disponíveis, qual
          será o gênero de produtos desta tabela. Lembrando que não é possível
          informar mais de um gênero de produtos. Ou seja, se você possui o
          cadastro de produtos com o gênero “Mercadoria para Revenda” e “Produto
          Acabado”, será necessário criar uma tabela de preço para cada um dos
          gêneros;
          <br />
          <strong>
            Atualizar Preços de venda ao alterar custo dos produtos:
          </strong>{" "}
          com este checkbox marcado e o preço de custo do produto for alterado
          no sistema, será recalculado o preço de venda do produto nesta tabela
          de preço. Cálculo: Novo Preço de Custo + MVA (%) da Tabela = Novo
          Preço de Venda na tabela. Com este checkbox{" "}
          <strong>desmarcado</strong>, o sistema mantém o comportamento padrão:
          preço de venda fixo na tabela. Ao editar a tabela, será mostrado o MVA
          (%) resultante de preço de custo atual do produto em relação ao preço
          de venda;
          <br />
          <strong>
            Atualizar Preços de venda ao alterar Comissão de Representação:
          </strong>{" "}
          com este checkbox marcado, quando posteriormente for alterada a
          porcentagem da comissão de representação, o preço de venda do produto
          será a soma do Preço de Custo + MVA (%) + Comissão de Representação.
          No caso de manter o checkbox desmarcado, o preço de venda do produto
          será apenas a soma de Preço de Custo + MVA (%);
          <br />
          <strong>Visível no PDV:</strong> caso queira utilizar esta tabela em
          seu PDV, basta marcar este checkbox;
        </p>
        <p>
          Após o preenchimento das informações clique em <strong>Salvar</strong>
          . Assim, o sistema fará o registro das informações e disponibilizará
          novos campos, com <strong>Filtros</strong> e com a{" "}
          <strong>Listagem de Produtos.</strong>{" "}
        </p>
        <p>
          Utilize os <strong>Filtros</strong> para buscar por um produto
          específico dentro da tabela de preço. Aqui, você poderá pesquisar por:
        </p>

        <BoxImage src={Image3} />
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Nome/Código do Produto: </strong>neste campo, basta informar o
          nome ou o código do produto. Selecione o item desejado e clique em{" "}
          <strong>Filtrar;</strong>
          <br />
          <strong>Categoria:</strong> digite o nome de uma categoria, selecione
          a categoria desejada e clique em <strong>Filtrar</strong>. Feito isso,
          o sistema exibirá na planilha os produtos que estão cadastrados com a
          mesma informação;
          <br />
          <strong>Marca:</strong> informe o nome de uma marca. Selecione a marca
          desejada e clique em <strong>Filtrar</strong>. Feito isso, você terá
          os itens que estão cadastrados com a mesma informação;
          <br />
          <strong>Modelo:</strong> informe o modelo do produto, feito isso, você
          terá os itens que estão cadastrados com a mesma informação;
          <br />
          <strong>Ordenação:</strong> selecione uma das opções disponíveis, para
          ordenação da listagem de produtos.
        </p>
        <p>
          Após a utilização dos filtros, o sistema dispõe a{" "}
          <strong>listagem dos produtos.</strong> Neste momento, você verá
          descrições de cada uma das mercadorias e campos para personalizar o
          novo preço de venda do produto, bem como suas comissões.
        </p>
        <BoxImage src={Image4} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Código:</strong> código do produto; <br />
          <strong>Nome Produto:</strong> nome do produto; <br />
          <strong>Preço Custo:</strong> esta informação do preço de custo é
          trazida de forma automática de acordo com o cadastro do produto;{" "}
          <br />
          <strong>Despesas:</strong> esta informação de despesas é trazida de
          forma automática de acordo com o cadastro do produto;
          <br />
          <strong>Ocultar o Produto nas Vendas:</strong> marque esta opção se
          deseja que o determinado produto não seja localizado no momento de
          realizar uma venda; <br />
          <strong>Comissão Vendedor (%):</strong> informe a porcentagem de
          comissão que o vendedor receberá ao vender este produto com esta
          tabela de preço; Comissão Representação (%): informe a porcentagem de
          comissão que você receberá como representante da venda deste produto;{" "}
          <br />
          <strong>MVA (%):</strong> informe em porcentagem, a margem de lucro
          desejada sobre o custo do produto. A partir desta informação será
          definido o valor de venda do produto;
          <br />
          <strong>Preço de venda:</strong> informe o preço de venda do produto,
          em reais. Caso não tenha informado o MVA, automaticamente o sistema
          informará a porcentagem de acordo com o preço de venda definido;{" "}
          <br />
          Usar Padrão: clicando neste ícone, as informações alteradas retornarão
          ao padrão, conforme os dados estão informados no cadastro do produto.
        </p>
        <p>
          Além disso, no topo desta listagem há o campo{" "}
          <strong>Editar Valores Rapidamente.</strong> Ao clicar neste ícone, é
          possível alterar os campos,
          <strong>
            Comissão Vendedor (%), Comissão Representação (%) e MVA (%)
          </strong>
          . Quando isso é feito, todos os produtos filtrados são alterados. Mas
          caso não haja nenhum filtro, toda tabela será editada com os
          respectivos valores.
        </p>

        <BoxImage src={Image5} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Caso queira realizar esta edição, basta informar um dos campos ou
          todos os campos e clicar em <strong>Modificar</strong>.
        </p>
        <p>
          Para finalizar o cadastro da tabela de preço, clique em{" "}
          <strong>Salvar</strong>. Depois disso, será possível acessar a
          listagem com todas as tabelas preenchidas no sistema.
        </p>
        <p>
          Com esta tela disponível, você pode editar uma tabela a qualquer
          momento e inserir novos preços de venda aos seus produtos. Para isso,
          selecione a tabela desejada e clique sobre o ícone de{" "}
          <strong>lápis.</strong>
        </p>
        <p>
          Após registrar na tabela os preços que deseja aplicar nos produtos
          vendidos, é chegado o momento de efetuar esta negociação. Portanto,
          acesse o menu lateral <strong>Vendas</strong>, submenu{" "}
          <strong>Novo Pedido.</strong> Logo, informe os dados principais, como
          cliente, empresa e claro, a <strong>tabela de preço.</strong> Em
          seguida, informe os produtos que serão vendidos e veja que
          automaticamente o sistema irá informar o preço de venda conforme
          definido na tabela. Por fim, basta salvar a venda e finalizá-la como
          preferir.
        </p>
        <p>
          Você também pode inserir a tabela de preço na tela no PDV. Mas para
          isso, a tabela deve estar configurara para ser exibida no PDV. Dessa
          forma, deverá ser acessado o menu lateral{" "}
          <strong>Vendas, submenu PDV</strong>. Na nova tela, localize o{" "}
          <strong>ícone de tabelas de preços</strong> e selecione a que deseja
          utilizar nesta venda. Depois disso, insira os produtos que serão
          vendidos, observando que o preço de venda informado será conforme o
          configurado na tabela.
        </p>
      </Typography>
    </Container>
  );
};

export default ComoCadastrarTabelasDePrecosNoSistemaERP;
