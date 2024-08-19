import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarOVisualDaLojaOnlineNoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarOVisualDaLojaOnlineNoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarOVisualDaLojaOnlineNoSistemaERP3.png";
import Image4 from "../../assets/ComoConfigurarOVisualDaLojaOnlineNoSistemaERP4.png";
import Image5 from "../../assets/ComoConfigurarOVisualDaLojaOnlineNoSistemaERP5.png";
import Image6 from "../../assets/ComoConfigurarOVisualDaLojaOnlineNoSistemaERP6.png";
import Image7 from "../../assets/ComoConfigurarOVisualDaLojaOnlineNoSistemaERP7.png";
import Image8 from "../../assets/ComoConfigurarOVisualDaLojaOnlineNoSistemaERP8.png";
import Image9 from "../../assets/ComoConfigurarOVisualDaLojaOnlineNoSistemaERP9.png";
import Image10 from "../../assets/ComoConfigurarOVisualDaLojaOnlineNoSistemaERP10.png";
import Image11 from "../../assets/ComoConfigurarOVisualDaLojaOnlineNoSistemaERP11.png";
import Image12 from "../../assets/ComoConfigurarOVisualDaLojaOnlineNoSistemaERP12.png";
import Image13 from "../../assets/ComoConfigurarOVisualDaLojaOnlineNoSistemaERP13.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarOVisualDaLojaOnlineNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar o Visual da Loja Online no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          A parte visual da sua loja se refere à organização de seus elementos
          gráficos, aqueles que dão forma à sua parte visual. Com a
          personalização da sua página, você proporcionará uma melhor
          experiência para os seus clientes.
        </p>
        <p>
          Neste artigo, você aprenderá como configurar o primeiro passo de
          criação da Loja Online, que seriam: o layout, as cores, exibição de
          banners, formulários para contato e etiquetas da sua loja.
        </p>
        <p>
          Para começar as configurações, você deverá acessar o menu lateral{" "}
          <b>Loja Online</b>, submenu <b>Configurações</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Em seguida, você será direcionado para a tela de configuração da sua
          loja virtual, onde já estará na seção Visual. É sobre todo este módulo
          <b> Visual</b> que iremos informar neste artigo.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <b>Layout da sua loja</b>
        </p>
        <p>
          Então, você começará pela opção <b>Layout da sua loja</b>. Escolha o
          tema que você deseja para a sua loja.
        </p>
        <BoxImage src={Image3} />
        <p>
          Neste momento, você contará com opções de layout personalizáveis na
          vertical, e opções de layout padrões pré configuradas na horizontal.
          Ao selecionar a opção desejada, o sistema mostrará uma prévia de como
          ficaria este modelo em seu site. Para saber como personalizar o modelo
          de layout, siga este artigo:{" "}
          <a href="/loja-online/como-personalizar-o-layout-da-loja-online-no-sistema-erp">
            Como Personalizar o Layout da Loja Online.
          </a>
        </p>
        <p>
          Depois disso, você deverá carregar o <b>logotipo</b> da sua empresa e
          definir as <b>cores</b> que deseja para sua loja virtual. Dependendo
          do modelo de layout escolhido anteriormente, as opções de cores podem
          ser alteradas.
        </p>
        <BoxImage src={Image4} />
        <p>
          <strong>Cor Principal:</strong> escolha uma cor que será aplicada ao
          conteúdo principal da sua loja;
        </p>
        <p>
          <strong>Cor da Fonte:</strong> escolha uma cor que será aplicada para
          as fontes e ícones da sua loja;
        </p>
        <p>
          <strong>Não Preencher Imagem dos Produtos:</strong> esta opção serve
          para que o sistema expanda a imagem do produto, caso ela não ocupe o
          tamanho proporcional de exibição no site. Por exemplo, você anexou a
          imagem do produto no formato retangular, então ao deixar esta opção
          desmarcada, o sistema irá alterar o formato da imagem para quadrada,
          para se encaixar no padrão. Porém, caso marque esta opção, o sistema
          permanecerá com o formato da imagem retangular;
        </p>
        <p>
          <strong>Ocultar Produtos mais Vendidos:</strong> ao marcar esta opção,
          o sistema não apresentará a listagem dos produtos mais vendidos da sua
          loja;
        </p>
        <p>
          Ainda nesta tela, você terá a opção de configurar mais dados gerais do
          seu site. São elas:
        </p>

        <BoxImage src={Image5} />
        <p>
          <strong>Ocultar Informações da Empresa:</strong> ao marcar esta opção,
          não irá constar os dados da empresa na sua loja;
        </p>
        <p>
          <strong>Mostrar Produtos em Destaque:</strong> ao marcar esta opção, o
          sistema fará a listagem dos produtos marcados com destaque;
        </p>
        <p>
          <strong>Mostrar Produtos Relacionados:</strong> ao marcar esta opção,
          o sistema irá sugerir ao cliente outros produtos que foram vistos ao
          olhar o produto que está sendo visualizado;
        </p>
        <p>
          <strong>Mostrar Outros Produtos da Mesma Categoria:</strong> ao marcar
          esta opção, o sistema irá sugerir outros produtos da mesma categoria
          do produto que está sendo visualizado;
        </p>
        <p>
          <strong>Mostrar Código do Produto:</strong> ao marcar esta opção, o
          sistema mostrará o código do produto.
        </p>

        <p>
          Após isto, clique em <strong>Salvar</strong>.
        </p>

        <h4>Banners</h4>

        <p>
          Agora, ao acessar a aba <strong>Banners</strong>, será possível você
          definir quais serão os banners de apresentação que serão exibidos no
          seu site. Lembrando que a apresentação dos banners será de acordo com
          o layout selecionado anteriormente. Além disso, poderá definir uma
          imagem de fundo para sua loja. Veja abaixo detalhes sobre cada uma
          delas.
        </p>

        <BoxImage src={Image6} />
        <p>
          <b>Banner Grande:</b> este banner será o principal da sua loja. Você
          poderá colocar diversos banners.
        </p>
        <BoxImage src={Image7} />
        <p>
          <b>Banners Pequenos:</b> você poderá adicionar até três imagens para
          os banners pequenos. Eles ficarão abaixo do banner principal ou serão
          exibidos apenas os banners pequenos. Isso varia de acordo com o layout
          selecionado anteriormente.
        </p>
        <BoxImage src={Image8} />
        <p>
          <b>Fundo do Login:</b> esta imagem aparecerá de fundo na tela de login
          do cliente.
        </p>
        <BoxImage src={Image9} />
        <p>
          Após escolher os seus banners, clique em <b>Salvar</b>.
        </p>
        <p>
          <b>Formulário Contato</b>
        </p>
        <p>
          Depois de configurar os banners, você poderá criar um formulário para
          que seus clientes possam tirar dúvidas sobre a loja. Para isso, acesse
          a aba <b>Formulários Contato</b>. Este formulário será solicitado ao
          usuário no momento que ele acessar a parte de contato no seu site.
        </p>
        <p>Nesta tela, você contará com as seguintes configurações.</p>
        <BoxImage src={Image10} />
        <p>
          <strong>Quer o formulário no seu site?</strong>: marque o checkbox
          para Formulário Habilitado, caso deseje solicitar alguns dados aos
          usuários do seu site;
        </p>
        <p>
          <strong>Enviar mensagens recebidas para qual e-mail?</strong>: informe
          o e-mail que você deseja receber as respostas do formulário respondido
          pelo seu usuário;
        </p>
        <p>
          <strong>Habilitar Campos</strong>: nesta opção, selecione quais
          informações você deseja solicitar aos usuários. Entre elas estão:
          título, descrição, nome, e-mail, comentário, telefone e cidade;
        </p>
        <p>
          <strong>Crie campos personalizados</strong>: além de utilizar os
          campos pré-definidos, você também pode criar novos campos para
          solicitar dados personalizados aos usuários. Em{" "}
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
          <strong>Insira novos campos no cadastro de usuário</strong>: esta
          opção estará disponível caso deseje solicitar dados específicos ao
          novo usuário. Para isso, é necessário que você crie esses campos nos
          atributos do seu sistema, configurando-os como pessoas. Para saber
          como criá-los, siga este artigo: {/* aqui precisa fazer pagina */}{" "}
          <a href="#">
            Como configurar os Campos Personalizados no Sistema ERP
          </a>
          . Feito isso, habilite quais informações você deseja solicitar.
          Lembrando que esses dados serão solicitados aos novos usuários, quando
          eles estiverem realizando seu primeiro cadastro no seu site.
        </p>
        <p>
          Após configurar esta parte, basta clicar em <strong>Salvar</strong>.
          Assim, quando o cliente clicar em <strong>Contato</strong> na sua
          loja, o sistema abrirá automaticamente a tela do formulário.
        </p>

        <BoxImage src={Image11} />
        <p>
          <b>Etiqueta</b>
        </p>
        <p>
          Além de configurar os formulários, também é possível incluir etiquetas
          que destaquem os seus produtos, serviços, sites, descontos, etc. Para
          isso, acesse a aba <b>Etiquetas</b>.
        </p>
        <BoxImage src={Image12} />
        <p>
          <strong>Adicione um ícone ou imagem:</strong> você poderá buscar por
          uma imagem na internet através da lupa ou buscar uma imagem em seu
          computador;
        </p>
        <p>
          <strong>Frase Destaque:</strong> escreva a frase da sua etiqueta;
        </p>
        <p>
          <strong>Link:</strong> cole o link da página que a sua etiqueta
          direcionará o cliente.
        </p>
        <p>
          Feito isso, clique em <strong>Salvar</strong>. Assim, quando o seu
          cliente clicar na etiqueta ele será direcionado para a página do link
          que você informou.
        </p>

        <p>
          <strong>Scripts Customizáveis</strong>
        </p>

        <p>
          O último passo para finalizar a configuração visual da Loja Online são
          os Scripts Customizáveis. Neste campo, você poderá informar o script
          de aplicativos externos para que seja realizada uma conexão e você
          possa implementar a sua loja. Com a configuração dos scripts, você
          poderá verificar analiticamente dados sobre sua loja virtual. Um dos
          exemplos de configuração de script é com o Google Analytics.
        </p>

        <BoxImage src={Image13} />
        <p>
          Para adicionar mais de um script, basta dar um enter, assim começará
          uma nova linha onde você poderá informar o script do novo aplicativo.
        </p>

        <p>
          Feito isso, basta clicar em <strong>Salvar</strong>. Pronto, sua loja
          já está com todo o layout definido e pronta para fazer suas vendas
          bombar.
        </p>

        <p>
          Depois de seguir todos os passos, você poderá clicar em{" "}
          <strong>Exibir Loja</strong> para começar a vender!
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarOVisualDaLojaOnlineNoSistemaERP;
