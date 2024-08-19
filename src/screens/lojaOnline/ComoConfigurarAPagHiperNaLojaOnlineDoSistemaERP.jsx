import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarAPagHiperNaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarAPagHiperNaLojaOnlineDoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarAPagHiperNaLojaOnlineDoSistemaERP3.png";
import Image4 from "../../assets/ComoConfigurarAPagHiperNaLojaOnlineDoSistemaERP4.png";
import Image5 from "../../assets/ComoConfigurarAPagHiperNaLojaOnlineDoSistemaERP5.png";
import Image6 from "../../assets/ComoConfigurarAPagHiperNaLojaOnlineDoSistemaERP6.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarAPagHiperNaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar a PagHiper na Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Para que seja possível realizar a integração da plataforma PagHiper
          junto à Loja Online, é necessário que você possua acesso ao painel
          PagHiper e que realize essa configuração no ERP. Vamos informar neste
          artigo como realizar essa integração. Acompanhe!
        </p>
        <p>
          primeiro, acesse o menu lateral <b>Loja Online,</b> submenu{" "}
          <b>Configurações</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Em seguida, acesse a aba <b>Pagamentos</b>, e habite a opção{" "}
          <b>PagHiper</b>.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Em seguida, será aberto um campo para <b>Configurar Integração.</b> Ao
          clicar neste campo, você será direcionado para a tela de integração
          com o PagHiper. Na nota que se abre, clique em <b>Conectar Conta.</b>
        </p>
        <BoxImage src={Image3} />
        <p>Feito isso, será aberto a tela para informar alguns campos.</p>
        <BoxImage src={Image4} />
        <p>
          <strong>Básico</strong>
        </p>
        <p>
          <strong>Nome Lojista:</strong> informe o nome da sua empresa na
          integração com o PagHiper;
        </p>
        <p>
          <strong>ApiKey:</strong> informe o API Key realizado no painel do
          PagHiper. Para saber mais,
          <a href="/loja-online/como-obter-a-apikey-e-o-token-da-paghiper-para-a-loja-online-do-sistema-erp">
            clique aqui
          </a>
          ;
        </p>
        <p>
          <strong>Token:</strong> informe o Token Key obtido no painel do
          PagHiper. Para saber mais,
          <a href="/loja-online/como-obter-a-apikey-e-o-token-da-paghiper-para-a-loja-online-do-sistema-erp">
            clique aqui
          </a>
          ;
        </p>
        <p>
          <strong>Empresa:</strong> informe a empresa que será integrada ao
          PagHiper.
        </p>
        <p>
          <strong>Aba Boletos</strong>
        </p>
        <BoxImage src={Image5} />
        <p>
          <strong>Fixo:</strong> esta opção se refere ao desconto aplicando ao
          pagamento que será realizado com desconto antecipado. Se for um valor
          em reais fixo, marque esta opção. Caso seja um desconto em percentual,
          deixe esta opção desmarcada;
        </p>
        <br />
        <p>
          <strong>Percentual da multa:</strong> selecione o percentual de multa
          que será aplicado em caso de atraso de pagamento;
        </p>
        <br />
        <p>
          <strong>Dias após o vencimento:</strong> informe a quantidade de dias
          que é possível realizar o pagamento a dados de vencimento;
        </p>
        <br />
        <p>
          <strong>Juros por atraso:</strong> selecione se haverá ou não a
          aplicação de juros após um data de vencimento;
        </p>
        <br />
        <p>
          <strong>Dias pagamento com antecedência:</strong> informe a quantidade
          de dias para pagamento que haja desconto no pagamento;
        </p>
        <br />
        <p>
          <strong>Pagamento com antecedência:</strong> informe o desconto que
          será aplicado caso o boleto pago com antecedência de acordo com a
          quantidade de dias estabelecidos anteriormente. Lembre-se que este
          campo está relacionado com a opção Desconto fixo, informado
          anteriormente.
        </p>
        <br />
        <p>
          <strong>Aba Configurações ERP</strong>
        </p>
        <p>
          <strong>Plano de Contas de Despesa:</strong> informe o plano de contas
          de despesa em relação à taxa cobrada pelo PagHiper pela geração de
          boletos;
        </p>
        <p>
          <strong>Plano de Contas de Receita:</strong> informe o plano de contas
          de receita em relação à realização do lançamento financeiro de uma
          venda, em que a conta bancária será o PagHiper;
        </p>
        <p>
          <strong>Centro de custos para lançamentos de taxas:</strong> caso
          deseje controlar as despesas por centros de custos, determine qual
          será o centro de custos;
        </p>
        <p>
          <strong>Grupo de lançamentos para lançamento de taxas:</strong> caso
          deseje controlar as despesas por grupo de lançamentos, determine qual
          será o grupo.
        </p>
        <br />
        <p>
          Por fim, clique em <strong>Salvar</strong>.
        </p>
        <BoxImage src={Image6} />
        <p>
          Em seguida, ao retornar para a tela da configuração da Loja Online,
          você verá o campo <strong>Dias para Vencimento.</strong>
        </p>
        <br />
        <p>
          Neste momento será necessário informar a data para o vencimento do
          boleto, por exemplo, 5 dias. Nesse caso, se o cliente realizar uma
          compra no dia 10, ele terá até o dia 15 para realizar o pagamento.
        </p>
        <br />
        <p>
          Realizada essa configuração, clique em <strong>Salvar</strong> no topo
          da tela.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarAPagHiperNaLojaOnlineDoSistemaERP;
