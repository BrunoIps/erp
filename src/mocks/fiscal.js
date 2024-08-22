import ComoCadastrarGrupoTributarioNoSistemaERP from "../screens/fiscal/ComoCadastrarGrupoTributarioNoSistemaERP";
import ComoCadastrarOperacoesFiscaisParaEmitirNFNoSistemaERP from "../screens/fiscal/ComoCadastrarOperacoesFiscaisParaEmitirNFNoSistemaERP";
import ComoEmitirNFEComProdutosDeMesmaTributacaoNoSistemaERP from "../screens/fiscal/ComoEmitirNFEComProdutosDeMesmaTributacaoNoSistemaERP";
import ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP from "../screens/fiscal/ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP";
import ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP from "../screens/fiscal/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP";
import ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP from "../screens/fiscal/ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP";

export const fiscal = [
  {
    text: "Como cadastrar Operações Fiscais para emitir NF-e no Sistema ERP",
    path: "/fiscal/como-cadastrar-operacoes-fiscais-para-emitir-nf-e-no-sistema-erp",
    element: <ComoCadastrarOperacoesFiscaisParaEmitirNFNoSistemaERP />,
  },
  {
    text: "Como emitir NF-e com produtos de mesma tributação no Sistema ERP",
    path: "/fiscal/como-emitir-nf-e-com-produtos-de-mesma-tributacao-no-sistema-erp",
    element: <ComoEmitirNFEComProdutosDeMesmaTributacaoNoSistemaERP />,
  },
  {
    text: "Como emitir NF-e com produtos de tributações diferentes no Sistema ERP",
    path: "/fiscal/como-emitir-nf-e-com-produtos-de-tributacoes-diferentes-no-sistema-erp",
    element: <ComoEmitirNFEComProdutosDeTributacoesDiferentesNoSistemaERP />,
  },
  {
    text: "Como emitir NF-e para empresas diferentes com produtos de mesma tributação no Sistema ERP",
    path: "/fiscal/como-emitir-nf-e-para-empresas-diferentes-com-produtos-de-mesma-tributacao-no-sistema-erp",
    element: (
      <ComoEmitirNFEParaEmpresasDiferentesComProdutosDeMesmaTributacaoNoSistemaERP />
    ),
  },
  {
    text: "Como emitir NF-e para empresas diferentes com produtos de tributações diferentes no Sistema ERP",
    path: "/fiscal/como-emitir-nf-e-para-empresas-diferentes-com-produtos-de-tributacoes-diferentes-no-sistema-erp",
    element: (
      <ComoEmitirNFEParaEmpresasDiferentesComProdutosDeTributacoesDiferentesNoSistemaERP />
    ),
  },
  {
    text: "Como cadastrar Grupo Tributário no Sistema ERP",
    path: "/fiscal/como-cadastrar-grupo-tributario-no-sistema-erp",
    element: <ComoCadastrarGrupoTributarioNoSistemaERP />,
  },
];
