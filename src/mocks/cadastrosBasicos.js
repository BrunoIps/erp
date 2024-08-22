import ComoAdicionarImagensEmLoteNosProdutosDoSistemaERP from "../screens/cadastrosBasicos/ComoAdicionarImagensEmLoteNosProdutosDoSistemaERP";
import ComoAprovarEFaturarPedidosEOrcamentosNoSistemaERP from "../screens/cadastrosBasicos/ComoAprovarEFaturarPedidosEOrcamentosNoSistemaERP";
import ComoCadastrarCategoriasDeVendaParaOperacoesFiscaisNoSistemaERP from "../screens/cadastrosBasicos/ComoCadastrarCategoriasDeVendaParaOperacoesFiscaisNoSistemaERP";
import ComoCadastrarContaBancariaParaEmitirBoletoNoSistemaERP from "../screens/cadastrosBasicos/ComoCadastrarContaBancariaParaEmitirBoletoNoSistemaERP";
import ComoCadastrarProdutosAlimenticiosFoodsNoSistemaERP from "../screens/cadastrosBasicos/ComoCadastrarProdutosAlimenticiosFoodsNoSistemaERP";
import ComoCadastrarProdutosDoTipoPizzaNoSistemaERP from "../screens/cadastrosBasicos/ComoCadastrarProdutosDoTipoPizzaNoSistemaERP";
import ComoCadastrarProdutosSimplesNoSistemaERP from "../screens/cadastrosBasicos/ComoCadastrarProdutosSimplesNoSistemaERP";
import ComoCadastrarTabelasDePrecosNoSistemaERP from "../screens/cadastrosBasicos/ComoCadastrarTabelasDePrecosNoSistemaERP";
import ComoConfigurarOServidordeEmailNoSistemaERP from "../screens/cadastrosBasicos/ComoConfigurarOServidordeEmailNoSistemaERP";
import ComoConfigurarOsTamanhosDeProdutosNoSistemaERP from "../screens/cadastrosBasicos/ComoConfigurarOsTamanhosDeProdutosNoSistemaERP";
import ComoInformarOGrupoTributarioNosProdutosnoSistemaERP from "../screens/cadastrosBasicos/ComoInformarOGrupoTributarioNosProdutosnoSistemaERP";
import ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP from "../screens/cadastrosBasicos/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP";
import ConfigurandoOServidorDoGmail from "../screens/cadastrosBasicos/ConfigurandoOServidorDoGmail";
import IntegrandoMercadoPagoNoSistemaERP from "../screens/cadastrosBasicos/IntegrandoMercadoPagoNoSistemaERP";

export const cadastroBasico = [
  {
    text: "Como adicionar Imagens em lote nos Produtos do Sistema ERP",
    path: "/cadastros-basicos/como-adicionar-imagens-em-lote-nos-produtos-do-sistema-erp",
    element: <ComoAdicionarImagensEmLoteNosProdutosDoSistemaERP />,
  },
  {
    text: "Como cadastrar Tabelas de Preços no Sistema ERP",
    path: "/cadastros-basicos/como-cadastrar-tabelas-de-precos-no-sistema-erp",
    element: <ComoCadastrarTabelasDePrecosNoSistemaERP />,
  },
  {
    text: "Integrando Mercado Pago no Sistema ERP",
    path: "/cadastros-basicos/integrando-mercado-pago-no-sistema-erp",
    element: <IntegrandoMercadoPagoNoSistemaERP />,
  },
  {
    text: "Como cadastrar Categorias de Venda para operações fiscais no Sistema ERP",
    path: "/cadastros-basicos/como-cadastrar-categorias-de-venda-para-operacoes-fiscais-no-sistema-erp",
    element: <ComoCadastrarCategoriasDeVendaParaOperacoesFiscaisNoSistemaERP />,
  },
  {
    text: "Como Aprovar e Faturar Pedidos e Orçamentos no Sistema ERP",
    path: "/cadastros-basicos/como-aprovar-e-faturar-pedidos-e-orcamentos-no-sistema-erp",
    element: <ComoAprovarEFaturarPedidosEOrcamentosNoSistemaERP />,
  },
  {
    text: "Como informar o Grupo Tributário nos Produtos no Sistema ERP",
    path: "/cadastros-basicos/como-informar-o-grupo-tributario-nos-produtos-no-sistema-erp",
    element: <ComoInformarOGrupoTributarioNosProdutosnoSistemaERP />,
  },
  {
    text: "Como configurar os Tamanhos de Produtos no Sistema ERP",
    path: "/cadastros-basicos/como-configurar-os-tamanhos-de-produtos-no-sistema-erp",
    element: <ComoConfigurarOsTamanhosDeProdutosNoSistemaERP />,
  },
  {
    text: "Como cadastrar Produtos do Tipo Pizza no Sistema ERP",
    path: "/cadastros-basicos/como-cadastrar-produtos-do-tipo-pizza-no-sistema-erp",
    element: <ComoCadastrarProdutosDoTipoPizzaNoSistemaERP />,
  },
  {
    text: "Como realizar a integração com Correios SIGEP Web no Sistema ERP",
    path: "/cadastros-basicos/como-realizar-a-integracao-com-correios-sigep-web-no-sistema-erp",
    element: <ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP />,
  },
  {
    text: "Como cadastrar Conta Bancária para emitir boleto no Sistema ERP",
    path: "/cadastros-basicos/como-cadastrar-conta-bancaria-para-emitir-boleto-no-sistema-erp",
    element: <ComoCadastrarContaBancariaParaEmitirBoletoNoSistemaERP />,
  },
  {
    text: "Como configurar o Servidor de E-mail no Sistema ERP",
    path: "/cadastros-basicos/como-configurar-o-servidor-de-e-mail-no-sistema-erp",
    element: <ComoConfigurarOServidordeEmailNoSistemaERP />,
  },
  {
    text: "Configurando o Servidor do Gmail",
    path: "/cadastros-basicos/configurando-o-servidor-do-gmail",
    element: <ConfigurandoOServidorDoGmail />,
  },
  {
    text: "Como cadastrar Produtos Alimentícios (Foods) no Sistema ERP",
    path: "/cadastros-basicos/como-cadastrar-produtos-alimenticios-foods-no-sistema-erp",
    element: <ComoCadastrarProdutosAlimenticiosFoodsNoSistemaERP />,
  },
  {
    text: "Como cadastrar Produtos Simples no Sistema ERP",
    path: "/cadastros-basicos/como-cadastrar-produtos-simples-no-sistema-erp",
    element: <ComoCadastrarProdutosSimplesNoSistemaERP />,
  },
];
