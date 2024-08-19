import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoUtilizarOFormularioDeContatoNaLojaOnline1.png";
import Image2 from "../../assets/ComoUtilizarOFormularioDeContatoNaLojaOnline2.png";
import Image3 from "../../assets/ComoUtilizarOFormularioDeContatoNaLojaOnline3.png";
import Image4 from "../../assets/ComoUtilizarOFormularioDeContatoNaLojaOnline4.png";
import Image5 from "../../assets/ComoUtilizarOFormularioDeContatoNaLojaOnline5.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoUtilizarOFormularioDeContatoNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como utilizar o Formulário de Contato na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Você poderá criar um formulário para que seus clientes possam tirar
          dúvidas sobre a loja ou até mesmo para possíveis revendedores que
          desejam trabalhar com a sua empresa.
        </p>
        <p>
          Para isso, acesse o menu lateral <b>Loja Online</b>, submenu{" "}
          <b>Configurações</b> e clique na aba <b>Configurações</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, na seção <b>Visual</b>, acesse a aba{" "}
          <b>Formulários Contato.</b> Este formulário será solicitado ao usuário
          no momento que ele acessar a parte de contato no seu site.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>Nesta tela, você contará com as seguintes configurações.</p>

        <BoxImage src={Image3} />

        <p>
          <strong>Configure o formulário de contato para a loja</strong>
        </p>

        <p>
          <strong>Quer o formulário no seu site?</strong>: marque o checkbox
          para Formulário Habilitado, caso deseje permitir que seus usuários
          entrem em contato com você através do formulário;
          <br />
          <strong>Enviar mensagens recebidas para qual e-mail?</strong>: informe
          o e-mail que você deseja receber as respostas do formulário respondido
          pelo seu usuário;
        </p>

        <p>
          <strong>Habilitar Campos</strong>
        </p>

        <p>
          Nesta opção, selecione quais informações você deseja solicitar aos
          usuários. Entre elas estão: título, descrição, nome, e-mail,
          comentário, telefone e cidade;
        </p>

        <p>
          <strong>Crie campos personalizados</strong>
        </p>

        <p>
          Além de utilizar os campos pré-definidos, você também pode criar novos
          campos para solicitar dados personalizados aos usuários. Em{" "}
          <strong>Nome do campo</strong>, informe a questão que deseja
          solicitar, e ao lado, em <strong>Tipo do campo</strong>, selecione a
          opção que será fornecida para o usuário preencher, podendo ser texto,
          múltipla escolha, marcação e área de texto. Em seguida, clique em{" "}
          <strong>Adicionar novo campo</strong>. Dessa forma, este campo será
          registrado na configuração, onde será possível{" "}
          <strong>Excluir</strong> e <strong>Reordenar</strong>, caso tenha mais
          de um campo;
        </p>

        <p>
          <strong>Insira novos campos no cadastro de usuário</strong>
        </p>

        <p>
          Esta opção estará disponível caso deseje solicitar dados específicos
          ao novo usuário. Para isso, é necessário que você crie esses campos
          nos atributos do seu sistema, configurando-os como pessoas.
          {/*
          aqui tem que fazer pagina
          Para saber
          como criá-los, siga este artigo:{" "}
          <a href="#">
            Como configurar os Campos Personalizados no Sistema ERP
          </a> */}
          . Feito isso, habilite quais informações você deseja solicitar.
          Lembrando que esses dados serão solicitados aos novos usuários, quando
          eles estiverem realizando seu primeiro cadastro no seu site.
        </p>

        <p>
          Após configurar esta parte, basta clicar em <strong>Salvar</strong>.
          Assim, quando o cliente clicar em <strong>Contato</strong> na sua
          loja, o sistema abrirá automaticamente a tela do formulário.
        </p>

        <BoxImage src={Image4} />

        <p>Agora, ele poderá preencher as informações e enviar para você.</p>

        <BoxImage src={Image5} />
      </Typography>
    </Container>
  );
};
export default ComoUtilizarOFormularioDeContatoNaLojaOnline;
