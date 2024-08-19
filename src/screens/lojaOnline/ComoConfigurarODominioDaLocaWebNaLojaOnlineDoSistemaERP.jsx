import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarODominioDaLocaWebNaLojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarODominioDaLocaWebNaLojaOnlineDoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarODominioDaLocaWebNaLojaOnlineDoSistemaERP3.png";
import Image4 from "../../assets/ComoConfigurarODominioDaLocaWebNaLojaOnlineDoSistemaERP4.png";
import Image5 from "../../assets/ComoConfigurarODominioDaLocaWebNaLojaOnlineDoSistemaERP5.png";
import Image6 from "../../assets/ComoConfigurarODominioDaLocaWebNaLojaOnlineDoSistemaERP6.png";
import Image7 from "../../assets/ComoConfigurarODominioDaLocaWebNaLojaOnlineDoSistemaERP7.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarODominioDaLocaWebNaLojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar o Domínio da LocaWeb na Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Neste artigo, você aprenderá os passos, como realizar o apontamento do
          seu domínio criado na LocaWeb para a sua Loja Online. Acompanhe o
          artigo!
        </p>
        <p>
          Acesse o painel de hospedagem, então clique nos três pontinhos,
          conforme a imagem, e em seguida na opção <b>Zona de DNS;</b>
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Então clique em <b>Adicionar Entrada</b>
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Selecione o Tipo de entrada, e em seguida os dados da entrada de
          acordo com o tipo e clique em <b>Salvar Configurações</b>
        </p>

        <BoxImage src={Image3} />
        <p>
          <b>Tipo de Entrada:</b> selecione a opção CNAME;
        </p>

        <p>
          <b>Entrada:</b> informe o tipo de entrada que deseja vincular ao seu
          domínio, exemplo: app, erp, site, loja... entre outros;
        </p>

        <p>
          <b>Conteúdo:</b> neste campo informe o domínio padrão que está
          configurado dentro da sua Loja Online, em Menu Lateral Loja online
          &gt; Configurações em seguida clique em Configurações, onde no campo
          Domínio Padrão será possível visualizar o nome configurado. Na qual
          seu domínio é composto pelo campo nome + lojadomeuerp.com.br
        </p>

        <BoxImage src={Image4} />
        <p>
          Efetuada a Configuração dentro do painel da LocaWeb, clique em{" "}
          <b>Salvar Configurações.</b>
        </p>

        <p>
          Assim que adicionada, a entrada será apresentada na lista de entradas
          do DNS em questão. Após isso, basta aguardar a devida propagação das
          alterações na internet, que pode levar de 4 a 24 horas.
        </p>

        <h2>Sistema ERP</h2>

        <p>
          Acesse Menu Lateral <b>Loja Online</b> e em seguida, no Submenu{" "}
          <b>Configurações</b>
        </p>
        <BoxImage src={Image5} />
        <p>
          Então clique no ícone <b>Configurações</b>
        </p>
        <BoxImage src={Image6} />
        <p>
          No campo <b>Domínio Personalizado </b>informe o subdomínio que foi
          criado no apontamento CNAME.{" "}
        </p>
        <BoxImage src={Image7} />
        <p>
          Em seguida <b>Salve</b> as alterações.
        </p>

        <p>
          Feito isso, será necessário aguardar o apontamento. Isso pode levar
          até 24 horas para que seu domínio seja totalmente propagado. Você pode
          acompanhar a propagação através do site{" "}
          <a href="https://dnschecker.org/" target="_blank" rel="noreferrer">
            DNS Checker
          </a>
          .
        </p>

        <h4>Importante!</h4>

        <ul>
          <li>
            É importante ressaltar que você não poderá ter o mesmo domínio em
            sites diferentes. Se você já utiliza o domínio{" "}
            <a
              href="http://www.dominio.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              www.dominio.com.br
            </a>{" "}
            em determinado site, não poderá utilizá-lo na Loja Online. Para
            isso, você deverá criar um novo domínio, ou um subdomínio diferente,
            como por exemplo loja.dominio.com.br.
          </li>

          <li>
            Só é possível estar configurando um único domínio Personalizado na
            loja online, ou seja, se o apontamento CNAME for efetuado utilizando
            o subdomínio loja.dominio.com.br, seus clientes não conseguirão
            acessar através de outro subdomínio. Será somente possível acessar
            com o domínio informado dentro das configurações da Loja Online.
          </li>

          <li>
            O domínio personalizado só deverá ser preenchido nas configurações
            da Loja Online, após que o apontamento e propagação forem
            finalizadas. Devido que, a solicitação de SSL é feita no momento que
            é salvo as alterações, se for informado antes do apontamento, ele
            não será registrado. Neste link é possível estar acompanhando:{" "}
            <a href="https://dnschecker.org/" target="_blank" rel="noreferrer">
              DNS Checker
            </a>{" "}
            selecionando sempre a opção de CNAME na busca.
          </li>
        </ul>

        <p>
          Acompanhe também o artigo:{" "}
          <a href="/loja-online/como-configurar-o-dominio-do-registrobr-na-loja-online-do-sistema-erp">
            Como configurar o Domínio Personalizado na Loja Online
          </a>
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarODominioDaLocaWebNaLojaOnlineDoSistemaERP;
