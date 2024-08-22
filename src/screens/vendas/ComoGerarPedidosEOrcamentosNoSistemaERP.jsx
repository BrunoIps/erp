import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoGerarPedidosEOrcamentosNoSistemaERP1.png";
import Image2 from "../../assets/ComoGerarPedidosEOrcamentosNoSistemaERP2.png";
import Image3 from "../../assets/ComoGerarPedidosEOrcamentosNoSistemaERP3.png";
import Image4 from "../../assets/ComoGerarPedidosEOrcamentosNoSistemaERP4.png";
import Image5 from "../../assets/ComoGerarPedidosEOrcamentosNoSistemaERP5.png";
import Image6 from "../../assets/ComoGerarPedidosEOrcamentosNoSistemaERP6.png";
import Image7 from "../../assets/ComoGerarPedidosEOrcamentosNoSistemaERP7.png";
import Image8 from "../../assets/ComoGerarPedidosEOrcamentosNoSistemaERP8.png";
import Image9 from "../../assets/ComoGerarPedidosEOrcamentosNoSistemaERP9.png";
import Image10 from "../../assets/ComoGerarPedidosEOrcamentosNoSistemaERP10.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoGerarPedidosEOrcamentosNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como gerar Pedidos e Orçamentos no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          O cadastro de um pedido de venda é semelhante ao cadastro de um novo
          orçamento. A tela do sistema é a mesma, bem como os campos para
          preenchimento. A diferenciação ocorre no status do sistema, ou seja,
          as etapas de compra, se é apenas orçamento ou se já é um pedido
          propriamente.
        </p>
        <p>
          Para realizar este cadastro, acesse o menu lateral <b>Vendas</b>,
          submenu
          <b> Novo Pedido </b>ou <b>Novo Orçamento.</b>
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          A seguir, você será direcionado para a tela de Cadastro de Pedidos e
          Orçamentos. As informações preenchidas neste cadastro serão
          registradas para um posterior faturamento. Preencha os campos a
          seguir:
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <strong>Cliente:</strong> o cliente ou a organização que solicitou o
          pedido ou orçamento;
        </p>
        <p>
          <strong>Tabela de Preços:</strong> caso deseje utilizar uma tabela de
          preço, a informe neste campo;
        </p>
        <p>
          <strong>Empresa:</strong> informe a empresa responsável por este
          pedido ou orçamento;
        </p>
        <p>
          <strong>Depósito:</strong> refere-se ao espaço físico onde os seus
          produtos ficam armazenados. A empresa pode ter mais de um depósito,
          informe o depósito que contém os produtos relacionados ao pedido ou
          orçamento;
        </p>
        <p>
          <strong>Origem da Venda:</strong> escolha como esta venda foi
          originada, podendo ser uma venda direta, pelo E-commerce, PDV ou
          Representação;
        </p>
        <p>
          <strong>Código:</strong> o sistema preenche este campo, o mesmo poderá
          ser alterado automaticamente para evitar duplicidade.
        </p>
        <p>
          <strong>Localizar Produto ou Serviço:</strong> informe o produto e
          clique em <strong>Adicionar</strong>;
        </p>
        <p>
          <strong>Quantidade:</strong> informe a quantidade estabelecida;
        </p>
        <p>
          <strong>Valor:</strong> o sistema informa o valor que foi adicionado
          para este produto no momento em que o mesmo foi cadastrado no sistema;
        </p>
        <p>
          <strong>Frete R$:</strong> informe o valor de frete para este produto,
          se houver;
        </p>
        <p>
          <strong>Total:</strong> a soma total dos valores referentes aos itens
          e as quantidades adicionadas;
        </p>
        <p>
          <strong>Total do Grupo:</strong> a soma total de itens adicionados.
        </p>

        <p>
          O campo em azul, traz as informações totais deste Pedido/Orçamento,
          como Desconto, Comissão, Frete, Valor total, entre outros.
        </p>

        <p>
          Depois disso, clicando sobre o ícone de <strong>Expandir</strong> o
          sistema disponibilizará outros campos que poderão ser preenchidos, se
          houver necessidade. São dados como desconto, comissões do vendedor,
          outras despesas, entre outras opções não obrigatórias.
        </p>

        <p>
          Caso seja necessário excluir um item, basta clicar no ícone de{" "}
          <strong>X</strong>.
        </p>

        <BoxImage src={Image3} />
        <p>
          Caso queira criar um novo grupo e adicionar novos itens, clique no
          botão<b> + Novo Grupo de Produtos.</b>
        </p>
        <p>
          <b>Informações Financeiras</b>
        </p>
        <p>
          Logo após, na seção <b>Informações Financeiras</b> será possível
          adicionar os dados sobre o pagamento:
        </p>
        <BoxImage src={Image4} />
        <p>
          <strong>Plano de conta:</strong> selecione o plano de contas que será
          utilizado para lançar o valor da venda no fluxo de caixa;
        </p>
        <p>
          <strong>Forma de pagamento:</strong> selecione a forma de pagamento
          definida entre você e o seu cliente. Caso seja necessário inserir uma
          nova forma de pagamento, clique em <strong>Criar Novo</strong> no
          final da lista. Sua forma de pagamento personalizada ficará disponível
          para as próximas operações financeiras;
        </p>
        <p>
          <strong>Ignorar limite de crédito:</strong> marque esta opção se você
          deseja ignorar o limite de crédito estabelecido para este cliente;
        </p>
        <p>
          <strong>Forma de pagamento:</strong> será possível selecionar qual a
          condição de pagamento: <strong>à vista</strong> ou{" "}
          <strong>à prazo</strong>.
        </p>
        <p>
          Se for selecionada a opção <strong>a Prazo</strong>, será necessário
          informar o número de parcelas, para que sejam geradas as duplicatas;
        </p>

        <p>
          <strong>Nº de Parcelas:</strong> informe o número de parcelas que
          serão geradas;
        </p>
        <p>
          <strong>Entrada (R$):</strong> informe o valor de entrada pago pelo
          cliente, se houver;
        </p>
        <p>
          <strong>Tipo Intervalo:</strong> a informação selecionada neste campo
          disponibilizará outras opções no campo <strong>Período</strong>;
        </p>
        <p>
          <strong>Período:</strong> selecione o período de vencimento entre as
          parcelas.
        </p>

        <p>
          Logo após, clique no botão <strong>Gerar Pagamentos</strong>. Feito
          isso, a sua forma de pagamento será adicionada no campo{" "}
          <strong>Pagamentos (Informação para NFe/NFCe)</strong>.
        </p>

        <p>
          Através do botão <strong>Adicionar Pagamento</strong>, será possível
          inserir outras formas de pagamento, se for preciso.
        </p>

        <p>
          Caso, a forma de pagamento escolhida seja{" "}
          <strong>Cartão de Crédito</strong>, após informar as parcelas e clicar
          sobre <strong>Gerar pagamentos</strong>. Se abrirá outra janela com
          outros campos, informe os campos a seguir:
        </p>

        <BoxImage src={Image5} />
        <p>
          <strong>CV/NSU:</strong> informe o número CV/NSU que nada mais é do
          que um número que identifica as transações de cartão, sejam elas de
          débito ou crédito. Esse número fica localizado no documento impresso
          após ser passado o cartão na maquininha de pagamentos;
        </p>
        <p>
          <strong>Credenciadora/Operadora:</strong> informe a empresa
          (adquirente) responsável por fazer com que o dinheiro da sua venda com
          cartão de crédito ou débito chegue até você;
        </p>
        <p>
          <strong>Bandeira cartão:</strong> as bandeiras são as empresas que
          regulam o mercado de cartões de crédito. Informe a bandeira do cartão
          do seu cliente;
        </p>
        <p>
          <strong>Credenciadora/Operadora CNPJ:</strong> informe o CNPJ da
          credenciadora na qual o estabelecimento comercial possui vínculo;
        </p>
        <p>
          <strong>Terminal:</strong> informe qual é o terminal.
        </p>

        <p>
          Após o preenchimento das informações, clique no botão{" "}
          <strong>Aplicar a todas as parcelas</strong>. Veja a seguir, como o
          sistema exibirá as informações referentes ao pagamento por cartão de
          crédito.
        </p>

        <BoxImage src={Image6} />
        <p>
          Através do campo <strong>Pagamento com Cashback (R$)</strong>, se o
          seu cliente tem um valor em Cashback disponível informe neste campo.
        </p>

        <p>
          As informações abaixo serão preenchidas automaticamente depois que o
          pedido for faturado:
        </p>

        <ul>
          <li>
            <strong>Número NF-e:</strong> será informado o número da Nota Fiscal
            gerada a partir do pedido, se houver;
          </li>
          <li>
            <strong>Número NFS-e:</strong> será informado o número da NFS-e;
          </li>
          <li>
            <strong>Data Faturamento da NF-e:</strong> será preenchido com a
            data em que a nota fiscal foi gerada;
          </li>
        </ul>

        <p>Os três últimos campos poderão ser preenchidos:</p>

        <ul>
          <li>
            <strong>Documento Impressão:</strong> selecione uma das opções, caso
            seja necessário imprimir um documento para o pedido;
          </li>
          <li>
            <strong>Detalhes Faturamento:</strong> se for preciso, preencha
            alguma informação adicional sobre o faturamento;
          </li>
          <li>
            <strong>Transação do cartão:</strong> informe a transação do cartão.
          </li>
        </ul>

        <h4>Informações Gerais</h4>

        <p>
          Em seguida, na seção <strong>Informações Gerais</strong> você poderá
          atribuir ao seu pedido informações complementares:
        </p>

        <BoxImage src={Image7} />
        <p>
          <strong>Código Pedido/Ordem Compra do Cliente:</strong> informe o
          código do seu cliente, é um código interno gerado pelo sistema e será
          informado na Nota Fiscal;
        </p>
        <p>
          <strong>Data Cadastro:</strong> esta data o sistema atualiza de acordo
          com o calendário atual;
        </p>
        <p>
          <strong>Vendedor:</strong> selecione entre seus usuários, quem foi o
          vendedor responsável;
        </p>
        <p>
          <strong>Contato do Cliente:</strong> informe o contato do cliente que
          está solicitando o serviço;
        </p>
        <p>
          <strong>Categoria:</strong> selecione a categoria que melhor se
          enquadra para sua venda, se houver necessidade;
        </p>
        <p>
          <strong>Status do Sistema:</strong> este campo sempre será modificado
          automaticamente pelo sistema, conforme a evolução da sua venda;
        </p>
        <p>
          <strong>Validade:</strong> informe a validade do Pedido/Orçamento;
        </p>
        <p>
          <strong>Oportunidade:</strong> será preenchido automaticamente com o
          número da oportunidade do CRM, quando a venda tiver sido gerada a
          partir de uma oportunidade;
        </p>
        <p>
          <strong>Relacionado com pedido:</strong> relacione este novo pedido
          com algum outro pedido, se houver necessidade;
        </p>
        <p>
          <strong>Número da Revisão:</strong> caso seja preciso informe o número
          da revisão do pedido;
        </p>
        <p>
          <strong>E-mail Destinatário:</strong> preencha este campo para enviar
          o pedido para o e-mail do seu cliente ou o sistema preencherá de
          acordo com os dados cadastrados, anteriormente;
        </p>
        <p>
          <strong>E-mail Faturamento Destinatário:</strong> neste campo informe
          o e-mail do setor de faturamento;
        </p>
        <p>
          <strong>E-mail Comercial Destinatário:</strong> informe o e-mail do
          setor comercial;
        </p>
        <p>
          <strong>Alterado por:</strong> usuário que realizou a última alteração
          no orçamento/pedido;
        </p>
        <p>
          <strong>Data alteração:</strong> data da última alteração;
        </p>
        <p>
          <strong>Data Recebimento Email:</strong> o sistema irá trazer a
          informação de quando o cliente realizou a abertura do email;
        </p>
        <p>
          <strong>Gerar Ordem de Serviço:</strong> marque esta opção caso seja
          necessário gerar uma ordem de serviço a partir desta venda.
        </p>

        <h4>Informações sobre a Entrega</h4>
        <p>
          Caso você precise realizar a entrega de algum dos produtos, através
          desta seção, você poderá preencher as informações para envio.
        </p>

        <BoxImage src={Image8} />
        <p>
          Inicialmente, é possível definir qual será o meio de envio:{" "}
          <strong>Correios, JadLog ou Outro.</strong>
        </p>

        <p>
          <strong>Tipo de Endereço:</strong> selecione neste campo: Pessoa,
          Cobrança ou Entrega. Esta informação será enviada para a listagem do
          SIGEP WEB;
        </p>
        <p>
          <strong>Meio de Envio:</strong> selecione uma das opções disponíveis.
          Com a opção Correios selecionada, através do botão Configurar Envio
          SIGEP será possível enviar seus pedidos através do SIGEP WEB;
        </p>
        <p>
          <strong>Transportadora:</strong> selecione a transportadora já
          cadastrada no sistema;
        </p>
        <p>
          <strong>Código Rastreio:</strong> quando a entrega for por realizada
          pelos Correios, o código será gerado automaticamente. Quando for por
          outro meio, você poderá informar o código neste campo, caso desejar;
        </p>
        <p>
          <strong>Data Envio:</strong> informe a data prevista para o envio da
          mercadoria;
        </p>
        <p>
          <strong>Total Frete (R$):</strong> ao informar o frete, no grupo dos
          produtos adicionados. Este campo será preenchido automaticamente;
        </p>
        <p>
          <strong>Previsão de Entrega:</strong> informe a data prevista para que
          os produtos cheguem até o cliente;
        </p>
        <p>
          <strong>Endereço:</strong> verifique se o endereço está informado. Ou
          informe o CEP para que o sistema faça a busca do endereço, depois
          disso, informe o número e o complemento;
        </p>
        <p>
          <strong>Exibir Opções CTe:</strong> o CT-e se aplica para as
          organizações que fazem transporte de cargas por intermédio de uma
          transportadora. Ao selecionar esta opção o sistema disponibilizará
          outros campos para serem preenchidos.
        </p>

        <h4>Informações sobre Impostos</h4>

        <p>
          Os impostos serão calculados automaticamente a partir das alíquotas
          informadas nas operações fiscais. Os cálculos serão feitos após o
          pedido ser salvo. Por tratarem-se de cálculos automáticos, não poderão
          ser alterados pelo usuário.
        </p>

        <BoxImage src={Image9} />
        <p>
          <b>Observações e Termos</b>
        </p>
        <p>
          Se houver necessidade, informe nestes campos: Observações, Termos e
          Condições de Venda e os Motivos de Cancelamento. Estes dados poderão
          aparecer na impressão do pedido.
        </p>
        <BoxImage src={Image10} />
        <p>
          Após o preenchimento das informações, salve o seu documento. Clicando
          em Salvar, o sistema fará o registro de todas as informações.
        </p>
        <p>
          Agora você já pode Aprovar o Orçamento ou então Faturar seu pedido.
          Siga o artigo:{" "}
          <a href="/cadastros-basicos/como-aprovar-e-faturar-pedidos-e-orcamentos-no-sistema-erp">
            Como Aprovar e Faturar Pedidos e Orçamentos no Sistema ERP
          </a>{" "}
          e{" "}
          <a href="/vendas/como-emitir-nf-e-atraves-de-pedidos-no-sistema-erp">
            Como emitir nota fiscal (NF-e) através de um pedido no Sistema ERP
          </a>{" "}
          e saiba mais sobre o assunto.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoGerarPedidosEOrcamentosNoSistemaERP;
