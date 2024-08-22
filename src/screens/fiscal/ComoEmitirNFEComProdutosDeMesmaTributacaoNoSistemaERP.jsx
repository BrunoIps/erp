import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoEmitirNFEComProdutosDeMesmaTributacaoNoSistemaERP1.png";
import Image2 from "../../assets/ComoEmitirNFEComProdutosDeMesmaTributacaoNoSistemaERP2.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoEmitirNFEComProdutosDeMesmaTributacaoNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como emitir NF-e com produtos de mesma tributação no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Após realizar a configuração do seu sistema para emitir NF-e, você
          poderá definir a tributação que seus produtos terão para gerar suas
          notas fiscais!
        </p>
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Para tornar esta explicação mais clara, vamos elencar<b> 5 tópicos</b>
          essenciais.
        </p>
        <p>
          <p>
            <b>1. Criar a categoria de venda</b>
          </p>
          <p>
            A{" "}
            <a href="/cadastros-basicos/como-cadastrar-categorias-de-venda-para-operacoes-fiscais-no-sistema-erp">
              categoria de venda
            </a>{" "}
            serve para dar nome a Operação Fiscal que será cadastrada. Por
            padrão, o sistema já possui cadastrada a categoria
            <b> “Venda de Materiais e Serviços”</b> para a emissão de NF-e.
            Assim, ao realizar um Pedido/Orçamento e não informar a categoria, o
            sistema utilizará automaticamente a tributação cadastrada na
            operação fiscal nomeada como <b>“Venda de Materiais e Serviços“</b>.
            Você poderá cadastrar novas categorias para as operações fiscais,
            porém ao cadastrar um novo Pedido/Orçamento, deverá informá-la para
            que o sistema puxe a tributação correta.
          </p>
          <p>
            Se você deseja utilizar a categoria de venda padrão do sistema (com
            o nome Venda de Materiais e Serviços), não há necessidade de criar
            uma nova. Porém, se deseja inserir uma nova categoria, acesse o menu
            lateral <strong>Cadastros</strong>, submenu{" "}
            <strong>Categorias de Venda</strong> e clique em{" "}
            <strong>Novo</strong>. Assim, se abrirá um modal onde você poderá
            definir o nome da <strong>Categoria de Venda</strong> e marcar as
            opções de <strong>Visível nas Operações Fiscais</strong>,{" "}
            <strong>Movimenta Estoque</strong> e{" "}
            <strong>Movimenta Financeiro</strong>. Por padrão, a opção Visíveis
            nas Operações Fiscais deve ser marcada para o sistema informar os
            tributos na venda. Por fim, clique em <strong>Salvar</strong>.
          </p>

          <BoxImage src={Image1} />
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <h4>2. Criar o grupo tributário</h4>
        <p>
          O próximo passo é criar o Grupo Tributário. Mas antes disso, é
          importante informar que o Grupo Tributário serve apenas para vincular
          o produto a uma operação fiscal, que veremos mais adiante. Portanto,
          você poderá aplicar o nome que deseja para este grupo, visto que todos
          os produtos possuem a mesma tributação (sem variar de ICMS e ICMS ST,
          por exemplo). Neste exemplo, vamos cadastrar o grupo tributário como{" "}
          <strong>Simples Nacional</strong>.
        </p>
        <p>
          Agora, para realizar este cadastro, acesse o menu lateral{" "}
          <strong>Fiscal</strong>, submenu <strong>Grupo Tributário</strong> e
          clique em <strong>Novo</strong>. Dessa forma, se abrirá um modal onde
          você poderá definir o nome do <strong>Grupo Tributário</strong>. Por
          fim, clique em <strong>Salvar</strong>.
        </p>

        <h4>3. Criar a operação fiscal</h4>
        <p>
          Depois de criar o grupo tributário dos produtos, é o momento de
          definir as tributações que as mercadorias vendidas terão ao emitir a
          nota. Esse registro ocorre por meio da criação de uma operação fiscal.
          É nela que você informa o ICMS, IPI, PIS, COFINS e CFOP que serão
          informados automaticamente no momento de emitir a nota fiscal.
        </p>
        <p>
          Por padrão, o sistema tem pré-configurado uma operação fiscal com o
          nome <strong>Venda de Materiais e Serviços</strong> para todos os
          estados do Brasil. Caso você utilize as operações fiscais com este
          nome, você poderá editar a operação para o estado que realiza a
          emissão de nota fiscal, e configurá-las de acordo com as tributações
          da sua empresa para esta região. Ou então, você poderá excluir todas
          as operações pré-configuradas e criá-las do zero.
        </p>
        <p>
          Para isto, acesse o menu lateral <strong>Fiscal</strong>, submenu{" "}
          <strong>Operações Fiscais</strong>. Pensando em facilitar a utilização
          do sistema, neste exemplo vamos excluir todas as operações cadastradas
          pelo sistema, e iremos adicionar novas, clicando em{" "}
          <strong>Novo</strong> no canto superior da tela.
        </p>
        <p>
          Assim, se abrirá um novo modal onde você poderá definir as
          tributações.
        </p>

        <p>
          <strong>Aba Base</strong>
        </p>
        <p>
          No primeiro momento, o sistema apresentará a aba <strong>Base</strong>
          , onde será necessário informar os dados que esta operação fiscal será
          reconhecida pelo sistema. Portanto, preencha os seguintes dados:
        </p>
        <ul>
          <li>
            <strong>Operação</strong>: selecione a categoria de venda que
            nomeará esta operação fiscal. Se você utilizar a categoria de venda
            padrão do sistema, informe o nome{" "}
            <strong>Venda de Materiais e Serviços</strong>. Porém, se você criou
            uma nova categoria no passo 1, insira neste campo o nome desta
            categoria;
          </li>
          <li>
            <strong>Grupo Tributário</strong>: selecione o grupo tributário
            cadastrado anteriormente no passo 2. Assim, no próximo passo, você
            terá que informar este grupo nos seus produtos para que o sistema
            vincule as mercadorias com a operação fiscal;
          </li>
          <li>
            <strong>Destino – Estado</strong>: neste campo, selecione a qual
            estado esta operação fiscal aplicará os tributos.
          </li>
        </ul>

        <p>
          <strong>Definições de PIS e COFINS</strong>
        </p>
        <p>
          Ainda nesta tela, você poderá definir as informações de PIS e COFINS.
        </p>
        <p>
          Aqui, selecione a situação de cada imposto e as respectivas alíquotas
          que terão seus produtos. Mas é importante confirmar estas informações
          com sua contabilidade para que não ocorra futuros problemas. Neste
          exemplo, estamos utilizando a situação 07, referente à operação isenta
          da contribuição destes impostos.
        </p>
        <p>
          Você poderá também deixar informações importantes no campo{" "}
          <strong>Informações Complementares</strong>.
        </p>
        <p>
          <strong>Aba ICMS</strong>
        </p>
        <p>
          Em seguida, vá até a aba ICMS para informar dados específicos sobre
          este imposto.
        </p>
        <p>
          O primeiro campo a ser informado será a{" "}
          <strong>Situação do ICMS</strong>, que também é conhecida como{" "}
          <strong>CSOSN ou CST</strong>. Portanto, para informar corretamente
          este dado, você deverá consultar com sua contabilidade qual é a
          situação do ICMS correta a ser utilizada para a emissão de NF-e e de
          seus produtos. No exemplo, utilizamos a situação 102.
        </p>
        <p>
          <strong>Importante!</strong> Normalmente, empresas do regime de
          apuração Simples Nacional utilizam as situações 101, 102, 103, 201,
          202 ,203, 500 ou 900. Já empresas do Lucro Presumido/Real utilizam as
          situações 00, 10, 20, 30, 40, 41, 50, 51, 60, 70 ou 90.
        </p>
        <p>
          Caso você seja uma empresa Lucro Presumido/Real, e está configurando a
          operação fiscal para um estado diferente do estado da sua empresa,
          preencha também as informações da seção{" "}
          <strong>ICMS – UF Destino</strong>. Lembrando que as alíquotas
          informadas neste campo, serão aplicadas para o estado selecionado
          anteriormente, na aba Base. Além disso, as alíquotas informadas devem
          estar de acordo com a <strong>tabela difal</strong>.
        </p>
        <p>
          <strong>Aba IPI para SUFRAMA</strong>
        </p>
        <p>
          Depois disso, vá até a aba IPI para Suframa e preencha a Situação do
          IPI, caso esteja configurando a operação fiscal para um estado
          pertencente à Zona Franca de Manaus.
        </p>
        <p>
          Para o preenchimento das informações de IPI para SUFRAMA, verifique
          com a sua contabilidade a situação e as alíquotas corretas que você
          deve utilizar para emitir NF-e de seus produtos. No exemplo,
          utilizamos a situação “Não Tributada pelo IPI”.
        </p>
        <p>
          <strong>Aba CFOP</strong>
        </p>
        <p>
          Por fim, na aba CFOP você poderá informar um CFOP que corresponde às
          vendas dos produtos na nota fiscal.
        </p>
        <p>
          Novamente será necessário confirmar estas informações com sua
          contabilidade para que não ocorra futuros problemas. Após selecionar o
          CFOP, basta clicar em <strong>Adicionar</strong>.
        </p>
        <p>
          Depois de preencher todos os campos, clique em <strong>Salvar</strong>{" "}
          no canto inferior da tela.
        </p>
        <h4>4. Informar o grupo tributário nos produtos</h4>
        <p>
          O próximo passo a ser realizado é informar o grupo tributário nos
          produtos. Isso é necessário para que o sistema vincule todos os
          produtos aos impostos configurados na etapa 3. Assim, o sistema
          compreende que ao vender o produto e emitir a nota fiscal,
          automaticamente será informado esta tributação.
        </p>
        <p>
          Para isso, acesse o menu lateral <strong>Cadastros</strong>, submenu{" "}
          <strong>Produtos</strong> e <strong>edite o produto</strong> desejado.
          Na tela de edição do produto, clique sobre a aba{" "}
          <strong>Fiscal</strong> e no campo <strong>Grupo Tributário</strong>,
          informe o nome do grupo tributário cadastrado na etapa 2. No nosso
          exemplo, iremos informar o nome Simples Nacional. Por fim, clique em{" "}
          <strong>Salvar</strong>.
        </p>

        <BoxImage src={Image2} />
        <p>
          Você também poderá informar o grupo tributário nos produtos de forma
          rápida através da planilha de edição. Temos um artigo que explica
          certinho como realizar este procedimento. Para saber mais,{" "}
          <a href="/cadastros-basicos/como-informar-o-grupo-tributario-nos-produtos-no-sistema-erp">
            clique aqui
          </a>
          .
        </p>

        <h4>5. Realizar venda e emitir a nota fiscal</h4>
        <p>
          Agora, para que de fato os produtos tenham as tributações configuradas
          na nota fiscal, você terá que realizar uma venda no sistema. Ao criar
          a venda, automaticamente o sistema usará como padrão a categoria de
          venda de <strong>Venda de Materiais e Serviços</strong> para puxar a
          tributação. Mas se você configurou uma nova categoria no sistema, e
          configurou a operação fiscal com outro nome, você deverá informá-la na
          venda para o sistema localizar os tributos corretos.
        </p>
        <p>
          Sendo assim, acesse o menu lateral <strong>Vendas</strong>, submenu{" "}
          <strong>Novo Pedido</strong>. Agora, preencha os dados básicos, como{" "}
          <strong>Cliente</strong>, <strong>Empresa</strong>,{" "}
          <strong>Depósito</strong> e os Produtos que está vendendo. Ainda nesta
          tela, vá até a seção <strong>Informações Gerais</strong>, e informe o
          campo <strong>Categoria</strong>. Neste exemplo, iremos informar a
          categoria <strong>Venda de Materiais e Serviços</strong>, tendo em
          vista que foi esta a operação fiscal que cadastramos no sistema. Mas,
          como esta categoria é a padrão do sistema, não é preciso informá-la em
          todas as vendas, pois o sistema já a reconhece automaticamente.
        </p>
        <p>
          Depois de finalizar sua venda, basta gerar a NF-e e verificar que os
          produtos foram informados na nota com a tributação corretamente que
          foi configurada para ele. Ou seja, o ICMS, PIS, COFINS, IPI e CFOP
          estão todos de acordo com a operação fiscal.
        </p>

        <h4>Mas fique atento a algumas dicas!</h4>
        <ul>
          <li>
            O sistema somente informará as tributações cadastradas se você
            seguir <strong>TODOS OS PASSOS</strong> informados neste artigo.
          </li>
          <li>
            É importante que em todos os produtos cadastrados no seu sistema,
            tenha a informação de qual grupo tributário eles pertencem. Se você
            cadastrar um novo produto, lembre-se de informar o grupo tributário
            dele também.
          </li>
          <li>
            Se você realizar vendas/emitir notas para mais estados do Brasil,
            você terá que configurar novas operações para cada estado. Sendo
            assim, siga novamente o passo 3.
          </li>
          <li>
            Lembre-se de que o cliente informado na venda, deve ter o endereço
            já preenchido no seu cadastro. Assim, o sistema irá buscar a
            operação fiscal correspondente ao estado dele.
          </li>
        </ul>
        <p>
          Agora que você seguiu todas as etapas fundamentais, ao emitir NF-e
          através da venda no Sistema ERP, as informações tributárias de seus
          produtos serão informadas corretamente na nota. Assim, você não terá
          dores de cabeça com a fiscalização fiscal do seu negócio!
        </p>
      </Typography>
    </Container>
  );
};
export default ComoEmitirNFEComProdutosDeMesmaTributacaoNoSistemaERP;
