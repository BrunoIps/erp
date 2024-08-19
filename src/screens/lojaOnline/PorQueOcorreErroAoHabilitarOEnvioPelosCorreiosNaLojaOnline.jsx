import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";

const PorQueOcorreErroAoHabilitarOEnvioPelosCorreiosNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Por que ocorre erro ao habilitar o envio pelos Correios na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        Para integrar o PagHiper ao seu site de vendas você precisará do API Key
        e do Token do PagHiper. Consiga essas informações fazendo o passo a
        passo abaixo:
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          As formas de entrega de mercadorias nas lojas virtuais são de extrema
          importância. Ter várias opções de envio possibilita ao cliente
          escolher quais delas oferece a melhor vantagem. Na Loja Online não
          seria diferente. Você pode personalizar o envio das mercadorias do seu
          site através de veículo próprio, JadLog (transportadora) e ainda,
          através do SIGEP Web (Correios).
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Mas ao configurar sua Loja Online para enviar as mercadorias pelos
          Correios, você já se deparou com a mensagem: “
          <strong>
            Sigep Indisponível: Verifique se os dados da integração no cadastro
            da empresa Empresa Exemplo estão corretos!
          </strong>
          “? Se sim, vamos te explicar o motivo disso.
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          A validação do SIGEP Web ocorre ao informar os dados de integração com
          os correios no cadastro da empresa. Porém, os dados informados nestes
          campos devem estar preenchidos corretamente. Muitas pessoas acham que
          o Usuário e Senha que é solicitado seja de acesso a plataforma dos
          correios. Mas é aí que se enganam. Na verdade, o Usuário e Senha é de
          acesso via API ou via Web Service. Logo, ele é diferente dos dados que
          você utiliza para acessar o painel dos correios. Para adquirir os
          dados de API/Web Service, é necessário entrar em contato com os
          correios e realizar esta solicitação. Após disso, você poderá
          inseri-los no cadastro da sua empresa. Basta acessar o menu lateral
          <strong>Cadastros</strong>, submenu <strong>Empresas</strong> e{" "}
          <strong>editar</strong> sua empresa.
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Agora, na tela de edição do cadastro da empresa, na aba{" "}
          <strong>Dados</strong>, expanda a seção{" "}
          <strong>Dados Integração Correios – SIGEP WEB</strong>. Em seguida
          você verá os seguintes campos.
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Número Contrato:</strong> digite o número do seu contrato
          junto aos Correios. Este código possui apenas números;
          <br />
          <strong>Número Cartão Postagem:</strong> informe o número do cartão de
          postagem da sua empresa junto aos Correios. Normalmente, este número
          está presente na documentação dos Correios; <br />
          <strong>Prazo Mínimo para Entrega:</strong> informe em dias, o prazo
          mínimo de entrega de todos os seus pedidos para seus clientes. Caso a
          mercadoria não seja entregue no prazo informado será cobrada uma multa
          por atraso. Portanto, você poderá informar um prazo maior do que
          estipulado pelos Correios, valendo assim o maior prazo;
          <br />
          <strong>Usuário:</strong> informe o seu usuário via API/Web Service
          que foi solicitado aos Correios;
          <br />
          <strong>Senha:</strong> digite a sua senha via API/Web Service que foi
          solicitado aos Correios;
          <br />
          <strong>
            Utilizar endereço do depósito nas etiquetas e no AR:
          </strong>{" "}
          marque este checkbox para que o endereço do remetente nas etiquetas
          SIGEP e no AR, seja o endereço do depósito correspondente à venda. Se
          não marcado o endereço de remetente será o da sede da empresa. Esta
          opção é relevante em casos de devolução.
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Feito isso, clique em <strong>Salvar.</strong> Agora você poderá
          habilitar novamente as entregas através do SIGEP Web na sua Loja
          Online.
        </p>
      </Typography>
    </Container>
  );
};
export default PorQueOcorreErroAoHabilitarOEnvioPelosCorreiosNaLojaOnline;
