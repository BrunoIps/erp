import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP1.png";
import Image2 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP2.png";
import Image3 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP3.png";
import Image4 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP4.png";
import Image5 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP5.png";
import Image6 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP6.png";
import Image7 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP7.png";
import Image8 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP8.png";
import Image9 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP9.png";
import Image10 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP10.png";
import Image11 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP11.png";
import Image12 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP12.png";
import Image13 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP13.png";
import Image14 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP14.png";
import Image15 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP15.png";
import Image16 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP16.png";
import Image17 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP17.png";
import Image18 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP18.png";
import Image19 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP19.png";
import Image20 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP20.png";
import Image21 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP21.png";
import Image22 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP22.png";
import Image23 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP23.png";
import Image24 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP24.png";
import Image25 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP25.png";
import Image26 from "../../assets/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP26.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP =
  () => {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <TitleComponent>
          Como emitir NF-e para empresas diferentes com produtos de tributações
          diferentes no Sistema ERP
        </TitleComponent>

        <Typography variant="body1" component="div" sx={{ mt: 2 }}>
          <p>
            Sabia que você pode gerenciar várias empresas no seu Sistema ERP, e
            configurar a tributação das notas de cada uma delas?
          </p>

          <p>
            Por exemplo, você possui duas empresas, uma do{" "}
            <strong>Simples Nacional</strong> e outra do{" "}
            <strong>Lucro Real</strong> e ambas vendem os mesmos produtos.
            Porém, alguns produtos possuem apenas ICMS e outros possuem ICMS ST.
            Para saber como registrar a receita destes produtos para suas duas,
            acompanhe este artigo na configuração das operações fiscais de cada
            uma delas.
          </p>

          <p>
            Para facilitar esta explicação, vamos elencar os sistemas de
            segurança que devem ser configurados.
          </p>

          <h3>1. Criar duas categorias de venda</h3>

          <p>
            No primeiro momento, vamos falar sobre a{" "}
            <a href="https://www.exemplo.com/cadastros-basicos/como-cadastrar-categorias-de-venda-para-operacoes-fiscais-no-sistema-erp">
              categoria de venda
            </a>
            . Ela serve para dar nome à Operação Fiscal que será cadastrada com
            as tributações dos seus produtos. Por padrão, o sistema já possui
            cadastrada a categoria{" "}
            <strong>“Venda de Materiais e Serviços”</strong> para a emissão de
            NF-e. Assim, realizar ao um Pedido/Orçamento e não informar a
            categoria, o sistema utilizará automaticamente a tributação
            cadastrada na operação cadastrada como{" "}
            <strong>“Venda de Materiais e Serviços”</strong>. Sendo assim, você
            poderá utilizar esta categoria padrão para a empresa mais utilizada.
            Neste exemplo, vamos usar esta categoria para a empresa do Simples
            Nacional.
          </p>

          <p>
            Já para a empresa do Lucro Real, você poderá criar uma nova
            categoria para utilizar nas operações fiscais, onde irá configurar
            as tributações para esta empresa.
          </p>

          <p>
            Resumidamente, a empresa <strong>Simples Nacional</strong> irá
            utilizar a categoria{" "}
            <strong>“Venda de Materiais e Serviços”</strong> e a empresa{" "}
            <strong>Lucro Real</strong>, utilizará a situação{" "}
            <strong>“Venda de Produtos Lucro Real”</strong>.
          </p>

          <p>
            Mas para cadastrar esta segunda categoria de venda, acesse o menu
            lateral <strong>Cadastros</strong>, submenu{" "}
            <strong>Categorias de Venda</strong> e clique em{" "}
            <strong>Novo</strong>. Assim, se abrirá um modal onde você poderá
            definir o nome da <strong>Categoria de Venda</strong> (Venda de
            Produtos Lucro Real) e marcar como opções de{" "}
            <strong>Visível nas Operações Fiscais</strong>,{" "}
            <strong>Movimenta Estoque</strong> e{" "}
            <strong>Movimenta Financeiro</strong>. Por padrão, a opção Visíveis
            nas Operações Fiscais deve ser marcada para o sistema informar os
            tributos na venda. Por fim, clique em <strong>Salvar</strong>.
          </p>

          <BoxImage src={Image1} />
          <h3>2. Criar dois grupos tributários</h3>

          <p>
            O próximo passo é criar o Grupo Tributário. Mas antes disso, é
            importante que o Grupo Tributário sirva apenas para vincular uma
            operação fiscal, o que informará mais adiante. Portanto, você poderá
            aplicar o nome que deseja para este grupo. Como neste exemplo alguns
            produtos terão apenas ICMS ST e outros ICMS ST, será necessário
            cadastrar dois grupos tributários no sistema: um com o nome{" "}
            <strong>Produtos com ICMS ST</strong> e outro com o nome{" "}
            <strong>Produtos sem ICMS ST</strong>.
          </p>

          <p>
            Agora, para realizar este cadastro, acesse o menu lateral{" "}
            <strong>Fiscal</strong>, submenu <strong>Grupo Tributário</strong> e
            clique em <strong>Novo</strong>. Dessa forma, se abrirá um modal
            onde você poderá definir o nome do <strong>Grupo Tributário</strong>
            . Neste caso, informe o nome <strong>Produtos sem ICMS ST</strong> e
            clique em <strong>Salvar</strong>. Logo após, um{" "}
            <strong>novo grupo tributário</strong> com o nome{" "}
            <strong>Produtos com ICMS ST</strong> e salve.
          </p>
          <BoxImage src={Image2} />
          <h3>3. Criar uma operação fiscal</h3>

          <p>
            Depois de criar os grupos tributários dos produtos, é o momento de
            definir as tributações que eles terão. Esse registro ocorre por meio
            da criação das operações fiscais, onde você informa o ICMS, IPI,
            PIS, COFINS e CFOP que serão informados automaticamente no momento
            de emitir uma nota fiscal. Como você possui dois tipos de tributação
            diferentes para cada empresa, deve criar duas operações fiscais para
            cada empresa.
          </p>

          <p>
            <strong>Resumo:</strong>
          </p>

          <ul>
            <li>
              Para a empresa <strong>Simples Nacional</strong>, você aderiu à
              primeira operação fiscal com o nome de{" "}
              <strong>“Venda de Materiais e Serviços”</strong> e o grupo como{" "}
              <strong>“Produtos sem ICMS ST”</strong>, e a tributação para estes
              produtos sem ICMS ST. Já a segunda operação fiscal será cadastrada
              com o nome <strong>“Venda de Materiais e Serviços”</strong> e o
              grupo tributário como <strong>“Produtos com ICMS ST”</strong>, com
              as tributações dos produtos com ICMS ST.
            </li>
            <li>
              Mas para a empresa <strong>Lucro Real</strong>, você assinou a
              primeira operação fiscal com o nome de{" "}
              <strong>“Venda de Produtos Lucro Real”</strong> e o grupo
              tributário como <strong>“Produtos sem ICMS ST”</strong>, e
              informar a tributação para produtos sem ICMS ST. Já a segunda
              operação fiscal será cadastrada com o nome{" "}
              <strong>“Venda de Produtos Lucro Real”</strong> e o grupo
              tributário como <strong>“Produtos com ICMS ST”</strong>, com as
              tributações dos produtos com ICMS ST.
            </li>
          </ul>

          <p>Sabendo disso, vamos ver como se cadastra na prática?</p>

          <h4>
            Operação fiscal da empresa Simples Nacional para os produtos sem
            ICMS ST
          </h4>

          <p>
            Seguindo nosso exemplo, vamos começar a aderir à operação fiscal com
            os dados tributários dos <strong>produtos sem ICMS ST</strong>.
            Portanto, será necessário acessar o menu lateral{" "}
            <strong>Fiscal</strong>, submenu <strong>Operações Fiscais</strong>.
          </p>

          <p>
            Por padrão, o sistema tem configurado uma operação fiscal com o nome
            Venda de Materiais e Serviços para todos os estados do Brasil. Caso
            você utilize as operações fiscais com este nome, você pode editar a
            operação para o estado que realiza uma emissão de nota fiscal, e
            configurar as tributações de acordo com as tributações da sua para
            esta região. Ou então você poderá excluir todas as operações
            pré-definidas e criadas e zeradas. Neste exemplo, vamos excluir
            todas as operações cadastradas pelo sistema, e adicionar novas,
            clicando em <strong>Novo</strong> no canto superior da tela.
          </p>

          <p>
            Assim, se abrirá um novo modal onde você poderá definir como
            tributações.
          </p>

          <h5>Base Aba</h5>

          <p>
            No primeiro momento, o sistema apresentará a aba Base, onde será
            necessário informar os dados que esta operação fiscal será
            reconhecida pelo sistema. Portanto, com os seguintes dados:
          </p>

          <BoxImage src={Image3} />
          <p>
            <strong>
              Selecione uma categoria de venda que nomeará esta operação fiscal
              para a Operação
            </strong>{" "}
            do Simples Nacional. Neste exemplo, determinamos que a empresa do
            Simples irá possuir uma categoria padrão com o nome{" "}
            <strong>Materiais e Serviços</strong>;
          </p>

          <p>
            <strong>Grupo Tributário</strong>: selecione o grupo tributário
            anteriormente no passo 2. Assim, no próximo passo, você terá que
            informar este grupo nos seus produtos para que a operação vincule as
            mercadorias com a fiscal. Neste caso tributário, você irá selecionar
            o grupo <strong>“Produtos ICMS ST”</strong>.
          </p>

          <p>
            <strong>Destino – Estado</strong>: neste campo, selecione a qual
            estado esta operação fiscal aplicará os tributados.
          </p>

          <h4>Configurações de PIS e COFINS</h4>

          <p>
            Ainda nesta tela, você poderá definir as informações de PIS e
            COFINS.
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
            O primeiro campo a ser informado será a Situação do ICMS, que também
            é conhecida como <strong>CSOSN</strong> ou <strong>CST</strong>.
            Portanto, para corretamente este dado, você deve consultar com sua
            contabilidade qual é a situação do ICMS correto ser utilizado para a
            emissão de NF-e de seus. Ao informar a situação necessária, os
            demais campos que se abrem. No exemplo, utilizamos a situação 102.
          </p>

          <p>
            <strong>Importante!</strong> Normalmente, para produtos sem ICMS ST,
            empresas do Simples Nacional utilizam como situações 101, 102, 103,
            300, 400 ou 900.
          </p>

          <p>
            Logo abaixo, o sistema apresentará a seção{" "}
            <strong>ICMS – UF Destino</strong>, que se torna de preenchimento
            opcional pelas empresas optantes pelo Simples Nacional. Lembrando
            que as alíquotas informadas neste campo, foram aplicadas ao estado
            selecionado anteriormente, na aba Base. Além disso, as alíquotas
            informadas devem estar de acordo com a <strong>tabela difal</strong>{" "}
            e ser solicitadas a sua contabilidade.
          </p>

          <h4>Aba IPI para SUFRAMA</h4>

          <p>
            Depois disso, vá até a aba IPI para Suframa e preencha a Zona do
            IPI, caso esteja configurando a operação fiscal para o estado
            pertencente à Franca de Manaus.
          </p>

          <BoxImage src={Image6} />
          <p>
            Para o preenchimento das informações do IPI para SUFRAMA, sua
            situação deve ser usada com a sua contabilidade a alíquotas corretas
            que você deve para emitir NF-e de situação. No exemplo, utilizamos a
            situação “Não Tributada pelo IPI”.
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

          <h4>
            Operação fiscal da empresa Simples Nacional para os produtos com
            ICMS ST
          </h4>

          <p>
            Depois disso, será necessário agregar mais uma operação fiscal para
            a empresa do Simples Nacional, porém com as tributações dos produtos
            com ICMS ST.
          </p>

          <p>
            Portanto, existirá na tela de Operações Fiscais, será necessário
            clicar em <strong>Novo</strong>.
          </p>

          <p>
            Assim, se abrirá um novo modal onde você poderá definir como
            tributações.
          </p>

          <h4>Base Aba</h4>

          <p>
            No primeiro momento, o sistema apresentará a aba Base, onde será
            necessário informar os dados que esta operação fiscal será
            reconhecida pelo sistema. Portanto, com os seguintes dados:
          </p>

          <p>
            Novamente será necessário confirmar estas informações com sua
            contabilidade para que não ocorram problemas futuros. Após
            selecionar o CFOP, basta clicar em <strong>Adicionar</strong>.
          </p>

          <p>
            Depois de preencher todos os campos, clique em{" "}
            <strong>Salvar</strong> no canto inferior da tela.
          </p>

          <h4>
            Operação fiscal da empresa Simples Nacional para os produtos com
            ICMS ST
          </h4>

          <p>
            Depois disso, será necessário agregar mais uma operação fiscal para
            a empresa do Simples Nacional, porém com as tributações dos produtos
            com ICMS ST.
          </p>

          <p>
            Portanto, existirá na tela de Operações Fiscais, será necessário
            clicar em <strong>Novo</strong>.
          </p>

          <p>
            Assim, se abrirá um novo modal onde você poderá definir como
            tributações.
          </p>

          <h4>Base Aba</h4>

          <p>
            No primeiro momento, o sistema apresentará a aba Base, onde será
            necessário informar os dados que esta operação fiscal será
            reconhecida pelo sistema. Portanto, com os seguintes dados:
          </p>

          <BoxImage src={Image8} />
          <p>
            Selecione uma categoria de venda que nomeará esta operação fiscal
            para a Operação do Simples Nacional. Neste exemplo, determinamos que
            a empresa do Simples irá possuir uma categoria padrão com o nome{" "}
            <strong>Materiais e Serviços</strong>;
          </p>

          <p>
            <strong>Grupo Tributário</strong>: selecione o grupo tributário
            anteriormente no passo 2. Assim, no próximo passo, você terá que
            informar este grupo nos seus produtos para que a operação vincule as
            mercadorias com a fiscal. Neste caso tributário, você selecionará o
            grupo <strong>“Produtos com ICMS ST”</strong>.
          </p>

          <p>
            <strong>Destino – Estado</strong>: neste campo, selecione a qual
            estado esta operação fiscal aplicará os tributados.
          </p>

          <h4>Configurações de PIS e COFINS</h4>

          <p>
            Ainda nesta tela, você poderá definir as informações de PIS e
            COFINS.
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
            Você também poderá obter informações importantes no campo
            Informações Complementares.
          </p>
          <h4>Aba ICMS</h4>
          <p>
            Em seguida, vá a aba ICMS para informar dados específicos sobre este
            imposto.
          </p>
          <BoxImage src={Image10} />
          <p>
            O primeiro campo a ser informado será a Situação do ICMS, que também
            é conhecida como <strong>CSOSN</strong> ou <strong>CST</strong>.
            Portanto, para corretamente este dado, você deve consultar com sua
            contabilidade qual é a situação do ICMS correto ser utilizada para a
            emissão de NF-e de seus. Ao informar a situação necessária, os
            demais campos que se abrem. No exemplo, utilizamos a situação 201.
          </p>

          <p>
            <strong>Importante!</strong> Normalmente, para produtos com ICMS ST,
            empresas do regime de apuração Simples Nacional existem como
            situações 201, 202, 203, 300, 500 ou 900.
          </p>

          <p>
            Logo abaixo, o sistema apresentará a seção{" "}
            <strong>ICMS – UF Destino</strong>, que se torna de preenchimento
            opcional pelas empresas optantes pelo Simples Nacional. Lembrando
            que as alíquotas informadas neste campo, foram aplicadas ao estado
            selecionado anteriormente, na aba Base. Além disso, as alíquotas
            informadas devem estar de acordo com a <strong>tabela difal</strong>{" "}
            e ser solicitadas a sua contabilidade.
          </p>

          <h4>Aba IPI para SUFRAMA</h4>

          <p>
            Depois disso, vá até a aba IPI para Suframa e preencha a Zona do
            IPI, caso esteja configurando a operação fiscal para o estado
            pertencente a Franca de Manaus.
          </p>

          <BoxImage src={Image11} />
          <p>
            Para o preenchimento das informações do IPI para SUFRAMA, sua
            situação deve ser usada com a sua contabilidade a alíquotas corretas
            que você deve para emitir NF-e de situação. No exemplo, utilizamos a
            situação “Não Tributada pelo IPI”.
          </p>
          <h4>Aba CFOP</h4>
          <p>
            Por fim, na aba CFOP você poderá informar um CFOP que corresponde às
            vendas dos produtos na nota fiscal.
          </p>
          <BoxImage src={Image12} />
          <p>
            Novamente será necessário confirmar estas informações com sua
            contabilidade para que não ocorram problemas futuros. Após
            selecionar o CFOP, basta clicar em <strong>Adicionar</strong>.
          </p>

          <p>
            Depois de preencher todos os campos, clique em{" "}
            <strong>Salvar</strong> no canto inferior da tela.
          </p>

          <h4>
            Operação fiscal da empresa Lucro Real para os produtos sem ICMS ST
          </h4>

          <p>
            Após as tributações que terão os produtos ao vender pela empresa
            configurar Simples, é chegado o momento de configurar a tributação
            dos <strong>produtos sem ICMS ST</strong> da empresa do Lucro Real.
          </p>

          <p>
            Para isso, acesse o menu lateral <strong>Fiscal</strong>, submenu{" "}
            <strong>Operações Fiscais</strong> e clique em <strong>Novo</strong>
            , no canto superior da tela.
          </p>

          <p>
            Assim, se abrirá um novo modal onde você poderá definir como
            tributações.
          </p>

          <h4>Base Aba</h4>

          <p>
            No primeiro momento, o sistema apresentará a aba Base, onde será
            necessário informar os dados que esta operação fiscal será
            reconhecida pelo sistema. Portanto, com os seguintes dados:
          </p>

          <BoxImage src={Image13} />
          <p>
            <strong>Operação:</strong> selecione uma categoria de venda que
            nomeará esta operação fiscal. Conforme cadastrado no passo 1, para a
            empresa Lucro Real a categoria utilizada será{" "}
            <strong>Venda de Produtos Lucro Real</strong>;
          </p>
          <p>
            <strong>Grupo Tributário:</strong> selecione o grupo tributário
            anteriormente no passo 2. Assim, no próximo passo, você terá que
            informar este grupo nos seus produtos para que a operação vincule as
            mercadorias com a fiscal. Neste caso tributário, você irá selecionar
            o grupo <strong>“Produtos ICMS ST“</strong>.
          </p>
          <p>
            <strong>Destino – Estado:</strong> neste campo, selecione a qual
            estado esta operação fiscal aplicará os tributados.
          </p>

          <h4>Configurações de PIS e COFINS</h4>
          <p>
            Ainda nesta tela, você poderá definir as informações de PIS e
            COFINS.
          </p>

          <BoxImage src={Image14} />
          <p>
            Aqui, selecione a situação de cada imposto e como produtos alíquotas
            que terão seus. Mas é importante confirmar estas informações com sua
            contabilidade para que não ocorram problemas futuros. Neste exemplo,
            estamos usando a 07, referente a operação isenta da contribuição
            destes impostos.
          </p>
          <p>
            Você também poderá obter informações importantes no campo
            Informações Complementares.
          </p>
          <h4>Aba ICMS</h4>
          <p>
            Em seguida, vá a aba ICMS para informar dados específicos sobre este
            imposto.
          </p>
          <BoxImage src={Image15} />
          <p>
            <strong>
              O primeiro campo a ser informado será a Situação do ICMS,
            </strong>{" "}
            que também é conhecida como <strong>CSOSN ou CST.</strong> Portanto,
            para corretamente este dado, você deve consultar com sua
            contabilidade qual é a situação do ICMS correto ser utilizado para a
            emissão de NF-e de seus. Ao informar a situação necessária, os
            demais campos que se abrem. No exemplo, utilizamos a situação 00.
          </p>

          <p>
            <strong>Importante!</strong> Normalmente, sem ICMS ST, empresas do
            regime de apuração Lucro Presumido/Real utilizam como usos como
            produtos 00, 10, 30, 60, 70 ou 90.
          </p>

          <p>
            Para o estado do Lucro Presumido/Real, que está configurando a
            operação fiscal para um diferente do estado da sua empresa, as
            empresas devem ser preenchidas também como informações da seção{" "}
            <strong>ICMS – UF Destino.</strong> Lembrando que as alíquotas
            informadas neste campo, foram aplicadas ao estado selecionado
            anteriormente, na aba Base. Além disso, as alíquotas informadas
            devem estar de acordo com a tabela difal.
          </p>

          <h4>Aba IPI para SUFRAMA</h4>
          <p>
            Depois disso, vá até a aba IPI para Suframa e preencha a Zona do
            IPI, caso esteja configurando a operação fiscal para o estado
            pertencente a Franca de Manaus.
          </p>

          <BoxImage src={Image16} />
          <p>
            Para o preenchimento das informações do IPI para SUFRAMA, sua
            situação deve ser usada com a sua contabilidade a alíquotas corretas
            que você deve para emitir NF-e de situação. No exemplo, utilizamos a
            situação “Não Tributada pelo IPI”.
          </p>
          <h4>Aba CFOP</h4>
          <p>
            Por fim, na aba CFOP você poderá informar um CFOP que corresponde às
            vendas dos produtos na nota fiscal.
          </p>
          <BoxImage src={Image17} />
          <p>
            Novamente será necessário confirmar estas informações com sua
            contabilidade para que não ocorram problemas futuros. Após
            selecionar o CFOP, basta clicar em <strong>Adicionar</strong>.
          </p>

          <p>
            Depois de preencher todos os campos, clique em{" "}
            <strong>Salvar</strong> no canto inferior da tela.
          </p>

          <h4>
            Operação fiscal da empresa Lucro Real para os produtos com ICMS ST
          </h4>
          <p>
            Feito isto, ainda teremos que configurar a tributação que os
            produtos com CMS ST terão, quando vendidos pela empresa do Lucro
            Real.
          </p>

          <p>
            Portanto, existirá na tela de Operações Fiscais, será necessário
            clicar em <strong>Novo</strong>.
          </p>

          <p>
            Assim, se abrirá um novo modal onde você poderá definir como
            tributações.
          </p>

          <h4>Base Aba</h4>
          <p>
            No primeiro momento, o sistema apresentará a aba Base, onde será
            necessário informar os dados que esta operação fiscal será
            reconhecida pelo sistema. Portanto, com os seguintes dados:
          </p>

          <BoxImage src={Image18} />
          <p>
            <strong>Operação:</strong> selecione uma categoria de venda que
            nomeará esta operação fiscal. Conforme cadastrado no passo 1, para a
            empresa Lucro Real a categoria utilizada será{" "}
            <strong>Venda de Produtos Lucro Real</strong>;
          </p>

          <p>
            <strong>Grupo Tributário:</strong> selecione o grupo tributário
            anteriormente no passo 2. Assim, no próximo passo, você terá que
            informar este grupo nos seus produtos para que a operação vincule as
            mercadorias com a fiscal. Neste caso tributário, você selecionará o
            grupo <strong>“Produtos com ICMS ST”</strong>.
          </p>

          <p>
            <strong>Destino – Estado:</strong> neste campo, selecione a qual
            estado esta operação fiscal aplicará os tributados.
          </p>

          <h4>Configurações de PIS e COFINS</h4>
          <p>
            Ainda nesta tela, você poderá definir as informações de PIS e
            COFINS.
          </p>
          <BoxImage src={Image19} />
          <p>
            Aqui, selecione a situação de cada imposto e como produtos alíquotas
            que terão seus. Mas é importante confirmar estas informações com sua
            contabilidade para que não ocorram problemas futuros. Neste exemplo,
            estamos usando a 07, referente a operação isenta da contribuição
            destes impostos.
          </p>
          <p>
            Você também poderá obter informações importantes no campo
            Informações Complementares.
          </p>
          <h4>Aba ICMS</h4>
          <p>
            Em seguida, vá a aba ICMS para informar dados específicos sobre este
            imposto.
          </p>
          <BoxImage src={Image20} />
          <p>
            O primeiro campo a ser informado será a Situação do ICMS, que também
            é conhecida como <strong>CSOSN</strong> ou <strong>CST</strong>.
            Portanto, para corretamente este dado, você deve consultar com sua
            contabilidade qual é a situação do ICMS correto ser utilizado para a
            emissão de NF-e de seus. Ao informar a situação necessária, os
            demais campos que se abrem. No exemplo, utilizamos a situação 60.
          </p>

          <p>
            <strong>Importante!</strong> Normalmente, para produtos com ICMS ST,
            empresas do regime de apuração do Lucro Presumido/Real utilizam como
            situações 10, 30, 60, 70 ou 90.
          </p>

          <p>
            Caso você seja uma empresa Lucro Presumido/Real, e está configurando
            a operação fiscal para um estado do estado da sua empresa, também
            diferente como informações da seção{" "}
            <strong>ICMS – UF Destino</strong>. Lembrando que as alíquotas
            informadas neste campo, foram aplicadas ao estado selecionado
            anteriormente, na aba Base. Além disso, as alíquotas informadas
            devem estar de acordo com a <strong>tabela difal</strong>.
          </p>

          <h4>Aba IPI para SUFRAMA</h4>

          <p>
            Depois disso, vá até a aba IPI para Suframa e preencha a Zona do
            IPI, caso esteja configurando a operação fiscal para o estado
            pertencente a Franca de Manaus.
          </p>

          <BoxImage src={Image21} />
          <p>
            Para o preenchimento das informações do IPI para SUFRAMA, sua
            situação deve ser usada com a sua contabilidade a alíquotas corretas
            que você deve para emitir NF-e de situação. No exemplo, utilizamos a
            situação “Não Tributada pelo IPI”.
          </p>
          <h4>Aba CFOP</h4>
          <p>
            Por fim, na aba CFOP você poderá informar um CFOP que corresponde às
            vendas dos produtos na nota fiscal.
          </p>
          <BoxImage src={Image22} />
          <p>
            Novamente será necessário confirmar estas informações com sua
            contabilidade para que não ocorram problemas futuros. Após
            selecionar o CFOP, basta clicar em Adicionar.
          </p>
          <p>
            Depois de preencher todos os campos, clique em Salvar no canto
            inferior da tela.
          </p>

          <h4>
            4. Informar cada grupo tributário nos produtos correspondentes
          </h4>

          <p>
            O próximo passo a ser realizado é informar o grupo tributário nos
            produtos. Ou seja, nos produtos que não possuem ICMS ST, você deve
            informar o grupo tributário “Produtos sem ICMS ST”. Já nos produtos
            que possuem ICMS ST, você deve informar o grupo tributário “Produtos
            com ICMS ST”. Isso é necessário para que o sistema vincule todos os
            produtos aos impostos configurados na etapa 3. Assim, o sistema
            compreende que ao vender o produto e emitir uma nota fiscal,
            automaticamente será informado esta tributação.
          </p>

          <p>
            Para isso, acesse o menu lateral Cadastros, submenu Produtos e edite
            o produto que não possui ICMS ST. Na tela de edição do produto,
            clique sobre a aba Fiscal e no campo Grupo Tributário, informe o
            nome do grupo registrado na etapa 2. No nosso exemplo, iremos
            informar o nome de produtos sem ICMS ST. Por fim, clique em Salvar.
          </p>
          <BoxImage src={Image23} />
          <p>
            Já no produto que possui ICMS ST, é necessário informar o grupo
            tributário “Produtos com ICMS ST”. Portanto, acesse o menu lateral
            <b> Cadastros</b>, submenu <b>Produtos</b> e <b>edite o produto</b>{" "}
            que possui ICMS ST. Na tela de edição do produto, clique sobre a aba
            <b> Fiscal</b> e no campo <b>Grupo Tributário,</b> informe o nome do
            grupo registrado na etapa 2. No nosso exemplo, iremos informar o
            nome Produtos com ICMS ST. Por fim, clique em Salvar.
          </p>
          <BoxImage src={Image24} />
          <h4>5. Realizar venda e emitir nota fiscal</h4>

          <p>
            Agora, para que de fato os produtos tenham como tributações
            configuradas na nota fiscal, você terá que realizar uma venda.
          </p>

          <p>
            Por padrão, ao criar uma venda, automaticamente o sistema usará como
            padrão a categoria <strong>Venda de Materiais e Serviços</strong>{" "}
            para puxar uma distinção. Mas lembre-se de que esta categoria foi
            configurada para uma empresa do Simples Nacional. Ou seja, para
            vendas a empresa <strong>Simples Nacional</strong>, você não precisa
            informar a categoria material porque o sistema de distribuição
            ocorre com o sistema de forma automática “Venda de tributo e
            serviços padrão”. Se você tem cadastro para a categoria da operação
            fiscal para outra empresa do Simples, informá-la no campo categoria
            da venda.
          </p>

          <p>
            Já para as vendas, para a categoria de vendas, a empresa, o sistema{" "}
            <strong>OBRIGATORIAMENTE</strong>, informará a categoria{" "}
            <strong>Venda de Produtos Lucro Real</strong> nas vendas, para a
            empresa, o sistema é OBRIGATORIO informar como as vendas corretas
            foram definidas para esta operação.
          </p>

          <p>
            Sendo assim, para gerar a venda e nota para a empresa do Simples,
            acesse o menu lateral <strong>Vendas</strong>, submenu{" "}
            <strong>Novo Pedido</strong>. Agora, os dados básicos, como Cliente,
            Empresa do Simples Nacional, Depósito e os Produtos que está
            vendendo. Ao ir até a seção <strong>Informações Gerais</strong>,
            você verá o campo <strong>Categoria</strong>, onde você poderá
            preencher com o nome Venda de Materiais e Serviços, ou poderá em
            branco para esta empresa. Isto porque o sistema já é reconhecido
            automaticamente. Dessa forma, basta finalizar sua venda normalmente,
            e emitir uma NF-e para ela. Com isso, você verá na edição da nota
            fiscal os produtos estarão com as tributações corretas que foram
            definidas na operação fiscal.
          </p>
          <BoxImage src={Image25} />
          <p>
            Já para a venda/emissão da nota pela empresa do Lucro Real, você
            terá que <strong>OBRIGATORIAMENTE</strong> informará a categoria em
            que as tributações foram projetadas. Então, acesse o menu lateral{" "}
            <strong>Vendas</strong>, submenu <strong>Novo Pedido</strong>, e
            assim, vendeu o Cliente, Empresa do Lucro, Depósito e os Produtos
            que estão sendo enviados. Depois disso, vá até a seção{" "}
            <strong>Informações Gerais</strong> e informe o campo{" "}
            <strong>Categoria</strong>. Neste exemplo, iremos para a categoria{" "}
            <strong>Venda de Produtos Lucro Real</strong>, tendo em vista que
            foi esta a operação fiscal que cadastramos no sistema. Depois de
            finalizar sua venda, basta a NF-e verificar se os produtos
            informados foram gerados na nota com a corretamente que foi
            configurado para ele. Ou seja, o ICMS, PIS, COFINS, IPI e CFOP estão
            todos de acordo com a operação fiscal.
          </p>

          <BoxImage src={Image26} />
          <p>
            <strong>Mas fique atento à algumas dicas!</strong>
          </p>
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
              Lembre-se de que o cliente informado na venda, deve ter o endereço
              já preenchido no seu cadastro. Assim, o sistema irá buscar a
              operação fiscal correspondente ao estado dele.
            </li>
          </ul>
          <p>
            Agora que você obterá todas as informações como etapas fundamentais,
            ao emitir NF-e através da venda no Sistema ERP, as informações
            tributárias de seus produtos serão enviadas corretamente na nota.
            Assim, você nunca terá problemas com a fiscalização fiscal do seu
            negócio!
          </p>
        </Typography>
      </Container>
    );
  };
export default ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP;
