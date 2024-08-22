import ComoAdicionarImagensEmLoteNosProdutosDoSistemaERP from "../screens/cadastrosBasicos/ComoAdicionarImagensEmLoteNosProdutosDoSistemaERP";
import ComoAprovarEFaturarPedidosEOrcamentosNoSistemaERP from "../screens/cadastrosBasicos/ComoAprovarEFaturarPedidosEOrcamentosNoSistemaERP";
import ComoCadastrarCategoriasDeVendaParaOperacoesFiscaisNoSistemaERP from "../screens/cadastrosBasicos/ComoCadastrarCategoriasDeVendaParaOperacoesFiscaisNoSistemaERP";
import ComoCadastrarTabelasDePrecosNoSistemaERP from "../screens/cadastrosBasicos/ComoCadastrarTabelasDePrecosNoSistemaERP";
import ComoConfigurarOsTamanhosDeProdutosNoSistemaERP from "../screens/cadastrosBasicos/ComoConfigurarOsTamanhosDeProdutosNoSistemaERP";
import ComoInformarOGrupoTributarioNosProdutosnoSistemaERP from "../screens/cadastrosBasicos/ComoInformarOGrupoTributarioNosProdutosnoSistemaERP";
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
];
