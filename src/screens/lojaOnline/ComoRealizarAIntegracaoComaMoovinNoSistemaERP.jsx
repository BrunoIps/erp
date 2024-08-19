import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoRealizarAIntegracaoComaMoovinNoSistemaERP1.png";
import Image2 from "../../assets/ComoRealizarAIntegracaoComaMoovinNoSistemaERP2.png";
import Image3 from "../../assets/ComoRealizarAIntegracaoComaMoovinNoSistemaERP3.png";
import Image4 from "../../assets/ComoRealizarAIntegracaoComaMoovinNoSistemaERP4.png";
import Image5 from "../../assets/ComoRealizarAIntegracaoComaMoovinNoSistemaERP5.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoRealizarAIntegracaoComaMoovinNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como realizar a integração com a Moovin no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Para realizar sua integração com a Moovin você precisará do{" "}
          <b>URL da Loja e Token.</b>
        </p>
        <p>
          Com todas as informações geradas, você deverá acessar o menu lateral
          <b>Central de Integrações, submenu Minhas Lojas.</b>
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, em <b>Adicionar Loja,</b> selecione a opção <b>Moovin</b>
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, o sistema abrirá a tela de integração onde você deverá informar
          alguns dados:
        </p>

        <BoxImage src={Image3} />
        <p>
          <strong>Nome da Loja:</strong> informe o nome da loja;
        </p>
        <p>
          <strong>URL da Loja:</strong> informe a URL da Loja gerada
          anteriormente;
        </p>
        <p>
          <strong>Token:</strong> informe o Token gerado anteriormente;
        </p>

        <p>
          Após preencher estas informações, basta clicar em{" "}
          <strong>Validar Configurações</strong>.
        </p>

        <p>
          A seguir, preencha os dados na aba <strong>Integração</strong>.
        </p>

        <BoxImage src={Image4} />
        <p>
          <strong>Empresa para integração:</strong> informe o nome da empresa
          que está cadastrada no sistema, a qual irá realizar as vendas;
        </p>
        <p>
          <strong>Depósito Padrão:</strong> informe o depósito padrão de onde os
          produtos darão baixa do estoque ao realizar a venda;
        </p>
        <p>
          <strong>Categoria de Venda Padrão:</strong> informe a categoria que
          será padrão na sua venda. Essa informação é vinculada às operações
          fiscais dos seus produtos. Normalmente é utilizada a categoria "Venda
          de Materiais e Serviços";
        </p>
        <p>
          <strong>Plano de Conta Padrão:</strong> informe o plano de contas de
          receita que será informado no lançamento financeiro quando for
          realizada uma venda;
        </p>
        <p>
          <strong>Tabela de Preço Padrão:</strong> se desejar, informe uma
          tabela de preço que serão atribuídos os preços de venda em seus
          produtos;
        </p>
        <p>
          <strong>Importar Automaticamente as Vendas:</strong> selecione alguma
          das opções para realizar a importação de vendas de forma automática.
        </p>

        <p>
          Logo abaixo, haverá mais configurações, as quais você poderá marcar
          caso necessário. Para verificar a descrição de cada uma delas, clique
          no ícone "?" em azul ao lado.
        </p>
        <BoxImage src={Image5} />

        <p>
          Com todos os campos preenchidos, basta clicar em <b>Salvar</b>. Com
          todas as informações corretas, a sua plataforma já está integrada ao
          ERP. Agora, você poderá vincular os produtos entre o ERP e a Moovin.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoRealizarAIntegracaoComaMoovinNoSistemaERP;
