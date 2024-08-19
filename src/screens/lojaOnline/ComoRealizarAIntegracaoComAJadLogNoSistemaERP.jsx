import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoRealizarAIntegracaoComAJadLogNoSistemaERP1.png";
import Image2 from "../../assets/ComoRealizarAIntegracaoComAJadLogNoSistemaERP2.png";
import Image3 from "../../assets/ComoRealizarAIntegracaoComAJadLogNoSistemaERP3.png";
import Image4 from "../../assets/ComoRealizarAIntegracaoComAJadLogNoSistemaERP4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoRealizarAIntegracaoComAJadLogNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como realizar a integração com a JadLog no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          A <b>JadLog</b> é uma empresa de logística e de transportes de cargas.
          Pensando em tornar o processo de envio de mercadorias mais
          automatizado, a Sistema ERP realizou a parceria com essa plataforma de
          transporte.
        </p>
        <p>
          Primeiramente, será necessário acessar o menu lateral{" "}
          <b>Integrações</b>, submenu <b>Expedição</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Em seguida, clique em <b>Adicionar Expedição</b> e selecione a opção{" "}
          <b>JadLog</b>.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Nesta nova tela, terão duas abas que será necessário realizar o
          preenchimento.
        </p>

        <p>
          <b>Aba Dados da Expedição</b>
        </p>

        <BoxImage src={Image3} />
        <p>
          <strong>Nome da Integração:</strong> informe o nome que deseja para
          essa integração;
        </p>
        <p>
          <strong>Email:</strong> informe o e-mail de acesso à JadLog;
        </p>
        <p>
          <strong>Token:</strong> informe o token de integração da JadLog ao
          Sistema ERP. Para adquirir essa informação, é necessário entrar em
          contato diretamente com a JadLog através de telefone ou e-mail.
        </p>
        <p>
          <strong>Modalidade de Envio:</strong> selecione os serviços de
          transporte que serão utilizados para o envio de mercadorias.
        </p>
        <p>
          <strong>Conta Corrente:</strong> se desejar, informe a conta bancária
          que será padrão para os pagamentos dos serviços da JadLog;
        </p>
        <p>
          <strong>Número do Contrato Jadlog:</strong> se desejar, informe o
          número do contrato realizado junto a JadLog.
        </p>
        <p>
          Por fim, clique em <strong>Validar Configurações</strong> para
          certificar-se que os dados estão corretos.
        </p>
        <p>
          <strong>Aba Integração ERP</strong>
        </p>

        <BoxImage src={Image4} />
        <p>
          <strong>Empresa para integração:</strong> informe a empresa padrão que
          terá integração com a JadLog;
        </p>
        <p>
          <strong>Transportadora Padrão:</strong> informe a transportadora
          padrão que será responsável pelo frete da mercadoria. Lembre-se que
          essa transportadora já precisa estar configurada no sistema.
        </p>
        <p>
          <strong>Responsável Separação:</strong> informe o usuário já
          cadastrado no sistema que será responsável pela separação dos
          produtos;
        </p>
        <p>
          <strong>Responsável Despacho:</strong> informe o usuário já cadastrado
          no sistema que será responsável pelo despacho dos produtos;
        </p>
        <p>
          Após preencher os dados, clique em <strong>Salvar</strong> no topo da
          tela.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoRealizarAIntegracaoComAJadLogNoSistemaERP;
