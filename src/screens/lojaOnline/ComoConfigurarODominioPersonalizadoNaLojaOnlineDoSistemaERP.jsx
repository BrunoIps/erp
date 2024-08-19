import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarODominioPersonalizadoNaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarODominioPersonalizadoNaLojaOnlineDoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarODominioPersonalizadoNaLojaOnlineDoSistemaERP3.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarODominioPersonalizadoNaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar o Domínio Personalizado na Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Na Loja Online você poderá utilizar o domínio padrão, ou então, você
          pode personalizar um domínio próprio para sua empresa. Mas você deve
          estar se perguntando: o que é um domínio? Resumidamente, ele é
          responsável por formar o endereço do seu site. Em outras palavras, é o
          link/URL da página da sua loja virtual.
        </p>

        <p>
          Ao utilizar o domínio personalizado, o endereço da sua Loja Online
          será um subdomínio da Loja Online.
        </p>

        <p>
          Por exemplo: imaginamos que o nome da sua loja seja Sua Loja. Se você
          utilizar o domínio padrão ao disponibilizá-lo pela Loja Online, a URL
          do seu site será: sualoja.lojadomeuerp.com.br. Porém, ao utilizar o
          domínio personalizado, o sistema apontará este endereço da Loja Online
          para o seu domínio www.sualoja.com.br. Assim, o seu cliente pesquisará
          a sua loja na URL <strong>www.sualoja.com.br</strong>.
        </p>

        <p>
          Antes de começar, você precisa ter seu domínio registrado em alguma
          plataforma própria de hospedagem. Caso não saiba o que isto significa,
          solicite a um TI que lhe auxilie nesta parte. Assim que você possuir
          um domínio contratado em alguma plataforma, será necessário apontar
          este domínio para o site da sua Loja Online. Para isso, acompanhe os
          artigos:
        </p>

        <ul>
          <li>
            <a href="/loja-online/como-configurar-o-dominio-do-registro.br-na-loja-online-do-sistema-erp">
              Como configurar o Domínio do Registro.br na Loja Online
            </a>
          </li>
          <li>
            <a href="/loja-online/como-configurar-o-dominio-do-godaddy-na-loja-online-do-sistema-erp">
              Como configurar o Domínio da GoDaddy na Loja Online
            </a>
          </li>
        </ul>

        <h4>Antes de começar, fique atento!</h4>

        <ul>
          <li>
            Um endereço da Loja Online com Domínio Personalizado terá a uma
            aparência semelhante a essa: www.dominio.com.br ou
            loja.dominio.com.br;
          </li>
          <li>
            O seu domínio personalizado poderá ser utilizado somente em um site.
            Ou seja, se você configurar o domínio www.dominio.com.br na Loja
            Online e já estiver utilizando esse domínio em outro site, esse
            outro site será desativado;
          </li>
          <li>
            Em caso da URL do seu site ser: loja.dominio.com.br, não será
            possível que seu site seja acessado como www.loja.dominio.com.br.
            Perceba que www.loja tem o mesmo sentido, nesse caso,{" "}
            <strong>www.loja</strong> está sendo informado de forma duplicada,
            isso fará com que não seja possível acessar seu site.
          </li>
        </ul>

        <h4>Configurando o domínio no Loja Online</h4>

        <p>
          Depois de propagado o seu domínio, é o momento de configurá-lo no Loja
          Online. Para isso, acesse menu lateral <strong>Loja Online</strong>,
          submenu <strong>Configurações</strong>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          A seguir, acesse a aba <b>Configurações Básicas.</b> Você deverá
          preencher o campo <b>Domínio Padrão</b> como nome da sua loja e em
          seguida no campo
          <b> Domínio Personalizado</b> informar o nome do domínio que
          configurou na plataforma de hospedagem.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Por fim, clique em <b>Salvar</b> no topo da tela, e em seguida, ao
          clicar em Ir para loja, será exibido seu site, onde já constará na URL
          o novo domínio configurado.
        </p>

        <BoxImage src={Image3} />
        <h4>Configurando o certificado HTTPS (site seguro)</h4>
        <p>
          Após a configuração do CNAME, você precisará aguardar pelo menos 24h
          para que o sistema
          <strong>instale automaticamente</strong> o certificado no seu domínio
          configurado e configure o acesso HTTPS. Caso após 24h sua loja ainda
          não esteja acessível pelo domínio com segurança HTTPS, pode ser que
          você tenha efetuado algum passo da configuração de forma incorreta ou
          seu servidor DNS não tenha propagado ainda. Portanto, entre em contato
          com nossa central de atendimento e solicite auxílio.
        </p>

        <h4>Importante!!</h4>
        <p>
          <b>
            É necessário fazer primeiro o apontamento e depois estar
            configurando e salvando seu domínio personalizado na Loja Online.
          </b>
        </p>
        <p>
          <b>
            O Servidor de renovação e criação de SSL foi configurado para gerar
            e renovar os certificados a cada 6 horas. ou seja, após a
            configuração, aguarde 6 horas para verificar se a página configurada
            está acessando.
          </b>
        </p>
        <p>
          <b>
            Após isso entre em contato com o suporte, caso depois de
            pontualmente 6 horas não esteja acessando.
          </b>
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarODominioPersonalizadoNaLojaOnlineDoSistemaERP;
