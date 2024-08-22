import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP1.png";
import Image2 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP2.png";
import Image3 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP3.png";
import Image4 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP4.png";
import Image5 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP5.png";
import Image6 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP6.png";
import Image7 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP7.png";
import Image8 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP8.png";
import Image9 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP9.png";
import Image10 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP10.png";
import Image11 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP11.png";
import Image12 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP12.png";
import Image13 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP13.png";
import Image14 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP14.png";
import Image15 from "../../assets/ComoEmitirNFEAtravesDePedidosNoSistemaERP15.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoEmitirNFEAtravesDePedidosNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como emitir NF-e através de Pedidos no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Por padrão, para emitir nota fiscal de um pedido, é necessário
          primeiramente realizar a venda para posteriormente emitir o documento
          fiscal. No momento de vender determinado produto, o sistema realiza a
          baixa no estoque e gera o lançamento financeiro. Assim, o status desta
          negociação será Pedido Faturado ou Pedido Aprovado Sem Faturamento (em
          caso de utilizar uma categoria de venda que não gera o financeiro).
        </p>
        <p>
          Para saber mais detalhes de como realizar vendas no sistema, veja o
          artigo:{" "}
          <a href="/vendas/como-gerar-pedidos-e-orcamentos-no-sistema-erp">
            Como gerar Pedidos e Orçamentos no Sistema ERP.
          </a>
        </p>
        <p>
          Depois de gerada sua venda, é necessário acessar menu lateral{" "}
          <b>Vendas</b> , submenu <b>Pedidos e Orçamentos.</b>
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Nessa tela, é possível emitir a NF-e selecionando o pedido que deseja,
          clicando no <b>checkbox</b> informado na primeira coluna, e em seguida
          selecionando a opção <b>NF-e,</b> conforme imagem abaixo.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Outra forma de emitir a NF-e é na edição do pedido. Para isso, edite o
          pedido e clique em <b>Mais Ações,</b> e em seguida, <b>Gerar NFe.</b>
        </p>
        <BoxImage src={Image3} />
        <p>
          De ambas as formas, você será direcionado para a tela de emissão de
          nota fiscal, onde os dados já virão preenchidos automaticamente
          conforme o que foi preenchido na venda. Caso alguma informação não
          esteja preenchida corretamente, você poderá alterar o campo com a
          respectiva informação.
        </p>
        <p>
          <b>Seção Dados da Nota Fiscal</b>
        </p>

        <p>
          Nas primeiras informações da nota fiscal, o sistema exibe as
          informações gerais da nota, como número, data e hora, além de
          informações específicas de tipo e finalidade de operação. Neste
          momento você poderá realizar as alterações necessárias e
          obrigatoriamente preencher a Natureza da Operação com o CFOP padrão da
          nota fiscal
        </p>
        <BoxImage src={Image4} />
        <p>
          <b>Aba Emitente</b>
        </p>
        <p>
          Logo abaixo você verá a aba Emitente, onde estarão os dados da sua
          empresa conforme cadastrado anteriormente. Confira todas as
          informações, e caso alguma delas esteja incorreta ou não preenchida,
          acesse menu lateral <b>Cadastros</b>, submenu <b>Empresas</b> e edite
          a informação em questão. Depois de salvar a alteração da empresa, você
          deverá gerar a nota fiscal novamente.
        </p>
        <BoxImage src={Image5} />
        <p>
          Na aba ao lado estarão os dados de seu cliente conforme já cadastrado.
          Confira todas as informações, e se necessário, realize as devidas
          alterações. Lembrando que todos os campos em vermelho devem ser
          preenchidos corretamente.
        </p>
        <BoxImage src={Image6} />
        <p>
          <b>Aba Produtos</b>
        </p>
        <p>
          Na aba seguinte estarão os seus produtos vendidos, conforme
          quantidades e valores já preenchidos em seu pedido. Caso você precise
          editar alguma informação, utilize o ícone em forma de lápis que Edita
          as informações.
        </p>
        <BoxImage src={Image7} />
        <p>
          Ao editar o produto, além de alterar dados gerais da mercadoria, você
          também pode modificar informações de ICMS, PIS, COFINS, IPI e
          acompanhar os valores Totais de cada imposto. Depois de editar, clique
          no ícone em forma de X dentro do quadro do produto para atualizar.
        </p>
        <BoxImage src={Image8} />
        <p>
          <b>Aba Transp./Frete</b>
        </p>
        <p>
          Após, a aba ao lado se refere ao transporte e frete da nota fiscal.
          Nela estarão os dados de transporte da mercadoria até o destinatário.
          Você deverá selecionar a Modalidade do Frete, e caso selecione uma
          opção que contemple o transporte das mercadorias, informe também a
          transportadora, os dados do veículo que fará o transporte e dos
          volumes que serão transportados.
        </p>
        <BoxImage src={Image9} />
        <p>Aba Faturas</p>
        <p>
          Em seguida, na aba Faturas o sistema apresentará as faturas cobradas
          pelos produtos, conforme as informações geradas na sua venda. Mas caso
          seja necessário, você pode alterar todos os dados necessários.
          Lembrando que a data da transação deve ser superior ao dia da emissão
          da nota e caso a forma de pagamento seja cartão de crédito, será
          necessário preencher os dados da credenciadora ao expandir a forma de
          pagamento.
        </p>
        <BoxImage src={Image10} />
        <p>
          <b>Aba Docs. Referenciados</b>
        </p>
        <p>
          Após, na aba Docs. referenciados você verá campos para informar a
          chave de acesso do documento fiscal que deseja referenciar nesta nota
          fiscal. O preenchimento desta informação somente é obrigatório ao
          emitir uma nota fiscal complementar. Portanto, para NF-e de venda, não
          há necessidade de preenchimento.
        </p>
        <BoxImage src={Image11} />
        <p>
          <b>Aba Informações Complementares</b>
        </p>
        <p>
          Logo após, na aba Infos. Complementares você preencherá as informações
          adicionais que deverão aparecer na nota fiscal. O sistema já tratará
          automaticamente qual o número do pedido de venda e a média de tributos
          conforme determinação da Lei da Transparência Fiscal.
        </p>
        <BoxImage src={Image12} />
        <p>
          <b>Aba Totais</b>
        </p>
        <p>
          Por fim, na aba Totais serão apresentadas as somas dos impostos da
          nota fiscal, ou seja, a soma dos impostos presente em cada produto.
        </p>
        <BoxImage src={Image13} />
        <p>
          Depois de preencher todos os campos, clique em Salvar e depois em
          <b> Pré-Visualizar</b>. Feito isso, você poderá clicar em{" "}
          <b>Emitir NFe.</b>
        </p>
        <BoxImage src={Image14} />
        <p>
          Após isso, sua NF-e será Emitida com Sucesso e você poderá baixar o
          XML ou a DANFE através dessa confirmação. Ou também, poderá acessar
          menu lateral Fiscal, submenu NFe Emitidas, selecionar sua NFe e clicar
          em <b>Mais Ações,</b> agora é só você clicar em{" "}
          <b>Baixar XML ou Baixar DANFE.</b>
        </p>
        <BoxImage src={Image15} />
      </Typography>
    </Container>
  );
};
export default ComoEmitirNFEAtravesDePedidosNoSistemaERP;
