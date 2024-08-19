import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarODominiodoRegistroBRnaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarODominiodoRegistroBRnaLojaOnlineDoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarODominiodoRegistroBRnaLojaOnlineDoSistemaERP3.png";
import Image4 from "../../assets/ComoConfigurarODominiodoRegistroBRnaLojaOnlineDoSistemaERP4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarODominiodoRegistroBRnaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar o Domínio do Registro.br na Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Neste artigo, você aprenderá os passos, como realizar o apontamento do
          seu domínio criado no Registro.br para a sua Loja Online. Acompanhe o
          artigo!
        </p>
        <h1>Registro BR - Apontamento CNAME</h1>
        <p>
          • Acesse o site do <a href="https://registro.br/">registro.br</a>;
          <br />• Clique em "<strong>Acessar Conta</strong>" e em seguida insira
          o usuário, senha e clique em "<strong>Entrar</strong>";
          <br />• Na página aberta, clique no próprio nome do domínio que deseja
          editar:
        </p>

        <p>
          Agora, clique em "<strong>Configurar Zona DNS</strong>" ou{" "}
          <strong>Configurar Endereçamento</strong>
        </p>

        <p>
          <strong>Atenção:</strong> Caso você ainda não tenha realizado nenhuma
          edição de Zona de DNS em seu domínio, será preciso clicar no botão "
          <strong>Modo Avançadas</strong>" e aguardar até 15 minutos para que
          seja disponibilizada tal opção para editar a entrada CNAME.
        </p>

        <p>Em seguida</p>

        <p>
          • Clique em "<strong>Nova Entrada</strong>" e selecione a opção "
          <strong>CNAME</strong>";
          <br />• Por se tratar de uma entrada CNAME, no Campo{" "}
          <strong>NOME</strong> preencha com erp, app, loja... entre outros;
          <br />• <strong>Dados:</strong> neste campo informe o domínio padrão
          que está configurado dentro da sua Loja Online, em Menu Lateral Loja
          online > Configurações em seguida clique em Configurações, onde no
          campo Domínio Padrão será possível visualizar o nome configurado. Na
          qual seu domínio é composto pelo campo nome + lojadoerpm.br
        </p>

        <BoxImage src={Image1} />
        <p>
          Após preencher os campos com as respectivas informações, clique em
          Adicionar:
        </p>
        <br />
        <p>E salve as Alterações.</p>
        <br />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <h1>Sistema ERP</h1>
        <p>
          Acesse Menu Lateral <b>Loja Online </b>e em seguida, no Submenu{" "}
          <b>Configurações</b>
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Então clique no ícone <b>Configurações</b>
        </p>

        <BoxImage src={Image3} />
        <p>
          No campo <b>Domínio Personalizado</b> informe o subdomínio que foi
          criado no apontamento CNAME.
        </p>

        <BoxImage src={Image4} />
        <p>
          Em seguida <strong>Salve</strong> as alterações.
        </p>

        <p>
          Feito isso, será necessário aguardar o apontamento. Isso pode levar
          até 24 horas para que seu domínio seja totalmente propagado. Você pode
          acompanhar a propagação através do site{" "}
          <a href="https://dnschecker.org/">DNS Checker</a>.
        </p>

        <h4>Importante!</h4>

        <p>
          • É importante ressaltar que você não poderá ter o mesmo domínio em
          sites diferentes. Se você já utiliza o domínio{" "}
          <a href="http://www.dominio.com.br/">www.dominio.com.br</a> em
          determinado site, não poderá utilizá-lo na Loja Online. Para isso,
          você deverá criar um novo domínio, ou um subdomínio diferente, como
          por exemplo loja.dominio.com.br.
          <br />
          • Só é possível estar configurando um único domínio Personalizado na
          loja online, ou seja, se o apontamento CNAME for efetuado utilizando o
          subdomínio loja.dominio.com.br, seus clientes não conseguirão acessar
          através de outro subdomínio. Será somente possível acessar com o
          domínio informado dentro das configurações da Loja Online.
          <br />• O domínio personalizado só deverá ser preenchido nas
          configurações da Loja Online, após que o apontamento e propagação
          forem finalizadas. Devido que, a solicitação de SSL é feita no momento
          que é salvo as alterações, se for informado antes do apontamento, ele
          não será registrado. Neste link é possível estar acompanhando:{" "}
          <a href="https://dnschecker.org/">DNS Checker</a> selecionando sempre
          a opção de CNAME na busca.
        </p>

        <p>Acompanhe também o artigo:</p>

        <p>
          •{" "}
          <a href="/loja-online/como-configurar-o-dominio-personalizado-na-loja-online-do-sistema-erp">
            Como configurar o Domínio Personalizado na Loja Online
          </a>
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarODominiodoRegistroBRnaLojaOnlineDoSistemaERP;
