import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP1.png";
import Image2 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP2.png";
import Image3 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP3.png";
import Image4 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP4.png";
import Image5 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP5.png";
import Image6 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP6.png";
import Image7 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP7.png";
import Image8 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP8.png";
import Image9 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP9.png";
import Image10 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP10.png";
import Image11 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP11.png";
import Image12 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP12.png";
import Image13 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP13.png";
import Image14 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP14.png";
import Image15 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP15.png";
import Image16 from "../../assets/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP16.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como emitir NF-e com produtos de tributações diferentes no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Na sua empresa você vende produtos com diferentes tributações? Então o
          ERP é o sistema ideal para seu negócio. Com ele, a possibilidade de
          todos os produtos de configuração com a trilogia, você também pode
          definir especificações para os grupos de dados além dos produtos. Um
          exemplo disso é quando sua empresa possui produtos apenas com ICMS e
          outros produtos com ICMS ST. Aqui neste artigo vamos usar este exemplo
          para facilitar uma explicação.
        </p>

        <p>
          Para tornar esta explicação clara, vamos elencar mais{" "}
          <strong>5 pontos</strong> principais.
        </p>

        <h4>1. Criar uma categoria de venda</h4>

        <p>
          A{" "}
          <a href="/cadastros-basicos/como-cadastrar-categorias-de-venda-para-operacoes-fiscais-no-sistema-erp">
            categoria de venda
          </a>{" "}
          serve para dar nome à Operação Fiscal que será cadastrada. Por padrão,
          o sistema já possui cadastrada a categoria “
          <strong>Venda de Materiais e Serviços</strong>” para a emissão de
          NF-e. Assim, realizar ao um Pedido/Orçamento e não informar a
          categoria, o sistema utilizará automaticamente a tributação cadastrada
          na operação cadastrada fiscal com este nome. Você pode optar por
          cadastrar novas categorias para as operações fiscais, ao cadastrar um
          novo Pedido/Orçamento, informe-la para que o sistema puxe a tributação
          correta.
        </p>

        <p>
          Se você deseja usar uma categoria de venda padrão do sistema (com o
          nome Venda de Materiais e Serviços), não há necessidade de criar uma
          nova. Porém, se deseja inserir uma nova categoria, acesse o menu
          lateral <strong>Cadastros</strong>, submenu{" "}
          <strong>Categorias de Venda</strong> e clique em <strong>Novo</strong>
          . Assim, se abrirá um modal onde você poderá definir o nome da{" "}
          <strong>Categoria de Venda</strong> e marcar as opções de{" "}
          <strong>Visível nas Operações Fiscais, Movimenta Estoque</strong> e{" "}
          <strong>Movimenta Financeiro</strong>. Por padrão, a opção Visíveis
          nas Operações Fiscais deve ser marcada para o sistema informar os
          tributos na venda. Por fim, clique em <strong>Salvar</strong>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <h4>2. Criar dois grupos tributários</h4>

        <p>
          O próximo passo é criar o Grupo Tributário. Mas antes disso, é
          importante que o Grupo Tributário sirva apenas para vincular uma
          operação fiscal, o que informará mais adiante. Portanto, você poderá
          aplicar o nome que deseja para este grupo. Como neste exemplo alguns
          produtos terão apenas ICMS ST e outros sem ICMS ST, será necessário
          cadastrar dois grupos tributários no sistema: um com o nome{" "}
          <strong>Produtos com ICMS ST</strong> e outro com o nome{" "}
          <strong>Produtos sem ICMS ST</strong>.
        </p>

        <p>
          Agora, para realizar este cadastro, acesse o menu lateral{" "}
          <strong>Fiscal</strong>, submenu <strong>Grupo Tributário</strong> e
          clique em <strong>Novo</strong>. Dessa forma, se abrirá um modal onde
          você poderá definir o nome do <strong>Grupo Tributário</strong>. Neste
          caso, informe o nome <strong>Produtos sem ICMS ST</strong> e clique em{" "}
          <strong>Salvar</strong>. Logo após, um{" "}
          <strong>novo grupo tributário</strong> com o nome{" "}
          <strong>Produtos com ICMS ST</strong> e salve.
        </p>

        <BoxImage src={Image2} />
        <h4>3. Criar uma operação fiscal para cada grupo tributário</h4>

        <p>
          Depois de criar os grupos tributários dos produtos, é o momento de
          definir as tributações que eles terão. Esse registro ocorre por meio
          da criação das operações fiscais, onde você informa o ICMS, IPI, PIS,
          COFINS e CFOP que serão informados automaticamente no momento de
          emitir uma nota fiscal. Como você possui dois tipos de tributação
          diferentes, deve criar duas operações fiscais, uma para cada tipo de
          operação. Ou seja, uma para os produtos com ICMS normal, e outra para
          os produtos que têm ICMS ST.
        </p>

        <h4>Operação fiscal para produtos sem ICMS ST</h4>

        <p>
          Seguindo nosso exemplo, vamos começar a aderir à operação fiscal com
          os dados tributários do <strong>produto sem ICMS ST</strong>.
          Portanto, será necessário acessar o menu lateral{" "}
          <strong>Fiscal</strong>, submenu <strong>Operações Fiscais</strong>.
        </p>

        <p>
          Por padrão, o sistema tem configurado uma operação fiscal com o nome
          Venda de Materiais e Serviços para todos os estados do Brasil. Caso
          você utilize as operações fiscais com este nome, você pode editar a
          operação para o estado que realiza uma emissão de nota fiscal, e
          configurá-las de acordo com as tributações da sua para esta região. Ou
          então você poderá excluir todas as operações pré-definidas e criadas e
          zeradas. Neste exemplo, vamos excluir todas as operações cadastradas
          pelo sistema, e adicionar novas, clicando em <strong>Novo</strong> no
          canto superior da tela.
        </p>

        <p>
          Assim, se abrirá um novo modal onde você poderá definir como
          tributações.
        </p>

        <h4>Base Aba</h4>

        <p>
          No primeiro momento, o sistema apresentará a aba <strong>Base</strong>
          , onde será necessário informar os dados que esta operação fiscal será
          reconhecida pelo sistema. Portanto, com os seguintes dados:
        </p>

        <BoxImage src={Image3} />
        <p>
          <strong>Operação:</strong> selecione uma categoria de venda que
          nomeará esta operação fiscal. Se você usar uma categoria de venda
          padrão do sistema, informe o nome “
          <strong>Venda de Materiais e Serviços</strong>”. Porém, se você criou
          uma nova categoria no passo 1, insira neste campo o nome desta
          categoria;
        </p>

        <p>
          <strong>Grupo Tributário:</strong> selecione o grupo tributário
          anteriormente no passo 2. Assim, no próximo passo, você terá que
          informar este grupo nos seus produtos para que a operação vincule as
          mercadorias com a fiscal. Neste caso tributário, você irá selecionar o
          grupo “<strong>Produtos ICMS ST</strong>“.
        </p>

        <p>
          <strong>Destino – Estado:</strong> neste campo, selecione a qual
          estado esta operação fiscal aplicará os tributados.
        </p>

        <h4>Configurações de PIS e COFINS</h4>

        <p>
          Ainda nesta tela, você poderá definir as informações de PIS e COFINS.
        </p>

        <BoxImage src={Image4} />
        <p>
          Aqui, selecione a situação de cada imposto e como produtos alíquotas
          que terão seus. Mas é importante confirmar estas informações com sua
          contabilidade para que não ocorram problemas futuros. Neste exemplo,
          estamos usando a 07, referente a operação isenta da contribuição
          destes impostos.
        </p>
        <p>
          Você também poderá obter informações importantes no campo
          <b> Informações Complementares.</b>
        </p>
        <h4>Aba ICMS</h4>
        <p>
          Em seguida, vá a aba ICMS para informar dados específicos sobre este
          imposto.
        </p>
        <BoxImage src={Image5} />
        <p>
          O primeiro campo a ser informado será a Situação do ICMS, que também é
          conhecida como <strong>CSOSN</strong> ou <strong>CST</strong>.
          Portanto, para corretamente este dado, você deve consultar com sua
          contabilidade qual é a situação do ICMS correto ser utilizado para a
          emissão de NF-e de seus. No exemplo, utilizamos a situação 102.
        </p>

        <p>
          <strong>Importante!</strong> Normalmente, para produtos sem ICMS ST,
          empresas do Simples Nacional utilizam como situações 101, 103, 300 e
          400. Já do Lucro Presumido/Real utilizam como situações 00, 20, 40,
          41, 50 e 51.
        </p>

        <p>
          Caso você seja uma empresa Lucro Presumido/Real, e está configurando a
          operação fiscal para um estado do estado da sua empresa, também
          diferente como informações da seção <strong>ICMS – UF Destino</strong>
          . Lembrando que as alíquotas informadas neste campo, foram aplicadas
          ao estado selecionado anteriormente, na aba Base. Além disso, as
          alíquotas informadas devem estar de acordo com a{" "}
          <strong>tabela difal</strong>.
        </p>

        <h4>Aba IPI para SUFRAMA</h4>

        <p>
          Depois disso, vá até a aba IPI para Suframa e preencha a Zona do IPI,
          caso esteja configurando a operação fiscal para o estado pertencente a
          Franca de Manaus.
        </p>

        <BoxImage src={Image6} />
        <p>
          Para o preenchimento das informações do IPI para SUFRAMA, sua situação
          deve ser usada com a sua contabilidade a alíquotas corretas que você
          deve para emitir NF-e de situação. No exemplo, utilizamos a situação
          “Não Tributada pelo IPI”.
        </p>
        <h4>Aba CFOP</h4>
        <p>
          Por fim, na aba CFOP você poderá informar um CFOP que corresponde às
          vendas dos produtos na nota fiscal.
        </p>
        <BoxImage src={Image7} />
        <p>
          Novamente será necessário confirmar estas informações com sua
          contabilidade para que não ocorram problemas futuros. Após selecionar
          o CFOP, basta clicar em <strong>Adicionar</strong>.
        </p>

        <p>
          Depois de preencher todos os campos, clique em <strong>Salvar</strong>{" "}
          no canto inferior da tela.
        </p>

        <h4>Operação fiscal para produtos com ICMS ST</h4>

        <p>
          Continuando o exemplo utilizado, depois de cadastrar a operação fiscal
          para produtos sem ICMS ST, chegou o momento de cadastrar outra
          operação para os produtos com ICMS ST. O procedimento é semelhante,
          porém será alterado o nome do grupo tributário para{" "}
          <strong>Produtos com ICMS ST</strong> e também mudará conforme as
          normas utilizadas nos impostos e o CFOP.
        </p>

        <p>
          Portanto, será necessário acessar o menu lateral{" "}
          <strong>Fiscal</strong>, submenu <strong>Operações Fiscais</strong> e
          clicar em <strong>Novo</strong>.
        </p>

        <p>
          Assim, se abrirá um novo modal onde você poderá definir como
          tributações.
        </p>

        <h4>Base Aba</h4>

        <p>
          No primeiro momento, o sistema apresentará a aba <strong>Base</strong>
          , onde será necessário informar os dados que esta operação fiscal será
          reconhecida pelo sistema. Portanto, com os seguintes dados:
        </p>

        <BoxImage src={Image8} />
        <p>
          <strong>Operação</strong>: selecione uma categoria de venda que
          nomeará esta operação fiscal. Se você usar uma categoria de venda
          padrão do sistema, informe o nome “
          <strong>Venda de Materiais e Serviços</strong>”. Porém, se você criou
          uma nova categoria no passo 1, insira neste campo o nome desta
          categoria;
        </p>

        <p>
          <strong>Grupo Tributário</strong>: selecione o grupo tributário
          anteriormente no passo 2. Assim, no próximo passo, você terá que
          informar este grupo nos seus produtos para que a operação vincule as
          mercadorias com a fiscal. Neste caso tributário, você selecionará o
          grupo “<strong>Produtos com ICMS ST</strong>“;
        </p>

        <p>
          <strong>Destino – Estado</strong>: neste campo, selecione a qual
          estado esta operação fiscal aplicará os tributados.
        </p>

        <h4>Configurações de PIS e COFINS</h4>

        <p>
          Ainda nesta tela, você poderá definir as informações de PIS e COFINS.
        </p>

        <BoxImage src={Image9} />
        <p>
          Aqui, selecione a situação de cada imposto e como produtos alíquotas
          que terão seus. Mas é importante confirmar estas informações com sua
          contabilidade para que não ocorram problemas futuros. Neste exemplo,
          estamos usando a 07, referente a operação isenta da contribuição
          destes impostos.
        </p>
        <p>
          Você também poderá obter informações importantes no campo{" "}
          <b>Informações Complementares.</b>
        </p>
        <h4>Aba ICMS</h4>
        <p>
          Em seguida, vá a aba ICMS para informar dados específicos sobre este
          imposto.
        </p>
        <BoxImage src={Image10} />
        <BoxImage src={Image11} />
        <p>
          O primeiro campo a ser informado será a Situação do ICMS, que também é
          conhecida como <strong>CSOSN</strong> ou <strong>CST</strong>.
          Portanto, para corretamente esse dado, você deve consultar com sua
          contabilidade qual é a situação do ICMS correto ser utilizado para a
          emissão de NF-e de seus. No exemplo, utilizamos a situação 201.
        </p>

        <p>
          <strong>Importante!</strong> Normalmente, para produtos com ICMS ST,
          as empresas do regime de purificação do Simples Nacional utilizam como
          situações 201, 202, 203, 500 ou 900. Já as empresas do Lucro
          Presumido/Real utilizam como situações 10, 30, 60, 70 ou 90.
        </p>

        <p>
          Caso você seja uma empresa Lucro Presumido/Real, e está configurando a
          operação fiscal para um estado do estado da sua empresa, também
          diferente como informações da seção <strong>ICMS – UF Destino</strong>
          . Lembrando que as alíquotas informadas neste campo, foram aplicadas
          ao estado selecionado anteriormente, na aba Base. Além disso, as
          alíquotas informadas devem estar de acordo com a{" "}
          <strong>tabela difal</strong>.
        </p>

        <h4>Aba IPI para SUFRAMA</h4>

        <p>
          Depois disso, vá até a aba IPI para Suframa e preencha a Zona do IPI,
          caso esteja configurando a operação fiscal para o estado pertencente a
          Franca de Manaus.
        </p>

        <BoxImage src={Image12} />
        <p>
          Para o preenchimento das informações do IPI para SUFRAMA, sua situação
          deve ser usada com a sua contabilidade a alíquotas corretas que você
          deve para emitir NF-e de situação. No exemplo, utilizamos a situação
          “Não Tributada pelo IPI”.
        </p>
        <h4>Aba CFOP</h4>
        <p>
          Por fim, na aba CFOP você poderá informar um CFOP que corresponde às
          vendas dos produtos na nota fiscal.
        </p>
        <BoxImage src={Image13} />
        <p>
          Novamente será necessário confirmar estas informações com sua
          contabilidade para que não ocorram problemas futuros. Após selecionar
          o CFOP, basta clicar em <strong>Adicionar</strong>.
        </p>

        <p>
          Depois de preencher todos os campos, clique em <strong>Salvar</strong>{" "}
          no canto inferior da tela.
        </p>

        <h4>4. Informar cada grupo tributário nos produtos correspondentes</h4>

        <p>
          O próximo passo a ser realizado é informar o grupo tributário nos
          produtos. Ou seja, nos produtos que não possuem ICMS ST, você deve
          informar o grupo tributário <strong>"Produtos sem ICMS ST"</strong>.
          Já nos produtos que possuem ICMS ST, você deve informar o grupo
          tributário <strong>"Produtos com ICMS ST"</strong>. Isso é necessário
          para que o sistema vincule todos os produtos aos impostos configurados
          na etapa 3. Assim, o sistema compreende que ao vender o produto e
          emitir uma nota fiscal, automaticamente será informado esta
          tributação.
        </p>

        <p>
          Para isso, acesse o menu lateral <strong>Cadastros</strong>, submenu{" "}
          <strong>Produtos</strong> e <strong>edite o produto</strong> que não
          possui ICMS ST. Na tela de edição do produto, clique sobre a aba{" "}
          <strong>Fiscal</strong> e no campo <strong>Grupo Tributário</strong>,
          informe o nome do grupo registrado na etapa 2. No nosso exemplo,
          iremos informar o nome de produtos sem ICMS ST. Por fim, clique em{" "}
          <strong>Salvar</strong>.
        </p>
        <BoxImage src={Image14} />
        <p>
          Já no produto que possui ICMS ST, é necessário informar o grupo
          tributário "Produtos com ICMS ST". Portanto, acesse o menu lateral{" "}
          <strong>Cadastros</strong>, submenu <strong>Produtos</strong> e{" "}
          <strong>edite o produto</strong> que possui ICMS ST. Na tela de edição
          do produto, clique sobre a aba <strong>Fiscal</strong> e no campo{" "}
          <strong>Grupo Tributário</strong>, informe o nome do grupo registrado
          na etapa 2. No nosso exemplo, iremos informar o nome{" "}
          <strong>Produtos com ICMS ST</strong>. Por fim, clique em{" "}
          <strong>Salvar</strong>.
        </p>
        <BoxImage src={Image15} />
        <p>
          Você também poderá o grupo tributário nos produtos de forma rápida
          através da planilha de edição. Temos um artigo que explica certinho
          como realizar esta cirurgia. Para saber mais,{" "}
          <a href="/cadastros-basicos/como-informar-o-grupo-tributario-nos-produtos-no-sistema-erp">
            clique aqui
          </a>
          .
        </p>

        <h5>5. Realizar venda e emitir nota fiscal</h5>

        <p>
          Agora, para que de fato os produtos tenham como tributações
          configuradas na nota fiscal, você terá que realizar uma venda. Ao
          criar uma venda, automaticamente usará o sistema como padrão de
          categoria de venda de nome Venda de Materiais e Serviços para puxar o
          sistema de cálculo. Mas se você configurou uma nova categoria no
          sistema, e configurou a operação fiscal com outro nome, você deve
          informa-la na venda para o sistema localizar os tributos corretos.
        </p>

        <p>
          Sendo assim, acesse o menu lateral <strong>Vendas</strong>, submenu{" "}
          <strong>Novo Pedido</strong>. Agora, os dados básicos, como Cliente,
          Empresa, Depósito e os Produtos que está vendendo. Lembrando que na
          mesma venda você poderá inserir produtos com ST e sem ST.
        </p>

        <p>
          Ainda nesta tela, vá até a seção <strong>Informações Gerais</strong>,
          e informe o <strong>Categoria</strong>. Neste exemplo, iremos para a
          categoria Venda de Materiais e Serviços, tendo em vista que foi esta a
          operação fiscal que cadastramos no sistema. Mas, como esta categoria é
          o padrão do sistema, não é preciso informa-la em todas as vendas, pois
          o sistema já é reconhecido automaticamente.
        </p>
        <BoxImage src={Image16} />
        <p>
          Depois de finalizar sua venda, basta a NF-e verificar se os produtos
          informados foram gerados na nota com a corretamente que foi
          configurado para ele. Ou seja, o ICMS, PIS, COFINS, IPI e CFOP estão
          todos de acordo com a operação fiscal, para cada produto.
        </p>

        <h5>Mas fique atento à algumas dicas!</h5>
        <ul>
          <li>
            O sistema somente á como tributações cadastradas se você seguirá
            TODOS OS PASSOS informados neste artigo.
          </li>
          <li>
            É importante que em todos os produtos cadastrados no seu sistema,
            tenha uma informação de qual grupo tributário eles pertencem. Se
            você cadastrar um novo produto, lembre-se de informar o grupo
            tributário dele também.
          </li>
          <li>
            Se você realizar vendas/emitir notas para mais estados do Brasil,
            você terá que configurar novas operações para cada estado. Sendo
            assim, siga novamente o passo 3.
          </li>
          <li>
            Lembre-se de que o cliente informado na, deve ter o endereço já
            preenchido no seu cadastro. Assim, o sistema irá buscar a operação
            fiscal correspondente ao estado dele.
          </li>
        </ul>

        <p>
          Agora que você fornece informações correspondentes como etapas
          fundamentais, ao emitir NF-e através da venda no ERP, como os seus
          produtos enviados corretamente na nota. Assim, você nunca terá
          problemas com a fiscalização fiscal do seu negócio!
        </p>
      </Typography>
    </Container>
  );
};
export default ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP;
