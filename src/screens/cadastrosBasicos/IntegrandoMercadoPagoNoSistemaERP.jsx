import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/IntegrandoMercadoPagoNoSistemaERP1.png";
import Image2 from "../../assets/IntegrandoMercadoPagoNoSistemaERP2.png";
import Image3 from "../../assets/IntegrandoMercadoPagoNoSistemaERP3.png";
import Image4 from "../../assets/IntegrandoMercadoPagoNoSistemaERP4.png";
import Image5 from "../../assets/IntegrandoMercadoPagoNoSistemaERP5.png";
import Image6 from "../../assets/IntegrandoMercadoPagoNoSistemaERP6.png";
import Image7 from "../../assets/IntegrandoMercadoPagoNoSistemaERP7.png";
import Image8 from "../../assets/IntegrandoMercadoPagoNoSistemaERP8.png";
import Image9 from "../../assets/IntegrandoMercadoPagoNoSistemaERP9.png";
import Image10 from "../../assets/IntegrandoMercadoPagoNoSistemaERP10.png";
import Image11 from "../../assets/IntegrandoMercadoPagoNoSistemaERP11.png";
import Image12 from "../../assets/IntegrandoMercadoPagoNoSistemaERP12.png";
import Image13 from "../../assets/IntegrandoMercadoPagoNoSistemaERP13.png";
import Image14 from "../../assets/IntegrandoMercadoPagoNoSistemaERP14.png";
import Image15 from "../../assets/IntegrandoMercadoPagoNoSistemaERP15.png";
import BoxImage from "../../components/Image/BoxImage";

const IntegrandoMercadoPagoNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>Integrando Mercado Pago no Sistema ERP</TitleComponent>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          No Sistema ERP é possível estar efetuando a Integração do Mercado
          Pago, deixando mais fácil e ágil a geração de cobrança de recebimento
          das licenças geradas aos seus clientes. Para configurar a integração
          com o Mercado Pago, é necessário possuir uma conta junto ao Mercado
          Pago.
        </p>
        <p>Acesse sua conta junto ao mercado pago. </p>
        <p>
          Em Menu Lateral Seu <b>Negócio</b>, clique em <b>Configurações</b>
        </p>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Desta forma, clique em <b>Criar aplicação</b> para que seja possível
          estar integrando sua conta do Mercado Pago junto ao Sistema ERP, onde
          será direcionado a tela de cadastro desta aplicação:
        </p>
        <p>
          <BoxImage src={Image2} />
        </p>
        <p>
          <strong>Nome da Aplicação:</strong> informe o nome que desejas para
          reconhecimento da sua conta na integração;
        </p>
        <p>
          <strong>
            Qual o tipo de solução de pagamento você vai integrar?
          </strong>
          : selecione a opção <strong>Pagamentos Online</strong>
        </p>
        <p>Irá abrir novas opções</p>

        <p>
          <BoxImage src={Image3} />
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Você está usando uma plataforma de e-commerce?</strong>:
          Selecione a opção <strong>NÃO</strong>
        </p>
        <p>
          <strong>
            Selecione a plataforma que você vai utilizar para integrar
          </strong>
          : neste campo, selecione a opção <strong>Outrasplataformas</strong>
        </p>
        <p>
          <strong>Qual produto você está integrando?</strong>: selecione a opção{" "}
          <strong>Checkout Transparente</strong>
        </p>
        <p>
          Destaque o campo de autorização e termos juntamente com o reCAPTCHA de
          "Não sou um robô", e finalize clicando em{" "}
          <strong>Criar aplicação</strong>.
        </p>

        <BoxImage src={Image4} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Então será aberta a tela de Credenciais, onde será necessária ativar
          as mesmas
        </p>
        <p>
          <BoxImage src={Image5} />
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          No campo, Ative suas credenciais para usá-las na sua integração clique
          em <b>Ativar Credenciais</b>
        </p>
        <p>
          <BoxImage src={Image6} />
        </p>
        <p>Então, será direcionado a tela de Credenciais de Produção</p>
        <BoxImage src={Image7} />
        <p>
          Setor: selecione o setor de sua empresa ou selecione a opção de Outros
        </p>
        <p>O campo de site não será necessário estar preenchendo</p>
        <p>
          Destaque o campo de autorização e termos juntamente com o reCAPTCHA de
          Não sou um robô, e finalize clicando em
          <b> Ativar Credenciais de Produção.</b>
        </p>
        <BoxImage src={Image8} />
        <p>
          Então, será apresentada as informações necessárias para estar
          integrando o Mercado pago, junto ao Sistema ERP.
        </p>
        <h3>Sistema ERP</h3>
        <p>
          Com as informações geradas no Mercado Pago, será iniciada a
          configuração no ERP.
        </p>
        <p>
          Acesse Menu Lateral Cadastros e em seguida no Submenu Contas Bancárias{" "}
        </p>
        <BoxImage src={Image9} />
        Então, clique em novo para estar criando sua conta bancária do Mercado
        Pago
        <BoxImage src={Image10} />
        <p>
          Na tela de Cadastros de Conta bancária serão apresentados os seguintes
          campos para preenchimento
        </p>
        <BoxImage src={Image11} />
        <p>
          <strong>Nome:</strong> nome do titular da conta;
        </p>
        <p>
          <strong>Empresa:</strong> selecione a empresa entre as cadastradas no
          sistema, a qual a conta bancária pertence;
        </p>
        <p>
          <strong>Banco:</strong> selecione a instituição financeira da conta
          bancária: <strong>323 - Mercado Pago</strong>;
        </p>
        <p>
          <strong>Saldo Inicial (R$):</strong> o saldo inicial consiste no valor
          disponível na conta da empresa. O preenchimento deste campo
          possibilita o controle do seu saldo;
        </p>
        <p>
          <strong>Habilitar Emissão de Boletos e integrações por API:</strong>{" "}
          esta opção será utilizada para emissões de boletos, o sistema
          disponibilizará a aba Emissão de Boletos;
        </p>
        <p>
          <strong>Habilitar recebimento via Pix nas vendas:</strong> selecione
          esta opção se esta conta poderá receber pagamentos via Pix nas suas
          vendas. Onde será necessário possuir a chave PIX já cadastrada e ativa
          na sua conta com o Mercado Pago;
        </p>
        <p>
          <strong>Agência:</strong> número da agência financeira em que sua
          conta está vinculada;
        </p>
        <p>
          <strong>Dígito Agência:</strong> este é bem simples de localizar, vem
          depois do traço (ou espaço) e é o dígito verificador. Informe o dígito
          da sua agência, se por acaso sua agência não tiver dígito, informe
          zero(0) neste campo;
        </p>
        <p>
          <strong>Conta:</strong> número da sua conta;
        </p>
        <p>
          <strong>Dígito Conta:</strong> o dígito da conta é o número que
          aparece logo após o final do número da sua conta, depois de um traço
          ou espaço, se por acaso sua conta não tiver dígito, informe zero(0)
          neste campo.
        </p>
        <p>
          Em seguida, clique em <strong>Salvar</strong>. Feito isso, o cadastro
          da sua conta bancária será finalizado e salvo.
        </p>
        <p>
          Com a opção <strong>Habilitar Emissão de Boletos</strong> marcada,
          você deverá adicionar outras informações na aba{" "}
          <strong>Emissão de Boletos</strong>.
        </p>
        <BoxImage src={Image12} />
        <p>
          <strong>Nosso Número Inicial:</strong> código de controle que permite
          ao banco e ao beneficiário identificar os dados da cobrança que deu
          origem ao boleto de pagamento. Verifique com seu banco o número que
          você deverá informar nos boletos emitidos por sua empresa, siga sempre
          a sequência dos números;
        </p>
        <p>
          <strong>Multa (%):</strong> taxa cobrada ao dia em porcentagem, após a
          data de vencimento;
        </p>
        <p>
          <strong>Juros Mensais (%):</strong> taxa ao mês em porcentagem, após a
          data de vencimento;
        </p>
        <p>
          <strong>Desconto até o Vencimento (%):</strong> informe a taxa em
          porcentagem do desconto para pagamentos antecipados;
        </p>
        <p>
          <strong>Emitir boleto com comprovante de recebimento:</strong>{" "}
          selecione esta opção para obter o comprovante de recibo do pagador;
        </p>
        <p>
          <strong>Instrução para pagamento após o vencimento:</strong> informe
          neste campo uma orientação para os pagamentos efetuados após a data de
          vencimento.
        </p>
        <p>
          Em seguida, no campo de <strong>Carteira</strong>.
        </p>
        <BoxImage src={Image13} />
        <p>
          Não será informado nenhuma carteira na integração com o{" "}
          <b>Mercado Pago.</b>
        </p>
        <p>
          Por último, na aba Integrar <b>API</b> será preenchido com as
          informações geradas inicialmente no Mercado Pago.
        </p>
        <BoxImage src={Image14} />
        <p>
          Com os campos preenchidos, clique em Salvar. E por último valide se as
          informações de sua integração estão corretas, clicando em Validar
          Integração
        </p>
        <BoxImage src={Image15} />
        <p>
          Configurações validadas, já é possível estar utilizando a conta
          bancária do Mercado Pago junto ao Sistema ERP.
        </p>
      </Typography>
    </Container>
  );
};
export default IntegrandoMercadoPagoNoSistemaERP;
