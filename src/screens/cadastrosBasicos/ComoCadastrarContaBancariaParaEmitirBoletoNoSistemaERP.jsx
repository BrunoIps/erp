import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoCadastrarContaBancariaParaEmitirBoletoNoSistemaERP1.png";
import Image2 from "../../assets/ComoCadastrarContaBancariaParaEmitirBoletoNoSistemaERP2.png";
import Image3 from "../../assets/ComoCadastrarContaBancariaParaEmitirBoletoNoSistemaERP3.png";
import Image4 from "../../assets/ComoCadastrarContaBancariaParaEmitirBoletoNoSistemaERP4.png";
import Image5 from "../../assets/ComoCadastrarContaBancariaParaEmitirBoletoNoSistemaERP5.png";

import BoxImage from "../../components/Image/BoxImage";

const ComoCadastrarContaBancariaParaEmitirBoletoNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como cadastrar Conta Bancária para emitir boleto no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Com o cadastro da sua conta bancária, você terá um controle maior
          sobre seus dados bancários e saldos. Você poderá cadastrar uma ou mais
          contas e, ainda, realizar o cadastro da conta bancária que será
          utilizada para emissão de boletos de cobrança.
        </p>

        <p>
          Para emitir boletos bancários, primeiramente, entre em contato com a
          sua instituição financeira. Verifique juntamente com o seu gerente, as
          seguintes informações:
        </p>

        <ul>
          <li>
            <strong>Conta Bancária:</strong> agência, dígito da agência, número
            da conta, dígito da conta;
          </li>
          <li>
            <strong>Nosso Número Inicial:</strong> verifique com seu banco o
            número que deverá ser informado nos boletos emitidos por sua
            empresa;
          </li>
          <li>
            <strong>Carteira Registrada:</strong> será através desta que o seu
            banco receberá a notificação de todos os boletos gerados. Isso é
            feito com o envio do chamado arquivo de remessa;
          </li>
          <li>
            <strong>Nr. Convênio:</strong> verifique com seu banco o número do
            convênio a ser informado nos boletos emitidos por sua empresa;
          </li>
          <li>
            <strong>
              UA, Nome da Agência, Byte Nosso Número e Nº conta difere do Nº
              cedente:
            </strong>{" "}
            estas informações são utilizadas por algumas instituições emissoras.
            Antes de começar, solicite ao gerente do seu banco se você irá
            precisar de alguma destas informações para concluir o cadastro.
          </li>
        </ul>

        <h3>Como cadastrar uma Conta Bancária</h3>

        <p>
          Para isso, acesse o menu <strong>Cadastros</strong>, submenu{" "}
          <strong>Contas Bancárias</strong> e clique em <strong>Novo</strong>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>Nesta página, informe os dados da sua conta bancária.</p>
        <BoxImage src={Image2} />
        <p>
          <strong>Nome:</strong> nome do titular da conta;
        </p>
        <p>
          <strong>Empresa:</strong> selecione a empresa entre as cadastradas no
          sistema, a qual a conta bancária pertence;
        </p>
        <p>
          <strong>Banco:</strong> selecione a instituição financeira da conta
          bancária;
        </p>
        <p>
          <strong>Saldo Inicial (R$):</strong> o saldo inicial consiste no valor
          disponível na conta da empresa. O preenchimento deste campo,
          possibilita o controle do seu saldo;
        </p>
        <p>
          <strong>Habilitar Emissão de Boletos:</strong> esta opção será
          utilizada para emissões de boletos, o sistema disponibilizará a aba
          Emissão de Boletos;
        </p>
        <p>
          <strong>Habilitar recebimento via Pix nas vendas:</strong> selecione
          esta opção se esta conta poderá receber pagamentos via Pix em suas
          vendas;
        </p>
        <p>
          <strong>Agência:</strong> número da agência financeira em que sua
          conta está vinculada;
        </p>
        <p>
          <strong>Dígito Agência:</strong> este é bem simples de localizar, vem
          depois do traço (ou espaço) é o dígito verificador. Informe o dígito
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
          você deverá adicionar outras informações na aba Emissão de Boletos.
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <BoxImage src={Image3} />
        <p>
          <strong>Nosso Número Inicial:</strong> código de controle que permite
          ao banco e ao beneficiário identificar os dados da cobrança que deu
          origem ao boleto de pagamento. Verifique com seu banco o número que
          você deverá informar nos boletos emitidos por sua empresa, siga sempre
          a sequência dos números;
        </p>
        <p>
          <strong>UA:</strong> é a Unidade de Atendimento, algumas instituições
          financeiras utilizam esta informação para configuração dos boletos;
        </p>
        <p>
          <strong>Multa (%):</strong> taxa cobrada ao dia em porcentagem, após a
          data de vencimento;
        </p>
        <p>
          <strong>Byte Nosso Número:</strong> é necessário que seja informado o
          byte do nosso número para que a emissão dos boletos e conciliação do
          retorno ocorram. Algumas instituições financeiras utilizam esta
          informação para configuração dos boletos;
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

        <p>Em seguida, preencha as informações de protestos:</p>

        <BoxImage src={Image4} />
        <BoxImage src={Image5} />
        <p>
          <strong>Banco pode protestar boletos:</strong> selecione esta opção se
          você deseja autorizar o protesto dos boletos em atraso. Esse processo
          deve ser autenticado pelo banco, informe o prazo em dias, para a
          realização do protesto;
        </p>
        <p>
          <strong>Banco pode devolver boletos:</strong> é comum emitir o boleto
          e o consumidor não pagar, desistindo de efetivar a compra. Selecione
          esta opção para o banco fazer a devolução dos boletos cancelados,
          informe o prazo em dias em que o seu banco poderá fazer a devolução
          dos boletos;
        </p>
        <p>
          <strong>Nº conta difere do Nº cedente:</strong> este campo aparecerá,
          de acordo com o banco cadastrado no campo (Base), o código do cedente
          é um número informado pelo gerente de contas no momento da contratação
          da carteira de cobrança. Muitas vezes o código de cedente é o próprio
          número da conta. Dependendo do layout adotado pelo banco, o código do
          cedente é acrescido de um dígito verificador no layout do boleto.
        </p>

        <p>
          Em seguida, preencha as informações sobre a <strong>Carteira</strong>.
        </p>

        <p>
          No campo <strong>Pesquisar</strong>, selecione dentre as alternativas,
          o tipo de carteira que irá utilizar e clique em{" "}
          <strong>Adicionar</strong>.
        </p>

        <p>
          Feito isso, será exibido o campo{" "}
          <strong>Carteiras Adicionadas</strong>, preencha as informações
          seguintes:
        </p>
        <ul>
          <li>
            <strong>Padrão:</strong> caso você adicione mais de uma carteira, o
            sistema lhe permitirá selecionar a carteira padrão para a emissão;
          </li>
          <li>
            <strong>Nome:</strong> será o nome da carteira adicionada;
          </li>
          <li>
            <strong>Taxa:</strong> informe o valor cobrado para emissão do
            boleto referente ao recebimento do retorno, ainda que o valor pago
            seja extraído da taxa, o boleto e o seu lançamento será considerado
            como pago;
          </li>
          <li>
            <strong>Subtrair Taxa no Valor Pago:</strong> ao marcar esta opção o
            sistema irá subtrair o valor da taxa, do valor pago;
          </li>
        </ul>

        <p>
          Agora que você já cadastrou os dados bancários e as informações para a
          emissão dos seus boletos, clique em <strong>Salvar</strong>.
        </p>

        <p>
          <strong>Fique Atento!</strong> Confirme o banco que utiliza para
          emissão de boletos as informações podem mudar, desse modo, é
          recomendado sempre confirmar com seu banco as informações a serem
          preenchidas nesses campos da aba Emissão de Boletos.
        </p>
      </Typography>
    </Container>
  );
};

export default ComoCadastrarContaBancariaParaEmitirBoletoNoSistemaERP;
