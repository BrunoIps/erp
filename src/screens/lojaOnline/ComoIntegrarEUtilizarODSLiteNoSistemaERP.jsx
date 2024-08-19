import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoIntegrarEUtilizarODSLiteNoSistemaERP1.png";
import Image2 from "../../assets/ComoIntegrarEUtilizarODSLiteNoSistemaERP2.png";
import Image3 from "../../assets/ComoIntegrarEUtilizarODSLiteNoSistemaERP3.png";
import Image4 from "../../assets/ComoIntegrarEUtilizarODSLiteNoSistemaERP4.png";
import Image5 from "../../assets/ComoIntegrarEUtilizarODSLiteNoSistemaERP5.png";
import Image6 from "../../assets/ComoIntegrarEUtilizarODSLiteNoSistemaERP6.png";
import Image7 from "../../assets/ComoIntegrarEUtilizarODSLiteNoSistemaERP7.png";
import Image8 from "../../assets/ComoIntegrarEUtilizarODSLiteNoSistemaERP8.png";
import Image9 from "../../assets/ComoIntegrarEUtilizarODSLiteNoSistemaERP9.png";
import Image10 from "../../assets/ComoIntegrarEUtilizarODSLiteNoSistemaERP10.png";
import Image11 from "../../assets/ComoIntegrarEUtilizarODSLiteNoSistemaERP11.png";
import Image12 from "../../assets/ComoIntegrarEUtilizarODSLiteNoSistemaERP12.png";
import BoxImage from "../../components/Image/BoxImage";
import SubTitle from "../../components/Subtitle/subtitle";

const ComoIntegrarEUtilizarODSLiteNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como integrar e utilizar o DSLite no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          O <a href="https://www.dslite.com.br/">DSLite</a> é uma plataforma
          online, em que os fornecedores dispõem estoque virtual de produtos
          para os lojistas/vendedores. Esse sistema utiliza o método
          dropshipping, que consiste em receber pedidos de seus clientes do Loja
          Online e encaminhar estes pedidos ao seu fornecedor, que cuidará do
          envio dos produtos para os seus clientes em nome da empresa.
        </p>
        <p>
          Neste artigo será informado como realizar essa integração e como ela é
          utilizada na prática.
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <SubTitle variant="h" component="h1">
          Como realizar a configuração de integração do DSLite no Sistema ERP
        </SubTitle>
        <p>
          Primeiramente, acesse o menu lateral{" "}
          <strong>Central de Integrações,</strong> submenu
          <strong>Minhas Lojas.</strong>
        </p>
        <BoxImage src={Image1} />
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Em seguida, acesse o menu lateral <strong>Drop Shipping</strong>.
        </p>

        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Após, clique em <strong>Adicionar Plataforma,</strong> e selecione a
          opção <strong>DSlite</strong>.
        </p>

        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <strong>
            Nesta nova tela, na aba <strong>Dados da integração,</strong>{" "}
            informe o os seguintes dados
          </strong>
        </p>

        <BoxImage src={Image4} />

        <p>
          <strong>Nome da integração:</strong> informe um nome para sua
          integração no DSLite;
          <br />
          <strong>API token:</strong> informe o token de API para a integração
          do DSLite.
        </p>

        <p>
          Por fim, clique em <strong>Salvar</strong> no topo da tela.
        </p>

        <p>
          <strong>Como verificar o API token no painel DSLite</strong>
        </p>

        <p>
          Para verificar o API token necessário para a integração, realize o
          seguinte passo a passo:
          <br />
          1-
          <a href="https://app.dslite.com.br/modules/admin/usuario/requestlogin">
            Acesse o painel DSLite
          </a>
          ;
          <br />
          <br />
          2- Clique em <strong>Consultas</strong>;
          <br />
          <br />
          3- Edite ou visualize a <strong>Empresa</strong>;
          <br />
          <br />
          4- Acesse a aba <strong>Dados Gerais</strong>;
          <br />
          <br />
          5- Verifique que no campo <strong>Chave API</strong> terá a informação
          necessária para a integração.
        </p>

        <BoxImage src={Image5} />

        <SubTitle>
          <strong>
            Como importar os produtos do DSLite para o Sistema ERP
          </strong>
        </SubTitle>
        <p>
          Após a configuração, será exibida a tela de{" "}
          <strong>Integração DSlite.</strong>
        </p>
        <p>
          Neste momento, <strong>localize o produto</strong> e clique em
          <strong> Vender na Loja.</strong>
        </p>
        <p>
          No campo <strong>Fornecedor</strong>, é possível que você selecione o
          fornecedor que deseja, e também será possível buscar determinado
          produto pela
          <strong>Pesquisa por SKU,</strong> ou então utilizando o{" "}
          <strong>Filtro Avançado.</strong>
        </p>
        <BoxImage src={Image6} />
        <p>
          Após aplicar o filtro, será exibida a{" "}
          <strong>listagem de produtos</strong>, onde será possível
          <strong> selecionar o produto</strong> e em seguida, clicar em
          <strong>Selecione uma Ação </strong>e selecionar a opção{" "}
          <strong>Importar</strong>.
        </p>

        <BoxImage src={Image7} />

        <p>
          Dessa forma, será criado um novo produto no Sistema ERP, com os dados
          já configurados do produto no DSLite. Como por exemplo, nome,
          descrição, fornecedor, imagens, preço de custo e preço de venda.
        </p>

        <SubTitle>
          Como configurar o DSLite na Loja Online do Sistema ERP
        </SubTitle>
        <p>
          Para configurar o DSLite na Loja Online, acesse o menu lateral Loja
          Online, submenu Configurações.
        </p>
        <BoxImage src={Image8} />
        <p>
          Em seguida, acesse a aba <strong>Integrações</strong>, e selecione a
          opção <strong>Ativar</strong>. Após,{" "}
          <strong>
            Selecione uma integração configurada e clique em Salvar
          </strong>{" "}
          no topo da tela.
        </p>
        <BoxImage src={Image9} />

        <SubTitle>
          Como vender produtos do DSLite na Loja Online do Sistema ERP
        </SubTitle>
        <p>
          Assim que o produto estiver criado no Sistema ERP, será possível você
          enviá-lo para a Loja Online. Dessa forma, acesse o menu lateral{" "}
          <strong>Loja Online, submenu Produtos.</strong>
        </p>
        <BoxImage src={Image10} />
        <p>
          Após, <strong>localize o produto</strong> e selecione a opção{" "}
          <strong>Enviar para Loja</strong>.
        </p>
        <BoxImage src={Image11} />
        <p>
          No momento do cliente realizar a compra desse produto na Loja Online,
          ele não saberá que o envio da mercadoria será realizado pelo seu
          fornecedor. Sendo assim, o valor do frete será aplicado da mesma forma
          que os demais produtos informados no site.
        </p>
        <BoxImage src={Image12} />
        <SubTitle>Como funciona a compra de diferentes produtos</SubTitle>
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
          nota fiscal de venda e boletos, poderá conter todos os produtos
          vendidos e consequentemente terão o valor total da venda. Utilize o
          <a href="/vendas/como-agrupar-pedidos-e-emitir-a-nota-fiscal-no-sistema-erp">
            {" "}
            agrupamento de pedido para realizar esse procedimento.
          </a>
        </p>

        <SubTitle>Registro da venda no Sistema ERP</SubTitle>
        <p>
          Por fim, de acordo com a forma de pagamento informada pelo cliente no
          momento de finalização da compra, o pedido é informado no Sistema ERP
          com o status de “pedido faturado” ou “pedido”. Em caso de ser
          “pedido”, é possível que você informe alguma categoria de venda que
          não movimente o estoque. Porém, caso estiver com o status de “pedido
          faturado”, por padrão, será informada a Categoria De Venda Padrão que
          foi configurada na Loja Online, podendo ou não realizar movimentações
          no seu estoque.
          {/* aqui tem que fazer pagina */}
        </p>
        <br />

        <p>
          Após isso, basta emitir a NF-e do seu pedido e automaticamente os
          dados da venda serão repassados ao fornecedor, por meio da integração
          com o DSLite. Sendo assim, o fornecedor receberá os dados dos itens
          comprados pelo seu cliente, bem como o endereço que será realizada a
          entrega. Dessa forma, você poderá acompanhar o andamento desse
          processo diretamente pelo painel DSLite.
          {/* aqui tem que fazer pagina  */}
        </p>
        <br />
        <br />

        <SubTitle>Importante!!</SubTitle>
        <p>
          As informações nome, descrição, fornecedor, imagens, preço de custo e
          preço de venda, só irão ser atualizadas no cadatsro do produto no
          Sistema ERP se o mesmo for importado, ou seja, o produto seja
          cadastrado no ERP através de Importação do DSLite. Se o produto foi
          inicialmente cadastrado ERP e desejar importar os dados do DSLite para
          o cadastro do produto, as informação não vão ser atualizadas no ERP.
        </p>
      </Typography>
    </Container>
  );
};

export default ComoIntegrarEUtilizarODSLiteNoSistemaERP;
