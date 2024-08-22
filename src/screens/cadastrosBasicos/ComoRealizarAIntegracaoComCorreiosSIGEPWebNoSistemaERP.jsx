import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP1.png";
import Image2 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP2.png";
import Image3 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP3.png";
import Image4 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP4.png";
import Image5 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP5.png";
import Image6 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP6.png";
import Image7 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP7.png";
import Image8 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP8.png";
import Image9 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP9.png";
import Image10 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP10.png";
import Image11 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP11.png";
import Image12 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP12.png";
import Image13 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP13.png";
import Image14 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP14.png";
import Image15 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP15.png";
import Image16 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP16.png";
import Image17 from "../../assets/ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP17.png";

import BoxImage from "../../components/Image/BoxImage";

const ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como cadastrar Conta Bancária para emitir boleto no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          O <b>SIGEP WEB</b> é um sistema desenvolvido pelos Correios com a
          finalidade de facilitar e agilizar a preparação e gerenciamento das
          postagens de encomendas pelos clientes. Por meio desse sistema, dentre
          outras funcionalidades, é possível gerar e imprimir listas de
          postagens, etiquetas e códigos de rastreamento.
        </p>
        <p>
          Para utilizar o SIGEP WEB integrado ao sistema, é importante que o
          contrato da sua empresa com os Correios já esteja firmado, se não
          estiver, entre em contato com os correios. Depois disso, você deve
          informar os dados do contrato dentro do sistema.
        </p>
        <p>
          <b>
            OBS: Para utilização dos Correios é OBRIGATÓRIO possuir configurado
            os tamanhos de caixa dentro do sistema. Caso possua dúvidas,
            acompanhe o artigo:{" "}
            <a href="/cadastros-basicos/como-configurar-os-tamanhos-de-produtos-no-sistema-erp">
              Como configurar os Tamanhos de Produtos no Sistema ERP
            </a>
          </b>
        </p>
        <p>
          Para fazer a integração com o SIGEP WEB Correios acesse o menu lateral
          Cadastros, submenu <b>Empresas</b>.{" "}
        </p>
        <BoxImage src={Image1} />
        <p>
          Selecione a sua empresa já cadastrada e clique em editar no ícone de
          lápis. Na tela seguinte, na seção{" "}
          <b>Dados Integração Correios – SIGEP WEB </b>informe os seguintes
          dados:
        </p>
        <BoxImage src={Image2} />
        <p>
          <strong>Número Contrato:</strong> digite o número do seu contrato
          junto aos Correios. Este código possui apenas números;
        </p>
        <p>
          <strong>Número Cartão Postagem:</strong> informe o número do cartão de
          postagem da sua empresa junto aos Correios. Normalmente, este número
          está presente na documentação dos Correios;
        </p>
        <p>
          <strong>Usuário e Senha:</strong> preencha o usuário e senha gerado
          dentro dos correios, conforme descrito neste artigo;
        </p>
        <p>
          <strong>Prazo Mínimo para Entrega:</strong> informe em dias, o prazo
          mínimo de entrega de todos os seus pedidos para seus clientes. Caso a
          mercadoria não seja entregue no prazo informado será cobrada uma multa
          por atraso. Portanto, você poderá informar um prazo maior do que
          estipulado pelos Correios, valendo assim o maior prazo.
        </p>
        <p>
          Feito isso, clique em <strong>Salvar</strong>. Agora você já pode
          calcular os fretes e prazos de entrega de cada pedido. Depois, poderá
          imprimir as etiquetas e rastrear a mercadoria.
        </p>
        <h2>Informações dos Correios</h2>
        <p>
          Para que fique mais fácil a localização dos dados a serem preenchidos
          no campo de Número de contrato e Número cartão Postagem.
        </p>
        <p>
          Acesse o seu login junto aos correios
          <a href="https://sfe.correios.com.br/consultarContrato/consultarContrato.jsf#no-back-button">
            https://sfe.correios.com.br/consultarContrato/consultarContrato.jsf#no-back-button
          </a>
        </p>
        <p>Em seguida clique em Contrato</p>
        <BoxImage src={Image3} alt="Empresas" />
        <p>
          Então preencha o CNPJ vinculado e destaque no campo{" "}
          <b>Lista de Contratos</b> como <b>Vigentes</b>, então clique em
          pesquisar
        </p>
        <BoxImage src={Image4} alt="Empresas" />
        <p>
          Então, será apresentado o resultado da pesquisa, onde será visualizado
          o número do Contrato a ser preenchido dentro no Sistema ERP.
        </p>
        <BoxImage src={Image5} alt="Empresas" />
        <p>
          Após possuir o número do contrato, clique no ícone disponibilizado na
          coluna Ações
        </p>
        <BoxImage src={Image6} alt="Empresas" />
        <p>
          Desta forma, será aberto uma nova tela onde terá a opção{" "}
          <b>Cartões de Postagem do Contrato</b>
        </p>
        <BoxImage src={Image7} alt="Empresas" />
        <p>
          Então é possível estar visualizando o número do Cartão Postagem a ser
          preenchido dentro do Sistema ERP.
        </p>
        <h3>Gerando Usuário e senha junto aos Correios</h3>
        <p>
          Os Correios Web Service (CWS) tem o objetivo de fornecer uma
          plataforma de serviços, baseados na tecnologia de Web Services, que
          disponibiliza suas principais informações aos clientes do Comércio
          Eletrônico Brasileiro. A seguir, veja como realizar as configurações
          do Correios CWS
        </p>
        <p>
          Acesse o portal dos Correios e clique em <b>‘Entrar’.</b> por este{" "}
          <a href="https://cws.correios.com.br/">
            link: https://cws.correios.com.br/
          </a>
        </p>
        <BoxImage src={Image8} alt="Empresas" />
        <p>
          Nesse menu, preencha o <b>‘Usuário’ e ‘Senha’ </b>de seu painel.
        </p>
        <BoxImage src={Image9} alt="Empresas" />
        <p>
          Em seguida, clique em<b> ‘Gestão de acesso a API’s</b> à esquerda da
          tela.
        </p>
        <BoxImage src={Image10} alt="Empresas" />
        <p>Será necessário regerar o código de acesso, para isso siga:</p>
        Preencha o campo de <b>“Senha do Portal Meu Correios”</b> e em seguida
        clique no botão<b> ‘Regerar código‘</b>
        <BoxImage src={Image11} alt="Empresas" />
        <p>
          O novo código irá aparecer numa nova janela, copie os códigos{" "}
          <b>(do usuário e o novo de acesso)</b> e tenha ele salvo em um arquivo
          de fácil acesso.
        </p>
        <BoxImage src={Image12} alt="Empresas" />
        <h3>Informando Usuário e Senha no Sistema ERP</h3>
        <p>
          Tendo o código salvo, acesse o sistema Sistema ERP para dar
          continuidade a configuração. Acessando Menu Lateral Cadastros e em
          seguida Submenu <b>Empresas</b>
        </p>
        <BoxImage src={Image13} alt="Empresas" />
        <p>Acesse a sua empresa que irá utilizar o serviço dos correios.</p>
        <BoxImage src={Image14} alt="Empresas" />
        <p>
          Role a tela até chegar em{" "}
          <b>‘Dados Integração Correios – SIGEP WEB’,</b>
          preencha os campos de <b>‘Usuário‘ e ‘Senha‘,</b> deixe a opção{" "}
          <b>‘Utilizar no API SIGEP‘</b> marcada como na imagem a seguir e
          depois clique em salvar.
        </p>
        <BoxImage src={Image15} alt="Empresas" />
        <p>O usuário API é o mesmo encontrado no seguinte local:</p>
        <BoxImage src={Image16} alt="Empresas" />
        <p>A senha API é o código gerado neste local:</p>
        <BoxImage src={Image17} alt="Empresas" />
        <p>Acesse a sua empresa que irá utilizar o serviço dos correios.</p>
      </Typography>
    </Container>
  );
};

export default ComoRealizarAIntegracaoComCorreiosSIGEPWebNoSistemaERP;
