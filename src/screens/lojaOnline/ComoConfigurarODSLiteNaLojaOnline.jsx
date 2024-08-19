import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarODSLiteNaLojaOnline1.png";
import Image2 from "../../assets/ComoConfigurarODSLiteNaLojaOnline2.png";
import Image3 from "../../assets/ComoConfigurarODSLiteNaLojaOnline3.png";
import Image4 from "../../assets/ComoConfigurarODSLiteNaLojaOnline4.png";

import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarODSLiteNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>Como configurar o DSLite na Loja Online</TitleComponent>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Com a integração DSLite você poderá realizar as vendas dos produtos em
          seu site, mas não precisará se preocupar com a entrega das mercadorias
          vendidas. Isso se deve ao fato de que a DSLite é uma plataforma que
          opera através de dropshipping. Esse termo nada mais é do que a venda
          de produtos sem possuir um estoque físico deles. Assim, no momento que
          é realizada uma venda, o fornecedor do produto é notificado e ele
          mesmo realiza o processo de despacho das mercadorias. E aí, gostou de
          saber isso? Então acompanhe o artigo que te mostramos mais detalhes
          sobre!
        </p>
        <p>
          Primeiramente, é necessário que você tenha uma conta junto à DSLite e
          realize a configuração dessa plataforma junto ao Sistema ERP. Criamos
          um artigo onde informa todos os passos para isso. Veja isso:{" "}
          <a href="/loja-online/como-integrar-e-utilizar-o-dslite-no-sistema-erp">
            Como integrar e utilizar o DSLite no Sistema ERP.
          </a>
        </p>
        <p>
          Feito isso, para configurar o DSLite na <strong>Loja Online,</strong>{" "}
          acesse o menu lateral Loja Online, submenu{" "}
          <strong>Configurações</strong> e em seguida, acesse a aba
          <strong>Integrações</strong>.
        </p>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Neste momento, localize a integração via DSLite e clique em{" "}
          <strong>Ativar</strong>. Após,
          <strong> Selecione uma integração configurada</strong> e clique em{" "}
          <strong>Salvar</strong> no topo da tela.
        </p>
        <BoxImage src={Image2} />
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Feito isso, a configuração estará disponível para uso. Mas para que
          isso de fato ocorra, é importante enviar os produtos vendidos via
          DSLite para a Loja Online.
        </p>

        <h4>
          <strong>Como vender produtos do DSLite na Loja Online</strong>
        </h4>
        <p>
          Assim que o produto estiver criado no Sistema ERP, será possível você
          enviá-lo para a Loja Online. Dessa forma, acesse o menu lateral L
          <strong>oja Online</strong>, submenu <strong>Produtos</strong>.
        </p>

        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Após, <strong>localize o produto </strong>e selecione a opção{" "}
          <strong>Enviar para Loja.</strong>
        </p>

        <BoxImage src={Image4} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          No momento do cliente realizar a compra desse produto na Loja Online,
          ele não saberá que o envio da mercadoria será realizado pelo seu
          fornecedor. Sendo assim, o valor do frete será aplicado da mesma forma
          que os demais produtos informados no site.
        </p>

        <h4>
          <strong>Como funciona a compra de diferentes produtos</strong>
        </h4>

        <p>
          Assim que o cliente realizar a compra, esse pedido será informado no
          Sistema ERP. Porém, é importante informar que, caso o cliente realize
          a compra de vários produtos, sendo do mesmo fornecedor ou de
          fornecedores diferentes, no Sistema ERP serão criadas vendas separadas
          para esse pedido, pois o envio será realizado por diferentes
          fornecedores ou podem ser de depósitos distintos.
        </p>
        <p>
          Além disso, o registro dos lançamentos financeiros também são gerados
          de forma proporcional para cada pedido separado. Mas, a geração da
          nota fiscal de venda e boletos poderá conter todos os produtos
          vendidos e consequentemente terão o valor total da venda. Utilize o
          <a href="/vendas/como-agrupar-pedidos-e-emitir-a-nota-fiscal-no-sistema-erp">
            {" "}
            agrupamento de pedido para realizar esse procedimento.
          </a>
        </p>

        <h4>
          <strong>Registro da venda no Sistema ERP</strong>
        </h4>
        <p>
          Por fim, de acordo com a forma de pagamento informada pelo cliente no
          momento de finalização da compra, o pedido é informado no Sistema ERP
          com o status de “pedido faturado” ou “pedido”. Em caso de ser
          “pedido”, é possível que você informe alguma categoria de venda que
          não movimente o estoque. Porém, caso estiver com o status de “pedido
          faturado”, por padrão, será informada a Categoria De Venda Padrão que
          foi configurada na Loja Online, podendo ou não realizar movimentações
          no seu estoque.
          {/* aqui precisa fazer pagina */}
        </p>
        <p>
          Após isso, basta emitir a NF-e do seu pedido e automaticamente os
          dados da venda serão repassados ao fornecedor, por meio da integração
          com o DSLite. Sendo assim, o fornecedor receberá os dados dos itens
          comprados pelo seu cliente, bem como o endereço que será realizada a
          entrega. Dessa forma, você poderá acompanhar o andamento desse
          processo diretamente pelo painel DSLite.
          {/* aqui precisa fazer pagina */}
        </p>
      </Typography>
    </Container>
  );
};

export default ComoConfigurarODSLiteNaLojaOnline;
