import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoCriarCupomDeDescontoNaLojaOnline1.png";
import Image2 from "../../assets/ComoCriarCupomDeDescontoNaLojaOnline2.png";
import Image3 from "../../assets/ComoCriarCupomDeDescontoNaLojaOnline3.png";
import Image4 from "../../assets/ComoCriarCupomDeDescontoNaLojaOnline4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoCriarCupomDeDescontoNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como criar Cupom de Desconto na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          É comum que empresas que possuem lojas virtuais ofereçam cupons de
          desconto a seus clientes, na primeira compra ou de acordo com suas
          estratégias de venda. E na Loja Online não é diferente, você também
          pode criar cupons de desconto para seus clientes utilizarem nas
          compras.
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Para cadastrar os seus cupons, acesse o menu lateral{" "}
          <strong>Loja Online</strong>, submenu{" "}
          <strong>Cupons de Desconto Loja</strong> e clique em{" "}
          <strong>Novo</strong>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>Agora, você precisará preencher algumas informações.</p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Código:</strong> neste campo, você deverá informar o nome do
          seu cupom;
          <br />
          <strong>Tipo:</strong> defina a forma com que será aplicado o
          desconto, sendo possível escolher entre Valor Fixo, Percentual e Frete
          Grátis;
          <br />
          <strong>Valor:</strong> neste campo você deverá informar o valor em
          dinheiro ou percentual de desconto a ser aplicado;
          <br />
          <strong>Data de Expiração:</strong> neste campo você deverá selecionar
          uma data para o prazo de validade do cupom;
          <br />
          <strong>Único uso por Usuário:</strong> ao marcar esta opção, o
          sistema permitirá que o cupom de desconto seja utilizado apenas uma
          vez por usuário;
          <br />
          <strong>Limitar número de Vendas:</strong> ao marcar esta opção, o
          sistema habilitará um novo campo para que você estipule a quantidade
          de vendas que poderão ser realizadas com o cupom.
        </p>

        <p>
          Após preencher as informações, clique em <strong>Salvar</strong>.
          Assim o seu cupom já estará pronto para uso.
        </p>

        <p>
          Voltando para a listagem de Cupons de Descontos, você poderá também
          realizar a busca por um cupom específico utilizando os filtros da{" "}
          <strong>Busca Avançada</strong>. Você poderá filtrar por:
        </p>
        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <strong>Código:</strong> informe o nome do seu cupom;
          <br />
          <strong>Apenas com Limite de Uso:</strong> selecione se deseja
          visualizar apenas cupons com limite de uso ou sem limite de uso;
          <br />
          <strong>Tipo de Cupom:</strong> selecione o tipo de cupom que deseja
          visualizar;
          <br />
          <strong>Por Período:</strong> selecione o período de data desejado
          para realizar a busca. Caso selecione a opção Personalizado, utilize
          os campos de Data Inicial e Data Final para definir o período;
          <br />
          <strong>Data Inicial:</strong> defina uma data para iniciar a busca de
          acordo com aquele período;
          <br />
          <strong>Data Final:</strong> defina uma data para finalizar o período
          da busca;
          <br />
          <strong>Filtrar Por:</strong> selecione por qual data do cupom deseja
          buscar.
          <br />
          Agora clique em <strong>Buscar</strong> para que seja realizada a
          busca. Caso deseje excluir as configurações aplicadas, basta clicar em{" "}
          <strong>Limpar Filtros</strong>.
        </p>

        <p>
          Depois de filtrar, você verá a listagem de cupons realizados para sua
          Loja Online. São informados os seguintes dados:
        </p>

        <BoxImage src={Image4} />

        <p>
          <strong>Código:</strong> nome do cupom de desconto;
          <br />
          <strong>Tipo:</strong> a forma que o cupom possui o devido desconto;
          <br />
          <strong>Valor:</strong> valor em reais ou porcentagem referente ao
          desconto;
          <br />
          <strong>Possui Limite de Uso?</strong> informação de se existe limite
          de uso para aplicação do cupom;
          <br />
          <strong>Único uso por Usuário?</strong> informação de se há limitação
          do uso de cupom por usuário;
          <br />
          <strong>Data de Cadastro:</strong> data que o cupom de desconto foi
          criado;
          <br />
          <strong>Data de Limite Atingido:</strong> informação da data em que o
          cupom foi finalizado, de acordo com os limites estabelecidos na
          configuração;
          <br />
          <strong>Quantidade Utilizada:</strong> número de vezes que o cupom foi
          utilizado em compras;
          <br />
          <strong>Data de Expiração:</strong> data estabelecida para término do
          uso do cupom.
          <br />
          Além disso, ao <strong>Expandir</strong> o cupom de desconto,
          aparecerá a informação do <strong>Cliente</strong> que utilizou-o e o{" "}
          <strong>Código da Venda</strong> realizada.
        </p>
      </Typography>
    </Container>
  );
};

export default ComoCriarCupomDeDescontoNaLojaOnline;
