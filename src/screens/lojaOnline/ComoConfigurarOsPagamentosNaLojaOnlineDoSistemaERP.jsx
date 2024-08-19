import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarOsPagamentosNaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarOsPagamentosNaLojaOnlineDoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarOsPagamentosNaLojaOnlineDoSistemaERP3.png";
import Image4 from "../../assets/ComoConfigurarOsPagamentosNaLojaOnlineDoSistemaERP4.png";
import Image5 from "../../assets/ComoConfigurarOsPagamentosNaLojaOnlineDoSistemaERP5.png";
import Image6 from "../../assets/ComoConfigurarOsPagamentosNaLojaOnlineDoSistemaERP6.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarOsPagamentosNaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar os Pagamentos na Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Com o avanço das vendas de produtos e serviços pela internet, acaba
          sendo necessário disponibilizar diversas opções de meios de pagamento
          aos seus clientes. E é fundamental, poder receber pagamentos online
          com segurança. Atualmente, existem diversas plataformas no mercado
          para a operação de pagamentos online, por isso a Loja Online
          disponibiliza diversas integrações com essas plataformas.
        </p>

        <p>
          Depois de configurar a parte Visual e as Configurações da sua Loja
          Online, é o momento de definir quais são os pagamentos que serão
          aceitos no seu site. Por isso, neste artigo apresentamos o passo a
          passo para configurar os meios de pagamento que serão utilizados para
          as vendas da sua Loja Online
        </p>

        <p>
          Para começar, acesse o menu lateral <strong>Loja Online</strong>,
          submenu <strong>Configurações</strong> e clique em{" "}
          <strong>Pagamento</strong>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          A seguir, você poderá definir diversos dados. Acompanhe abaixo quais
          são eles.
        </p>
        <p>
          <b>Configurações de precificação</b>
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <strong>Tabela de preço base:</strong> informe a tabela de preço
          padrão a ser aplicada no anúncio de suas mercadorias ou serviços;
        </p>
        <p>
          <strong>Tabela de preço promocional:</strong> informe uma tabela de
          preço com valores especiais para alguns produtos ou com percentual de
          desconto;
        </p>
        <p>
          <strong>Quantidade máxima de parcelas:</strong> informe até quantas
          parcelas você aceitará pagamentos a prazo em sua loja virtual;
        </p>
        <p>
          <strong>Valor mínimo de compra:</strong> informe um valor para ser
          mínimo de venda. Assim, caso o cliente adicione ao carrinho um valor
          abaixo deste estipulado, o sistema não permitirá a finalização da
          compra;
        </p>
        <p>
          <strong>Grupo de Lançamento:</strong> informe um grupo de lançamento
          para que seja informado nos lançamentos a partir das vendas realizadas
          na Loja Online;
        </p>
        <p>
          <strong>Conta Bancária de lançamento:</strong> informe uma conta
          bancária para que seja informada nos lançamentos a partir das vendas
          realizadas na Loja Online;
        </p>
        <p>
          <strong>Considerar Frete no Valor Mínimo de Compra:</strong> ao marcar
          esta opção, o sistema considerará o valor do frete junto ao valor
          mínimo de compra;
        </p>
        <p>
          <strong>Tabela de Preço Especial para Usuário Logado:</strong> a
          tabela de preço de cada usuário é especificada no Cadastro de Pessoas.
          Com essa opção ativa, cada cliente seu já cadastrado que se logar na
          sua loja, poderá ver determinados valores de produtos, de acordo com o
          que foi informado na tabela de preço;
        </p>
        <p>
          <strong>Ocultar Preço dos Produtos:</strong> com esta opção
          selecionada você oculta os preços dos produtos. Assim, seus clientes
          poderão selecionar os itens e solicitar um orçamento.
        </p>
        <p>
          <strong>
            Ao selecionar esta opção, surgirão 3 novas opções. São elas:
          </strong>
        </p>
        <ul>
          <li>
            <strong>Mostrar Preço dos Produtos a Usuários Logados:</strong> com
            esta opção selecionada, os produtos que estão com valor ocultado
            terão o valor exibido apenas para usuários que realizarem o login na
            sua loja;
          </li>
          <li>
            <strong>Enviar Orçamento por e-mail:</strong> selecione esta opção
            para habilitar o envio automático de orçamento de produtos, para o
            e-mail do cliente;
          </li>
          <li>
            <strong>Permitir Cliente Aprovar o Orçamento por e-mail:</strong>{" "}
            com essa opção marcada, ao enviar o orçamento por e-mail ao cliente,
            haverá um botão onde ele poderá aprovar o orçamento, gerando um
            pedido dentro do sistema.
          </li>
        </ul>
        <p>
          <strong>Plataformas para cobrança automática</strong>
        </p>
        <p>
          Você também poderá selecionar outras formas de pagamento através de
          outras plataformas. São elas a{" "}
          <strong>
            PagSeguro, PagiHiper, Cielo, Pagar.me e Boleto Bancário
          </strong>
          .
        </p>

        <BoxImage src={Image3} />
        <p>
          Para cada uma delas, temos um artigo explicando o passo a passo de
          configuração.
        </p>
        <p>
          <b>Defina meios de cobrança manual</b>
        </p>
        <p>
          Além de configurar meios de cobranças automáticas, também é possível
          definir formas de pagamento manuais. Normalmente esta é utilizada por
          empresas que realizam a entrega de produtos, ou que os clientes
          realizam a retirada dos itens. Dessa forma, o pagamento pode ser feito
          presencialmente.
        </p>
        <BoxImage src={Image4} />
        <p>
          Para isso, busque pela forma de pagamento desejada no campo{" "}
          <strong>Tipo do pagamento</strong>, após selecionar a forma, basta
          clicar no <strong>ícone de mais</strong>. Caso deseje excluir alguma
          das formas de pagamento selecionadas, basta clicar no{" "}
          <strong>ícone de lixeira</strong>. Depois de adicionar o pagamento, o
          sistema abre um novo campo para aplicar <strong>Desconto</strong> em
          caso do cliente optar por determinado tipo de pagamento.
        </p>

        <h4>
          <strong>Defina desconto para pagamentos a vista</strong>
        </h4>

        <p>
          Após definir as formas de pagamentos manuais, há um novo campo em que
          você poderá estabelecer descontos em caso do pagamento ocorrer à
          vista, através das formas de pagamentos automáticas.
        </p>

        <BoxImage src={Image5} />

        <p>
          Você poderá informar um desconto para as compras realizadas no{" "}
          <b>Boleto</b> no <b>Débito</b>. O desconto será em porcentagem, para
          isto, basta informar o valor desejado de desconto no campo da forma de
          pagamento referente.
        </p>

        <h4>
          <b>Bandeiras Aceitas</b>
        </h4>

        <p>
          Por fim, na seção Bandeiras Aceitas você poderá selecionar as
          bandeiras de cartão que serão aceitas na sua loja.
        </p>

        <BoxImage src={Image6} />
        <p>
          Você poderá selecionar todas as bandeiras, clicando em{" "}
          <b>Selecionar Todos</b>. Caso deseje remover todas as bandeiras, basta
          clicar em <b>Remover Todos</b>. Mas se você aceita apenas bandeiras
          específicas, basta selecionar cada uma delas. A informação das
          bandeiras que sua loja aceita estará informada na parte inferior do
          seu site.
        </p>

        <p>
          Após preencher todas estas informações, basta clicar em <b>Salvar</b>.
          E pronto! Agora a sua loja virtual está prontinha para começar a
          vender!
        </p>

        <p>
          Depois de seguir todos os passos, você poderá clicar em{" "}
          <b>Exibir Loja</b> para começar a vender!
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarOsPagamentosNaLojaOnlineDoSistemaERP;
