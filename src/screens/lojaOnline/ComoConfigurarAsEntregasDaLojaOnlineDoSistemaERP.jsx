import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarAsEntregasDaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarAsEntregasDaLojaOnlineDoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarAsEntregasDaLojaOnlineDoSistemaERP3.png";
import Image4 from "../../assets/ComoConfigurarAsEntregasDaLojaOnlineDoSistemaERP4.png";
import Image5 from "../../assets/ComoConfigurarAsEntregasDaLojaOnlineDoSistemaERP5.png";
import Image6 from "../../assets/ComoConfigurarAsEntregasDaLojaOnlineDoSistemaERP6.png";
import Image7 from "../../assets/ComoConfigurarAsEntregasDaLojaOnlineDoSistemaERP7.png";
import Image8 from "../../assets/ComoConfigurarAsEntregasDaLojaOnlineDoSistemaERP8.png";
import Image9 from "../../assets/ComoConfigurarAsEntregasDaLojaOnlineDoSistemaERP9.png";
import Image10 from "../../assets/ComoConfigurarAsEntregasDaLojaOnlineDoSistemaERP10.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarAsEntregasDaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar as Entregas da Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Quando o envio das suas mercadorias é bem executado, você gera as
          melhores experiências de compra, fideliza seus clientes e cria uma
          imagem positiva. Na Loja Online não poderia ser diferente. Aprenda
          neste artigo como configurar os meios de entrega das mercadorias para
          sua loja virtual.
        </p>
        <p>
          Mas claro que antes disso, é necessário que você já tenha configurado
          a parte Visual da sua loja, bem como ter definido as Configurações
          básicas e os Pagamentos aceitos.
        </p>
        <p>
          Feito isso, para começar a configuração das entregas, acesse o menu
          lateral Loja Online, submenu <b>Configurações</b> e clique em{" "}
          <b>Entrega</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <b>Endereço de origem para cálculo de frete</b>
        </p>
        <p>
          No primeiro momento, você terá a opção para definir qual o endereço
          será utilizado para no cálculo do frete dentro da sua Loja Online.
        </p>
        <BoxImage src={Image2} />
        <p>
          Você poderá ter a empresa em um endereço, e o depósito que irá
          despachar a mercadoria poderá ser em um endereço diferente. Então, com
          esta opção você determina se deseja que o frete seja considerado
          através do <b>Endereço da empresa</b> ou do{" "}
          <b>Endereço de depósitos.</b>
        </p>
        <br />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <b>Plataformas integradas para suas entregas</b>
        </p>

        <p>
          Em seguida, você poderá integrar plataformas de entregas na sua Loja
          Online. Entre elas estão disponíveis o <b>SIGEP Web,</b> que seriam as
          entregas através dos Correios, e a <b>JadLog</b>, que seriam as
          entregas através de transportadoras.
        </p>

        <BoxImage src={Image3} />
        <p>
          <b>SIGEP Web</b>
        </p>
        <p>
          Para utilizar o SIGEP WEB, é importante que o contrato da sua empresa
          com os Correios já esteja firmado e você possua todos os dados
          necessários para realizar a integração com o Sistema ERP. Veja o
          artigo:{" "}
          <a href="/cadastros-basicos/como-realizar-a-integracao-com-correios-sigep-web-no-sistema-erp">
            Como configurar a integração com os Correios SIGEP Web
          </a>{" "}
          e saiba mais sobre o assunto.
        </p>
        <p>
          Ao marcar a opção <b>SIGEP Web,</b> o sistema expandirá e lhe
          apresentará algumas informações que você precisará preencher. São
          elas:
        </p>

        <BoxImage src={Image4} />
        <p>
          <strong>Aviso de Recebimento – AR:</strong> o AR, é um documento
          assinado pelo destinatário na entrega da mercadoria e posteriormente,
          enviado ao remetente como prova de recebimento por parte do
          destinatário. Para habilitá-la você deve contatar os correios e
          solicitar este adicional;
        </p>
        <p>
          <strong>Declaração de Valor (Seguro):</strong> esta declaração
          refere-se ao valor da mercadoria que está sendo enviada para que em
          caso de extravio ou perda, você seja ressarcido do valor do produto.
          Para habilitá-la você deve contatar os correios e solicitar este
          adicional;
        </p>
        <p>
          <strong>Modalidades de envio (Serviços):</strong> agora, você deverá
          selecionar as modalidades de envio estipuladas no seu contrato e
          adicioná-las clicando no ícone de mais.
        </p>

        <h4>JadLog</h4>

        <p>
          Você também poderá habilitar a plataforma de envio JadLog, assim seus
          clientes poderão escolher o envio que melhor lhe atende. Lembrando que
          é muito importante que sua empresa já possua o contrato com a JadLog e
          todos os dados necessários para a integração. Veja o artigo:{" "}
          <a href="/loja-online/como-realizar-a-integracao-com-a-jadlog-no-sistema-erp">
            Como realizar a integração com a JadLog no Sistema ERP
          </a>{" "}
          e saiba mais sobre o assunto.
        </p>

        <p>
          Ao marcar a opção <strong>JadLog</strong>, o sistema a expandirá e lhe
          apresentará algumas informações que você precisará preencher. São
          elas:
        </p>
        <BoxImage src={Image5} />
        <p>
          <strong>Tipo de Integração:</strong> neste campo você deverá
          selecionar o nome da sua integração junto à JadLog;
        </p>
        <p>
          <strong>Modalidades de envio (Serviços):</strong> neste campo você
          deverá selecionar as opções de envio que você deseja que estejam
          disponíveis aos seus clientes na loja, de acordo com o contrato
          realizado com a JadLog.
        </p>

        <h4>Configurações gerais para frete</h4>

        <p>
          Depois de configurar as integrações com plataformas de envio, você
          verá uma seção para configurar a retirada e agendamento das
          mercadorias. Dessa forma, você permite que seus clientes comprem no
          conforto de casa e apenas retire a mercadoria em sua loja. Para isso,
          preencha algumas informações:
        </p>

        <BoxImage src={Image6} />
        <p>
          <strong>Permitir retirada no local:</strong> ao marcar esta opção,
          quando seus clientes realizarem compras em seu site, poderão optar por
          retirar o produto no seu estabelecimento, sem que seja necessário
          utilizar outro meio de entrega (correios e transportadoras);
        </p>
        <p>
          <strong>Primeira Compra Com Frete Grátis:</strong> marque esta opção
          se após o cliente se cadastrar e realizar a primeira compra, o frete
          será grátis;
        </p>
        <p>
          <strong>Isentar Frete a partir de valor mínimo:</strong> marque esta
          opção, se o cliente tiver frete grátis após comprar para um
          determinado valor. Ao marcar esta opção, um novo campo será
          apresentado;
        </p>
        <p>
          <strong>Valor Mínimo da Venda:</strong> ao marcar a opção acima, você
          deverá informar um valor mínimo de compra para que o frete seja
          grátis;
        </p>
        <p>
          <strong>Prazo de entrega para itens fora de estoque (dias):</strong>{" "}
          você deverá informar a quantidade de dias para a entrega de produtos
          sem estoque. Esta opção serve para casos em que os correios ou
          transportadora já definem a quantidade de dias para a entrega. Então,
          caso o item não possua estoque disponível, a quantidade informada
          neste campo será somada à quantidade de dias estipulada pelas
          integrações.
        </p>

        <h4>Permitir agendamento</h4>

        <p>
          Logo abaixo, você poderá definir os dias em que os clientes poderão
          retirar a mercadoria em seu estabelecimento. Para isso, será
          necessário preencher os seguintes campos.
        </p>

        <BoxImage src={Image7} />
        <p>
          <strong>Permitir agendamento:</strong> marque esta opção em caso de
          permitir que seu cliente retire a mercadoria em seu estabelecimento.
          Ao marcar esta opção, você deverá preencher algumas informações para
          que seja possível realizar o agendamento;
        </p>
        <p>
          <strong>Previsão agendada (minutos):</strong> você deverá informar uma
          previsão, em minutos, que o cliente poderá retirar a compra após
          finalizá-la;
        </p>
        <p>
          Agora, você precisará marcar os dias e horários disponíveis para
          realizar o agendamento e a quantidade de pedidos que podem ser
          agendados para os dias disponíveis.
        </p>

        <h4>Adicionar outros tipos de entrega</h4>

        <p>
          Por fim, você poderá adicionar novos tipos de entrega, podendo
          configurar a entrega para qualquer cidade ou apenas para cidades
          selecionadas. Neste momento, informe o{" "}
          <strong>nome da entrega</strong> que deseja e clique em{" "}
          <strong>adicionar</strong>.
        </p>

        <BoxImage src={Image8} />
        <h4>Entregas sem limitação de cidade</h4>
        <p>
          Após definir o nome da entrega e adicionar, novos campos serão
          abertos. Caso você mantenha a opção
          <b> Entregar Apenas em Locais Definidos</b> desmarcada, significa que
          esta modalidade realizará entregas em qualquer local, desde que o
          cliente pague o valor do frete estipulado. Além disso, é necessário
          preencher os seguintes dados:
        </p>
        <BoxImage src={Image9} />
        <p>
          <strong>Nome:</strong> informe o nome da nova modalidade de entrega;
        </p>
        <p>
          <strong>Previsão (minutos):</strong> informe a previsão, em minutos,
          de entrega do pedido com esta modalidade;
        </p>
        <p>
          <strong>Taxa (R$):</strong> informe a taxa fixa desta modalidade de
          entrega. Esta taxa será cobrada independente da quilometragem
          percorrida;
        </p>
        <p>
          <strong>Taxa por KM (R$):</strong> informe o valor adicional a taxa,
          por KM, que será cobrado da distância da loja ao cliente. Esta taxa
          será somada à taxa fixa.
        </p>

        <h3>Entregas somente em cidades definidas</h3>

        <p>
          Também é possível habilitar a opção{" "}
          <strong>Entregar Apenas em Locais Definidos</strong>, caso deseje
          realizar entregas com esta modalidade apenas em alguns locais. Você
          poderá definir as cidades ou a região de CEPs que você irá entregar.
          Sendo assim, preencha os seguintes campos:
        </p>

        <BoxImage src={Image10} />
        <p>
          <strong>Nome:</strong> informe o nome da nova modalidade de entrega;
        </p>
        <p>
          <strong>Previsão (minutos):</strong> informe a previsão, em minutos,
          de entrega do pedido com esta modalidade;
        </p>
        <p>
          <strong>Todo Brasil:</strong> ao marcar este checkbox, o sistema não
          permitirá que você informe cidade ou CEP, ao clicar no ícone de mais e
          adicionar, você deverá informar uma taxa fixa e uma taxa por KM;
        </p>
        <p>
          <strong>Faixa de CEP – Inicial:</strong> você deverá informar o
          primeiro CEP que realizará a entrega;
        </p>
        <p>
          <strong>Faixa de CEP – Final:</strong> você deverá informar o último
          CEP que realizará a entrega;
        </p>
        <p>
          <strong>Cidade:</strong> informe a cidade que realizará a entrega;
        </p>
        <p>
          <strong>Estado:</strong> selecione o estado em que a cidade informada
          acima se localiza;
        </p>
        <p>
          Por fim, clique no ícone de adicionar e preencha a taxa fixa e a taxa
          por KM de cada localidade de entrega.
        </p>

        <p>
          Agora, basta clicar em <strong>Salvar</strong> e as suas configurações
          de entrega já serão aplicadas no site da loja.
        </p>

        <p>
          Não deixe de acompanhar o artigo:
          <a href="/loja-online/como-configurar-as-integracoes-na-loja-online-do-sistema-erp">
            Como configurar as Integrações na Loja Online.
          </a>{" "}
          Depois de seguir todos os passos, você poderá clicar em Exibir Loja
          para começar a vender!
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarAsEntregasDaLojaOnlineDoSistemaERP;
