import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoCadastrarGrupoTributarioNoSistemaERP1.png";
import Image2 from "../../assets/ComoCadastrarGrupoTributarioNoSistemaERP2.png";
import Image3 from "../../assets/ComoCadastrarGrupoTributarioNoSistemaERP3.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoCadastrarGrupoTributarioNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como cadastrar Grupo Tributário no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          No Sistema ERP este cadastro é utilizado para vincular os seus
          produtos e suas configurações fiscais. Assim, quando você adicionar um
          determinado produto a uma venda ou nota fiscal, é através do grupo
          tributário que o sistema buscará as informações de PIS, COFINS e ICMS
          preenchidas nas Operações Fiscais.
        </p>

        <h3>Fique atento!</h3>

        <p>
          ❗ O nome que será definido no campo{" "}
          <strong>Nome do Grupo Tributário</strong>, será utilizado
          obrigatoriamente no campo <strong>Grupo Tributário</strong> no
          cadastro da operação fiscal e também será informado no{" "}
          <strong>cadastro do produto</strong>.
        </p>

        <p>
          ❗ O sistema automaticamente disponibilizará a opção{" "}
          <strong>Simples Nacional</strong>, você pode utilizá-lo em seus
          cadastros.
        </p>

        <p>
          ❗ Caso nenhum grupo tributário esteja cadastrado no seu produto, o
          sistema fará a busca pela opção <strong>Simples Nacional</strong>, que
          é o grupo tributário padrão do sistema.
        </p>

        <p>
          Sabendo de tudo isso, é o momento de fazer o cadastro do Grupo
          Tributário. Portanto, acesse o menu lateral <strong>Fiscal</strong>,
          submenu <strong>Grupos Tributários</strong>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>Na sequência, clique no ícone Novo.</p>
        <BoxImage src={Image2} />
        <p>
          Agora na tela <b>Cadastro de Grupo Tributário</b>, preencha os campos
          seguintes.
        </p>
        <BoxImage src={Image3} />
        <p>
          <strong>Nome do Grupo Tributário</strong>: informe um nome para que
          você identifique este grupo tributário. Neste campo você pode
          cadastrar um grupo tributário com um nome de sua autoria ou utilizar
          aquele que é o padrão do sistema: <strong>Simples Nacional</strong>;
        </p>
        <p>
          <strong>Informações Complementares</strong>: este campo é de texto
          livre, onde você pode adicionar uma mensagem padrão, caso desejar;
        </p>
        <p>
          <strong>Migrar De e Migrar Para</strong>: depois de salvar o grupo
          tributário em questão, utilizando estas opções será possível migrar
          este grupo tributário para outro cadastrado no sistema. Assim,
          automaticamente os produtos e operações fiscais em que este grupo está
          informado serão alterados automaticamente para o novo grupo.
        </p>
        <p>
          Não esqueça de clicar em <strong>Salvar</strong> para concluir o
          cadastro. Através do botão <strong>Voltar</strong> o sistema
          disponibilizará a listagem com todos os grupos tributários
          cadastrados, inclusive este criado recentemente.
        </p>
        <p>
          Agora que você já sabe como cadastrar um grupo tributário no sistema,
          saiba também que é possível adicionar quantos{" "}
          <strong>Grupos Tributários</strong> forem necessários para um melhor
          controle de suas informações fiscais.
        </p>
        <p>Não deixe de acompanhar os artigos:</p>
        <ul>
          <li>
            <a href="/cadastros-basicos/como-informar-o-grupo-tributario-nos-produtos-no-sistema-erp">
              Como informar o Grupo Tributário nos Produtos no Sistema ERP
            </a>
          </li>
          <li>
            <a href="/fiscal/como-cadastrar-operacoes-fiscais-para-emitir-nf-e-no-sistema-erp">
              Como cadastrar Operações Fiscais para NF-e no Sistema ERP
            </a>
          </li>
          {/* aqui tem que fazer pagina */}
          {/* <li>
            <a href="#">
              Como cadastrar Operações Fiscais para NFC-e no Sistema ERP
            </a>
          </li> */}
        </ul>
      </Typography>
    </Container>
  );
};
export default ComoCadastrarGrupoTributarioNoSistemaERP;
