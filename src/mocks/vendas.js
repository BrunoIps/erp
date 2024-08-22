import ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP from "../screens/vendas/ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP";
import ComoEmitirNFEAtravesDePedidosNoSistemaERP from "../screens/vendas/ComoEmitirNFEAtravesDePedidosNoSistemaERP";
import ComoGerarPedidosEOrcamentosNoSistemaERP from "../screens/vendas/ComoGerarPedidosEOrcamentosNoSistemaERP";

export const vendas = [
  {
    text: "Como Agrupar Pedidos e emitir a Nota Fiscal no Sistema ERP",
    path: "/vendas/como-agrupar-pedidos-e-emitir-a-nota-fiscal-no-sistema-erp",
    element: <ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP />,
  },
  {
    text: "Como emitir NF-e através de Pedidos no Sistema ERP",
    path: "/vendas/como-emitir-nf-e-atraves-de-pedidos-no-sistema-erp",
    element: <ComoEmitirNFEAtravesDePedidosNoSistemaERP />,
  },
  {
    text: "Como gerar Pedidos e Orçamentos no Sistema ERP",
    path: "/vendas/como-gerar-pedidos-e-orcamentos-no-sistema-erp",
    element: <ComoGerarPedidosEOrcamentosNoSistemaERP />,
  },
];
