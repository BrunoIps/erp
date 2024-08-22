import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoInformarOGrupoTributarioNosProdutosnoSistemaERP1.png";
import Image2 from "../../assets/ComoInformarOGrupoTributarioNosProdutosnoSistemaERP2.png";
import Image3 from "../../assets/ComoInformarOGrupoTributarioNosProdutosnoSistemaERP3.png";
import Image4 from "../../assets/ComoInformarOGrupoTributarioNosProdutosnoSistemaERP4.png";
import Image5 from "../../assets/ComoInformarOGrupoTributarioNosProdutosnoSistemaERP5.png";
import Image6 from "../../assets/ComoInformarOGrupoTributarioNosProdutosnoSistemaERP6.png";
import Image7 from "../../assets/ComoInformarOGrupoTributarioNosProdutosnoSistemaERP7.png";
import Image8 from "../../assets/ComoInformarOGrupoTributarioNosProdutosnoSistemaERP8.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoInformarOGrupoTributarioNosProdutosnoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como informar o Grupo Tributário nos Produtos no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        O sistema irá vincular o produto com a operação fiscal de acordo com o
        grupo tributário. Neste caso, é necessário que além de informar o grupo
        tributário na operação fiscal, ele também seja informado no cadastro do
        produto. Dessa forma, o sistema puxará a tributação correta dos produtos
        de acordo com o grupo tributário informado no cadastro do produto e na
        operação fiscal.
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Antes de começar, veja o artigo:{" "}
          <a href="/fiscal/como-cadastrar-grupo-tributario-no-sistema-erp">
            Como cadastrar Grupo Tributário no Sistema ERP
          </a>{" "}
          e saiba mais sobre o assunto.
        </p>
        <p>
          <p>
            Com os grupos tributários necessários cadastrados, você precisará
            acessar o menu lateral Cadastros, submenu <b>Produtos</b>.
          </p>
          <BoxImage src={Image1} />
          <p>
            Agora, você poderá informar o grupo tributário no produto
            manualmente ou através de planilha.
          </p>
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <h4>1. Manualmente</h4>
        <p>
          Para informar o grupo tributário de forma manual, basta editar o
          cadastro do produto desejado e acessar a aba Fiscal.
        </p>
        <BoxImage src={Image2} />

        <p>
          Informe o grupo tributário desejado para este produto no campo
          <b>Grupo Tributário</b> e em seguida, clique em <b>Salvar</b>.
        </p>
        <h4>2. Através de Planilha</h4>
        <p>
          Para informar o grupo tributário através de planilha, você precisará
          estar na listagem de produtos. Feito isso, clique em{" "}
          <b>Mais Ações e após em Importar/Exportar.</b>
        </p>
        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Agora, você irá utilizar a coluna da direita{" "}
          <strong>Alterar Dados de Produtos</strong> e poderá baixar uma
          planilha de produtos filtrando por <strong>Fornecedor</strong>,{" "}
          <strong>Categoria</strong>, <strong>Marca</strong> ou{" "}
          <strong>Gênero do Produto</strong>. Caso não preencha nenhuma destas
          informações, o sistema irá baixar uma planilha contendo todos os
          produtos cadastrados no sistema. Para realizar o download, basta
          clicar em <strong>Baixar Planilha Contendo os Produtos</strong>.
        </p>
        <p>
          O sistema apresentará a seguinte tela apresentando a porcentagem de
          download da planilha
        </p>

        <p>
          <BoxImage src={Image4} />
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          A pasta que foi realizada o download estará no formato .ZIP, então
          você precisará extrair os arquivos desta pasta para poder editar a
          planilha e posteriormente importá-la ao sistema novamente.
        </p>
        <p>
          Com a planilha já aberta, você deverá buscar pela coluna
          <b> Grupo Tributário,</b> onde poderá escolher o grupo tributário
          desejado para os produtos.
        </p>
        <BoxImage src={Image5} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          {" "}
          Caso seus produtos possuam todos o mesmo grupo tributário, copie o
          nome do grupo tributário e selecione todos os produtos, utilizando o
          atalho <strong>Ctrl + Shift + seta para baixo</strong> e cole a
          informação copiada anteriormente. Assim, o sistema irá deixar todos os
          produtos com o mesmo grupo tributário. Após feito isso, salve a
          planilha em seu computador.
        </p>

        <p>
          <strong>Importante!</strong> Quando o grupo tributário for inserido
          por planilha, também será necessário informar a unidade comercial para
          os produtos.
        </p>

        <p>
          O sistema permitirá a importação da planilha somente se a unidade
          comercial estiver informada.
        </p>

        <p>
          Agora, com as alterações realizadas e a sua planilha salva, chegou a
          hora de importá-la ao sistema. Para isso, volte à tela em que foi
          realizado o download da planilha e role até chegar à 4ª opção –{" "}
          <strong>Enviar planilha editada</strong> e clique em{" "}
          <strong>Buscar planilha no meu computador</strong>.
        </p>

        <BoxImage src={Image6} />
        <p>
          Feito isso, o sistema abrirá o explorador de arquivos para que você
          busque a planilha em que realizou as alterações. Selecione a planilha
          e clique em Abrir.
        </p>
        <BoxImage src={Image7} />
        <p>
          Agora, o sistema realizará a leitura da sua planilha e apresentará a
          seguinte mensagem ao finalizar a leitura.
        </p>
        <BoxImage src={Image8} />
        <p>
          Feito isso, todos os produtos que foram alterados na planilha serão
          atualizados com as novas informações.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoInformarOGrupoTributarioNosProdutosnoSistemaERP;
