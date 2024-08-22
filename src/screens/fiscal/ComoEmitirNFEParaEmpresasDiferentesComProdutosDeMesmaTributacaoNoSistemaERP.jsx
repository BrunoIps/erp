import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP1.png";
import Image2 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP2.png";
import Image3 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP3.png";
import Image4 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP4.png";
import Image5 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP5.png";
import Image6 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP6.png";
import Image7 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP7.png";
import Image8 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP8.png";
import Image9 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP9.png";
import Image10 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP10.png";
import Image11 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP11.png";
import Image12 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP12.png";
import Image13 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP13.png";
import Image14 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP14.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP =
  () => {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <TitleComponent>
          Como emitir NF-e para empresas diferentes com produtos de mesma
          tributação no Sistema ERP
        </TitleComponent>

        <Typography variant="body1" component="div" sx={{ mt: 2 }}>
          <p>
            Sabia que você pode gerenciar várias empresas na sua licença do
            Sistema ERP, e configurar a tributação das notas fiscais de cada uma
            delas? Se você tem duas empresas, uma do{" "}
            <strong>Simples Nacional</strong> e outra do{" "}
            <strong>Lucro Real</strong> e ambas vendem os mesmos produtos, porém
            as tributações deles não variam, acompanhe este artigo que vamos te
            ajudar na configuração das operações fiscais de cada uma delas.
          </p>

          <p>
            Para facilitar esta explicação, vamos elencar os passos necessários
            que devem ser configurados no seu sistema.
          </p>

          <h4>1. Criar duas categorias de venda</h4>

          <p>
            No primeiro momento, vamos falar sobre a{" "}
            <a href="https://www.exemplo.com/cadastros-basicos/como-cadastrar-categorias-de-venda-para-operacoes-fiscais-no-sistema-erp">
              categoria de venda
            </a>
            . Ela serve para dar nome à Operação Fiscal que será cadastrada com
            as tributações dos seus produtos. Por padrão, o sistema já possui
            cadastrada a categoria{" "}
            <strong>“Venda de Materiais e Serviços”</strong> para a emissão de
            NF-e. Assim, ao realizar um Pedido/Orçamento e não informar a
            categoria, o sistema utilizará automaticamente a tributação
            cadastrada na operação fiscal cadastrada como{" "}
            <strong>“Venda de Materiais e Serviços”</strong>. Sendo assim, você
            poderá utilizar esta categoria padrão para a empresa mais utilizada.
            Neste exemplo, vamos utilizar esta categoria para a empresa do
            Simples Nacional.
          </p>

          <p>
            Já para a empresa do Lucro Real, você poderá criar uma nova
            categoria para utilizar nas operações fiscais, onde irá configurar
            as tributações para esta empresa.
          </p>

          <p>
            Resumidamente, a empresa <strong>Simples Nacional</strong>, irá
            utilizar a categoria{" "}
            <strong>“Venda de Materiais e Serviços”</strong> e a empresa{" "}
            <strong>Lucro Real</strong>, utilizará a categoria{" "}
            <strong>“Venda de Produtos Lucro Real”</strong>.
          </p>

          <p>
            Mas para cadastrar esta segunda categoria de venda, acesse o menu
            lateral <strong>Cadastros</strong>, submenu{" "}
            <strong>Categorias de Venda</strong> e clique em{" "}
            <strong>Novo</strong>. Assim, se abrirá um modal onde você poderá
            definir o nome da <strong>Categoria de Venda</strong> (Venda de
            Produtos Lucro Real) e marcar as opções de{" "}
            <strong>
              Visível nas Operações Fiscais, Movimenta Estoque e Movimenta
              Financeiro
            </strong>
            . Por padrão, a opção Visíveis nas Operações Fiscais deve ser
            marcada para o sistema informar os tributos na venda. Por fim,
            clique em <strong>Salvar</strong>.
          </p>

          <BoxImage src={Image1} />
        </Typography>
        <Typography variant="body1" component="div" sx={{ mt: 2 }}>
          <h4>2. Criar o grupo tributário</h4>

          <p>
            O próximo passo é criar o Grupo Tributário. Mas antes disso, é
            importante informar que o Grupo Tributário serve apenas para
            vincular o produto a uma operação fiscal, que veremos mais adiante.
            Portanto, você poderá aplicar o nome que deseja para este grupo,
            visto que todos os produtos possuem a mesma tributação (sem variar
            de ICMS e ICMS ST, por exemplo). Neste exemplo, vamos cadastrar o
            grupo tributário como <strong>Venda de Produtos</strong>.
          </p>

          <p>
            Agora, para realizar este cadastro, acesse o menu lateral{" "}
            <strong>Fiscal</strong>, submenu <strong>Grupo Tributário</strong> e
            clique em <strong>Novo</strong>. Dessa forma, se abrirá um modal
            onde você poderá definir o nome do <strong>Grupo Tributário</strong>
            . Por fim, clique em <strong>Salvar</strong>.
          </p>

          <BoxImage src={Image2} />
          <h4>3. Criar uma operação fiscal para cada grupo tributário</h4>

          <p>
            Depois de criar os grupos tributários dos produtos, é o momento de
            definir as tributações que eles terão. Esse registro ocorre por meio
            da criação das operações fiscais, onde você informa o ICMS, IPI,
            PIS, COFINS e CFOP que serão informados automaticamente no momento
            de emitir uma nota fiscal. Como você possui dois tipos de tributação
            diferentes, deve criar duas operações fiscais, uma para cada tipo de
            operação. Ou seja, uma para os produtos com ICMS normal, e outra
            para os produtos que têm ICMS ST.
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
            configurá-las de acordo com as tributações da sua para esta região.
            Ou então você poderá excluir todas as operações pré-definidas e
            criadas e zeradas. Neste exemplo, vamos excluir todas as operações
            cadastradas pelo sistema, e adicionar novas, clicando em{" "}
            <strong>Novo</strong> no canto superior da tela.
          </p>

          <p>
            Assim, se abrirá um novo modal onde você poderá definir como
            tributações.
          </p>

          <h4>Base Aba</h4>

          <p>
            No primeiro momento, o sistema apresentará a aba{" "}
            <strong>Base</strong>, onde será necessário informar os dados que
            esta operação fiscal será reconhecida pelo sistema. Portanto, com os
            seguintes dados:
          </p>

          <BoxImage src={Image3} />
          <p>
            <strong>Operação:</strong> selecione a categoria de venda que
            nomeará esta operação fiscal para a empresa do Simples Nacional.
            Neste exemplo, determinamos que a empresa do Simples irá possuir a
            categoria padrão com o nome{" "}
            <strong>Venda de Materiais e Serviços</strong>;
          </p>
          <p>
            <strong>Grupo Tributário:</strong> selecione o grupo tributário
            cadastrado anteriormente no passo 2. Assim, no próximo passo, você
            terá que informar este grupo nos seus produtos para que o sistema
            vincule as mercadorias com a operação fiscal;
          </p>
          <p>
            <strong>Destino – Estado:</strong> neste campo, selecione a qual
            estado esta operação fiscal aplicará os tributados.
          </p>

          <h4>Definições de PIS e COFINS</h4>

          <p>
            Ainda nesta tela, você poderá definir as informações de PIS e
            COFINS.
          </p>

          <BoxImage src={Image4} />
          <p>
            Aqui, selecione a situação de cada imposto e as respectivas
            alíquotas que terão seus produtos. Mas é importante confirmar estas
            informações com sua contabilidade para que não ocorra futuros
            problemas. Neste exemplo, estamos utilizando a situação 07,
            referente a operação isenta da contribuição destes impostos.
          </p>

          <p>
            Você poderá também deixar informações importantes no campo
            <b> Informações Complementares.</b>
          </p>
          <h4>Aba ICMS</h4>
          <p>
            Em seguida, vá até a aba ICMS para informar dados específicos sobre
            este imposto.
          </p>

          <BoxImage src={Image5} />
          <p>
            O primeiro campo a ser informado será a Situação do ICMS, que também
            é conhecida como <strong>CSOSN</strong> ou <strong>CST</strong>.
            Portanto, para informar corretamente este dado, você deverá
            consultar com sua contabilidade qual é a situação do ICMS correta a
            ser utilizada para a emissão de NF-e de seus produtos. No exemplo,
            utilizamos a situação 102.
          </p>

          <p>
            <strong>Importante!</strong> Normalmente, empresas do regime de
            apuração Simples Nacional utilizam as situações 101, 102, 103, 201,
            202, 203, 300, 400, 500 ou 900.
          </p>

          <p>
            Logo abaixo, o sistema apresentará a seção{" "}
            <strong>ICMS – UF Destino</strong>, que se torna de preenchimento
            opcional por empresas optantes pelo Simples Nacional. Lembrando que
            as alíquotas informadas neste campo, serão aplicadas para o estado
            selecionado anteriormente, na aba Base. Além disso, as alíquotas
            informadas devem estar de acordo com a <strong>tabela difal</strong>{" "}
            e devem ser solicitadas a sua contabilidade.
          </p>

          <h4>Aba IPI para SUFRAMA</h4>

          <p>
            Depois disso, vá até a aba IPI para Suframa e preencha a Situação do
            IPI, caso esteja configurando a operação fiscal para um estado
            pertencente à Zona Franca de Manaus.
          </p>

          <BoxImage src={Image6} />
          <p>
            Você também poderá informar o grupo tributário nos produtos de forma
            rápida através da planilha de edição. Temos um artigo que explica
            certinho como realizar este procedimento. Para saber mais, clique
            aqui.
          </p>
          <h4>Aba CFOP</h4>
          <p>
            Por fim, na aba CFOP você poderá informar um CFOP que corresponde às
            vendas dos produtos na nota fiscal.
          </p>
          <BoxImage src={Image7} />
          <p>
            Novamente será necessário confirmar estas informações com sua
            contabilidade para que não ocorram problemas futuros. Após
            selecionar o CFOP, basta clicar em <strong>Adicionar</strong>.
          </p>

          <p>
            Depois de preencher todos os campos, clique em{" "}
            <strong>Salvar</strong> no canto inferior da tela.
          </p>
          <h4>Operação fiscal para produtos da empresa Lucro Real</h4>

          <p>
            Depois de configurar as tributações que terão os produtos ao vender
            pela empresa do Simples, é chegado o momento de configurar a
            tributação dos produtos de acordo com a empresa do Lucro.
          </p>

          <p>
            Para isto, acesse o menu lateral <strong>Fiscal</strong>, submenu{" "}
            <strong>Operações Fiscais</strong> e clique em <strong>Novo</strong>
            , no canto superior da tela.
          </p>

          <p>
            Assim, se abrirá um novo modal onde você poderá definir as
            tributações.
          </p>

          <h4>Aba Base</h4>

          <p>
            No primeiro momento, o sistema apresentará a aba Base, onde será
            necessário informar os dados que esta operação fiscal será
            reconhecida pelo sistema. Portanto, preencha os seguintes dados:
          </p>

          <BoxImage src={Image8} />
          <p>
            <strong>Operação:</strong> selecione a categoria de venda que
            nomeará esta operação fiscal. Conforme cadastrado no passo 1, para a
            empresa Lucro Real a categoria utilizada será{" "}
            <strong>Venda de Produtos Lucro Real</strong>;
          </p>

          <p>
            <strong>Grupo Tributário:</strong> selecione o grupo tributário
            cadastrado anteriormente no passo 2. Assim, no próximo passo, você
            terá que informar este grupo nos seus produtos para que o sistema
            vincule as mercadorias com a operação fiscal;
          </p>

          <p>
            <strong>Destino – Estado:</strong> neste campo, selecione a qual
            estado esta operação fiscal aplicará os tributados.
          </p>

          <h4>Definições de PIS e COFINS</h4>

          <p>
            Ainda nesta tela, você poderá definir as informações de PIS e
            COFINS.
          </p>

          <p>
            Aqui, selecione a situação de cada imposto e as respectivas
            alíquotas que terão seus produtos. Mas é importante confirmar estas
            informações com sua contabilidade para que não ocorram futuros
            problemas. Neste exemplo, estamos utilizando a situação 07,
            referente à operação isenta da contribuição destes impostos.
          </p>

          <p>
            Você poderá também deixar informações importantes no campo{" "}
            <strong>Informações Complementares</strong>.
          </p>

          <h4>Aba ICMS</h4>

          <p>
            Em seguida, vá até a aba ICMS para informar dados específicos sobre
            este imposto.
          </p>

          <BoxImage src={Image9} />
          <p>
            O primeiro campo a ser informado será a Situação do ICMS, que também
            é conhecida como <strong>CSOSN</strong> ou <strong>CST</strong>.
            Portanto, para informar corretamente este dado, você deverá
            consultar com sua contabilidade qual é a situação do ICMS correta a
            ser utilizada para a emissão de NF-e de seus produtos. No exemplo,
            utilizamos a situação 40.
          </p>

          <p>
            <strong>Importante!</strong> Normalmente, empresas do regime de
            apuração Lucro Presumido/Real utilizam as situações 00, 10, 20, 30,
            40, 41, 50, 51, 60, 70 ou 90.
          </p>

          <p>
            Para empresas do Lucro Presumido/Real, que estão configurando a
            operação fiscal para um estado diferente do estado da sua empresa,
            deverá ser preenchido também as informações da seção{" "}
            <strong>ICMS – UF Destino</strong>. Lembrando que as alíquotas
            informadas neste campo, serão aplicadas para o estado selecionado
            anteriormente, na aba Base. Além disso, as alíquotas informadas
            devem estar de acordo com a <strong>tabela difal</strong>.
          </p>

          <h4>Aba IPI para SUFRAMA</h4>

          <p>
            Depois disso, vá até a aba IPI para Suframa e preencha a Situação do
            IPI, caso esteja configurando a operação fiscal para um estado
            pertencente à Zona Franca de Manaus.
          </p>

          <BoxImage src={Image10} />
          <p>
            Para o preenchimento das informações do IPI para SUFRAMA, verifique
            com a sua contabilidade a situação a as alíquotas corretas que você
            deve utilizar para emitir NF-e de seus produtos. No exemplo,
            utilizamos a situação “Não Tributada pelo IPI”.
          </p>
          <h4>Aba CFOP</h4>
          <p>
            Por fim, na aba CFOP você poderá informar um CFOP que corresponde as
            vendas dos produtos na nota fiscal.
          </p>
          <BoxImage src={Image11} />
          <p>
            Novamente será necessário confirmar estas informações com sua
            contabilidade para que não ocorram futuros problemas. Após
            selecionar o CFOP, basta clicar em <strong>Adicionar</strong>.
          </p>

          <p>
            Depois de preencher todos os campos, clique em{" "}
            <strong>Salvar</strong> no canto inferior da tela.
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
            <strong>Produtos</strong> e <strong>edite o produto</strong>{" "}
            desejado. Na tela de edição do produto, clique sobre a aba{" "}
            <strong>Fiscal</strong> e no campo <strong>Grupo Tributário</strong>
            , informe o nome do grupo tributário cadastrado na etapa 2. No nosso
            exemplo, iremos informar o nome <strong>Venda de Produtos</strong>.
            Por fim, clique em <strong>Salvar</strong>.
          </p>

          <BoxImage src={Image12} />
          <p>
            Você também poderá informar o grupo tributário nos produtos de forma
            rápida através da planilha de edição. Temos um artigo que explica
            certinho como realizar este procedimento. Para saber mais,{" "}
            <a href="/cadastros-basicos/como-informar-o-grupo-tributario-nos-produtos-no-sistema-erp">
              clique aqui.
            </a>
          </p>

          <h4>5. Realizar venda e emitir a nota fiscal</h4>

          <p>
            Agora, para que de fato os produtos tenham as tributações
            configuradas na nota fiscal, você terá que realizar uma venda no
            sistema.
          </p>

          <p>
            Por padrão, ao criar a venda, automaticamente o sistema usará como
            padrão a categoria <strong>Venda de Materiais e Serviços</strong>{" "}
            para puxar a tributação. Mas lembre-se de que esta categoria foi
            configurada para a empresa do Simples Nacional. Ou seja, para vendas
            com a empresa <strong>Simples Nacional</strong>, você não precisará
            informar categoria na venda, pois o sistema puxará os tributos de
            forma automática (isso ocorre pois está sendo utilizada a categoria
            padrão do sistema “Venda de Materiais e Serviços”). Mas caso você
            tenha cadastrado outro nome para a categoria da operação fiscal para
            a empresa do Simples, precisará informá-la no campo “categoria” da
            venda).
          </p>

          <p>
            Já para as vendas da empresa <strong>Lucro Real</strong>, você
            precisará <strong>OBRIGATORIAMENTE</strong> informar a categoria{" "}
            <strong>Venda de Produtos Lucro Real</strong> nas vendas, para que o
            sistema puxe as tributações corretas configuradas para esta
            operação.
          </p>

          <p>
            Sendo assim, para gerar a venda e nota para a empresa do Simples,
            acesse o menu lateral <strong>Vendas</strong>, submenu{" "}
            <strong>Novo Pedido</strong>. Agora, preencha os dados básicos, como
            Cliente, Empresa do Simples Nacional, Depósito e os Produtos que
            está vendendo. Ao ir até a seção <strong>Informações Gerais</strong>
            , você verá o campo <strong>Categoria</strong>, onde você poderá
            preencher com o nome Venda de Materiais e Serviços, ou poderá deixar
            em branco para esta empresa. Isto porque o sistema já a reconhece
            automaticamente. Dessa forma, basta finalizar sua venda normalmente,
            e emitir a NF-e para ela. Com isso, você verá que na edição da nota
            fiscal os produtos estarão com as tributações corretas que foram
            configuradas na operação fiscal.
          </p>

          <BoxImage src={Image13} />
          <p>
            Já para a venda/emissão da nota pela empresa do Lucro Real, você
            terá que <strong>OBRIGATORIAMENTE</strong> informar a categoria em
            que as tributações foram configuradas. Então, acesse o menu lateral{" "}
            <strong>Vendas</strong>, submenu <strong>Novo Pedido</strong>, e
            assim, preencha o Cliente, Empresa do Lucro, Depósito e os Produtos
            que estão sendo vendidos. Depois disso, vá até a seção{" "}
            <strong>Informações Gerais</strong> e informe o campo{" "}
            <strong>Categoria</strong>. Neste exemplo, iremos informar a
            categoria Venda de Produtos Lucro Real, tendo em vista que foi esta
            a operação fiscal que cadastramos no sistema. Depois de finalizar
            sua venda, basta gerar a NF-e e verificar que os produtos foram
            informados na nota com a tributação corretamente que foi configurada
            para ele. Ou seja, o ICMS, PIS, COFINS, IPI e CFOP estão todos de
            acordo com a operação fiscal.
          </p>

          <BoxImage src={Image14} />
          <p>
            <strong>Mas fique atento à algumas dicas!</strong>
          </p>
          <ul>
            <li>
              O sistema somente informará as tributações cadastradas se você
              seguir TODOS OS PASSOS informados neste artigo.
            </li>
            <li>
              É importante que em todos os produtos cadastrados no seu sistema,
              tenha a informação de qual grupo tributário eles pertencem. Se
              você cadastrar um novo produto, lembre-se de informar o grupo
              tributário dele também.
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
            através da venda no Sistema ERP, as informações tributárias dos seus
            produtos serão informadas corretamente na nota. Assim, você nunca
            terá problemas com a fiscalização fiscal do seu negócio!
          </p>
        </Typography>
      </Container>
    );
  };
export default ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP;
