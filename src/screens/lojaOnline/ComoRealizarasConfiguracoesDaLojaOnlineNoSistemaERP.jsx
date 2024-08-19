import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoRealizarasConfiguracoesDaLojaOnlineNoSistemaERP1.png";
import Image2 from "../../assets/ComoRealizarasConfiguracoesDaLojaOnlineNoSistemaERP2.png";
import Image3 from "../../assets/ComoRealizarasConfiguracoesDaLojaOnlineNoSistemaERP3.png";
import Image4 from "../../assets/ComoRealizarasConfiguracoesDaLojaOnlineNoSistemaERP4.png";
import Image5 from "../../assets/ComoRealizarasConfiguracoesDaLojaOnlineNoSistemaERP5.png";
import Image6 from "../../assets/ComoRealizarasConfiguracoesDaLojaOnlineNoSistemaERP6.png";
import Image7 from "../../assets/ComoRealizarasConfiguracoesDaLojaOnlineNoSistemaERP7.png";
import Image8 from "../../assets/ComoRealizarasConfiguracoesDaLojaOnlineNoSistemaERP8.png";
import Image9 from "../../assets/ComoRealizarasConfiguracoesDaLojaOnlineNoSistemaERP9.png";
import Image10 from "../../assets/ComoRealizarasConfiguracoesDaLojaOnlineNoSistemaERP10.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoRealizarasConfiguracoesDaLojaOnlineNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como realizar as Configurações da Loja Online no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Depois de configurar a parte Visual da Loja Online, há outros passos
          que você precisa seguir antes de lançar sua loja virtual, para
          garantir que ela esteja pronta para receber os clientes e vender suas
          mercadorias. O sistema usará as configurações automaticamente para o
          processamento de pagamentos, para envio de mercadorias, horários de
          atendimento e aparência da sua página.
        </p>
        <p>
          Para começar, você deverá acessar o menu lateral <b>Loja Online</b>,
          submenu
          <b>Configurações</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, clique em <b>Configurações</b>. Dessa forma, você deverá
          inserir dados importantes para o seu site. Veja abaixo quais são eles.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <b>Domínio da sua loja</b>
        </p>

        <p>
          A URL do site é um endereço eletrônico ou o caminho pelo qual os
          usuários (seus possíveis clientes e parceiros) chegam até sua marca
          online. Nesse caso, você poderá utilizar o domínio oferecido pelo
          sistema (sualoja.lojadomeuerp.com.br), ou você poderá utilizar um
          domínio personalizado (www.sualoja.com.br).
        </p>

        <BoxImage src={Image3} />
        <p>
          <strong>Domínio Padrão:</strong> informe o nome do domínio que você
          deseja utilizar. Por exemplo, a loja se chama Sua Loja, então você
          poderá informar o domínio padrão como sualoja, e assim,
          automaticamente o domínio do seu site será:
          sualoja.lojadomeuerp.com.br;
        </p>
        <p>
          <strong>Domínio Personalizado:</strong> você poderá optar por ter um
          endereço personalizado para que a sua Loja Online seja encontrada na
          internet com maior facilidade e tenha mais credibilidade com o seu
          público. Utilizando o mesmo exemplo anterior, você poderá personalizar
          o domínio para a loja Sua Loja como: www.sualoja.com.br.
        </p>
        <p>
          <strong>Fique atento!</strong> Para a utilização do campo{" "}
          <strong>Domínio Personalizado (opcional)</strong> será necessário:
        </p>
        <ol>
          <li>
            Contratar uma empresa registradora de domínios e hospedeira de
            sites. Você pode utilizar a empresa que desejar, e recomendamos o{" "}
            <a href="/loja-online/como-configurar-o-dominio-do-registro.br-na-loja-online-do-sistema-erp">
              Registro.br
            </a>{" "}
            e{" "}
            <a href="/loja-online/como-configurar-o-dominio-da-godaddy-na-loja-online-do-sistema-erp">
              GoDaddy
            </a>
            .
          </li>
          <li>
            Realizar a configuração deste domínio no sistema. Siga o artigo:{" "}
            <a href="/loja-online/como-configurar-o-dominio-personalizado-na-loja-online-do-sistema-erp">
              Configurando seu domínio personalizado na Loja Online
            </a>{" "}
            e saiba mais!
          </li>
        </ol>
        <p>
          <strong>Conectando sua loja ao BackOffice</strong>
        </p>
        <p>
          Depois de definir o domínio que terá sua loja virtual, é o momento de
          configurar diversas informações que irão servir, posteriormente, para
          suas vendas realizadas pelo site e para os lançamentos. São elas:
        </p>

        <BoxImage src={Image4} />
        <p>
          <strong>Empresa Padrão:</strong> informe o nome da sua empresa que
          será responsável pelas movimentações da Loja Online;
        </p>
        <p>
          <strong>Depósito Padrão:</strong> informe o depósito que irá
          movimentar o estoque das vendas realizadas através da Loja Online;
        </p>
        <p>
          <strong>Categoria de venda padrão:</strong> informe a categoria de
          venda que será utilizada nas vendas realizadas através da Loja Online;
        </p>
        <p>
          <strong>Plano Conta para Vendas:</strong> informe neste campo um plano
          de conta do tipo <strong>Receita</strong>, onde todos os valores
          obtidos, decorrente da venda dos produtos e serviços, estarão
          vinculados;
        </p>
        <p>
          <strong>Vendedor:</strong> informe o nome do vendedor responsável
          pelas vendas da Loja Online;
        </p>
        <p>
          <strong>Casas Decimais para quantidades:</strong> informe o número de
          casas decimais (após a vírgula) que os seus produtos terão no site;
        </p>
        <p>
          <strong>E-mail automático por status da venda:</strong> ao marcar esta
          opção, o sistema encaminhará um email ao cliente, sempre que o status
          da venda mudar;
        </p>
        <p>
          <strong>Preencher vendedor padrão do cliente:</strong> ao marcar esta
          opção, o sistema levará em consideração o vendedor informado no
          cadastro do cliente, antes do vendedor informado nas configurações da
          Loja Online;
        </p>
        <p>
          <strong>Notificar vendedor padrão via e-mail:</strong> ao marcar esta
          opção, o vendedor padrão receberá um e-mail sempre que o cliente
          realizar uma venda pelo site.
        </p>

        <h4>Informações de contato</h4>
        <p>
          Logo abaixo, será necessário preencher as informações de contato que
          aparecerão no seu site. Os campos a serem preenchidos são:
        </p>
        <BoxImage src={Image5} />
        <p>
          <strong>WhatsApp da sua loja:</strong> informe o WhatsApp da sua
          empresa ou da sua equipe comercial. Desse modo, quando um cliente
          estiver navegando pela loja, poderá clicar no ícone de WhatsApp e será
          direcionado para uma conversa com a sua equipe;
        </p>
        <p>
          <strong>Destacar:</strong> com esta opção marcada, o número do
          WhatsApp ficará visível ao lado do ícone do WhatsApp na tela;
        </p>
        <p>
          <strong>Telefone para contato:</strong> informe um número de telefone,
          ao qual o cliente poderá ligar caso possua alguma dúvida;
        </p>
        <p>
          <strong>E-mail para vendas:</strong> informe o e-mail em que será
          recebida as notificações da loja;
        </p>
        <p>
          <strong>Aprovar cadastros de cliente:</strong> ao marcar esta opção, o
          sistema irá permitir que somente clientes com o cadastro aprovado
          possam realizar compras na loja. Dessa forma, você terá que aprovar o
          cadastro de cada usuário, acessando o menu lateral Loja Online,
          submenu Aprovação de Clientes.
        </p>
        <h4>Dados para os mecanismos de busca</h4>
        <p>
          O próximo passo é definir o mecanismo de busca da sua Loja Online. É
          através desta configuração que os usuários visualizarão o seu site na
          pesquisa realizada na internet. Portanto, será necessário informar os
          seguintes dados:
        </p>
        <BoxImage src={Image6} />
        <p>
          <strong>Título:</strong> informe o nome da sua loja que aparecerá na
          guia do navegador;
        </p>
        <p>
          <strong>Palavras chave:</strong> informe as palavras para a busca da
          sua loja na internet. Realize a separação das palavras por hífen (-);
        </p>
        <p>
          <strong>Breve descrição:</strong> essa descrição irá otimizar o motor
          de busca na web. Os motores de busca são projetados para ajudar as
          pessoas a encontrarem exatamente o que eles estão procurando;
        </p>
        <p>
          <strong>Sua loja nos mecanismos de pesquisa:</strong> neste campo, o
          sistema apresentará o domínio da sua loja, o título e a descrição
          preenchida nos campos anteriores. Ou seja, será desta maneira que os
          usuários visualizarão os dados da sua loja virtual.
        </p>

        <h4>Redes Sociais</h4>
        <p>
          Após definir o mecanismo de busca, você pode personalizar as redes
          sociais que serão destacadas no site da sua loja virtual.
        </p>

        <BoxImage src={Image7} />
        <p>
          Nesta etapa, você poderá selecionar o{" "}
          <strong>ícone da Rede Social</strong> desejada, informar o{" "}
          <strong>Link da sua página</strong>, e clicar no ícone de{" "}
          <strong>mais</strong> para adicioná-la. Assim, o sistema irá
          apresentar os ícones das redes sociais escolhidas, ao final da página
          da loja. Ao clicar em cima do link, o sistema redirecionará o cliente
          para a rede social escolhida.
        </p>

        <BoxImage src={Image8} />
        <h4>
          <strong>Dias e horários de atendimento</strong>
        </h4>
        <p>
          Por fim, você poderá definir os horários de atendimento da sua loja
          física.
        </p>

        <BoxImage src={Image9} />
        <p>
          Assim, o cliente poderá conferir pela loja virtual e caso queira,
          poderá realizar as compras na sua loja física nos horários definidos.
          Ao clicar em <strong>Aberto/Fechado</strong> (ao lado do campo de
          busca), o sistema apresentará os horários informados anteriormente.
        </p>

        <BoxImage src={Image10} />
        <p>
          Depois de realizar todas estas configurações, basta clicar em{" "}
          <strong>Salvar Alterações</strong>, no topo da tela. Dessa forma, a
          sua loja virtual ficará ainda mais completa.
        </p>

        <p>
          Depois de seguir todos os passos, você poderá clicar em{" "}
          <strong>Exibir Loja</strong> para começar a vender!
        </p>
      </Typography>
    </Container>
  );
};
export default ComoRealizarasConfiguracoesDaLojaOnlineNoSistemaERP;
