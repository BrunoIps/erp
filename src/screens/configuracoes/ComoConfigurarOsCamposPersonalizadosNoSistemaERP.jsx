import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarOsCamposPersonalizadosNoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarOsCamposPersonalizadosNoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarOsCamposPersonalizadosNoSistemaERP3.png";
import Image4 from "../../assets/ComoConfigurarOsCamposPersonalizadosNoSistemaERP4.png";
import Image5 from "../../assets/ComoConfigurarOsCamposPersonalizadosNoSistemaERP5.png";
import Image6 from "../../assets/ComoConfigurarOsCamposPersonalizadosNoSistemaERP6.png";
import Image7 from "../../assets/ComoConfigurarOsCamposPersonalizadosNoSistemaERP7.png";
import Image8 from "../../assets/ComoConfigurarOsCamposPersonalizadosNoSistemaERP8.png";
import Image9 from "../../assets/ComoConfigurarOsCamposPersonalizadosNoSistemaERP9.png";
import Image10 from "../../assets/ComoConfigurarOsCamposPersonalizadosNoSistemaERP10.png";
import Image11 from "../../assets/ComoConfigurarOsCamposPersonalizadosNoSistemaERP11.png";

import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarOsCamposPersonalizadosNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar os Campos Personalizados no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          O Sistema ERP disponibiliza para os usuários a possibilidade de
          cadastrar campos personalizados. Esses campos podem ser utilizados no
          cadastro de produtos, no cadastro de um novo pedido, para configurar
          uma nova ordem de produção, no momento da realização de um contrato e
          na hora do cadastro de uma pessoa. Por meio do atributo criado no
          sistema, você pode organizar as informações do seu produto e aplicar
          tags para especificar as características.
        </p>
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <h4>Como cadastrar um atributo (campo personalizado)</h4>
        <p>
          Para personalizar um novo campo acesse o menu lateral Configurações,
          submenu Atributos.
        </p>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          A seguir, clique em <b>Novo</b>.
        </p>

        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Logo após, na tela de <b>Cadastro de Atributos </b>será possível criar
          um novo atributo.
        </p>
        <p>
          Vamos imaginar que desejamos criar um novo campo chamado “Placa do
          Veículo” na tela de Vendas.
        </p>

        <BoxImage src={Image3} />
        <p>
          <strong>Nome:</strong> informe o nome que terá o novo campo;
        </p>
        <p>
          <strong>Tipo:</strong> selecione o local em que esse novo campo será
          exibido na tela;
        </p>
        <p>
          <strong>Tag:</strong> informe um nome, sem espaços e sem hífen. A
          etiqueta comunicada neste campo irá transferir a informação para o
          documento personalizado.
        </p>
        <p>
          <strong>Campo correspondente na NF-e:</strong> no caso de ter
          selecionado o tipo “Venda”, surge esse novo campo na tela. O sistema
          permite que, com informações inseridas nesse campo, sejam repassadas
          automaticamente para a venda da NF-e, como através da venda. Você pode
          selecionar para Informações de Compra (Grupo ZB), selecionando entre
          xNEmp (Nota de Empenho), xPed (informações sobre o pedido) e xCont
          (informações sobre o contrato da compra).
        </p>

        <p>
          Após o preenchimento das informações, clique em{" "}
          <strong>Salvar</strong>.
        </p>

        <h3>Como usar o Campo Personalizado em Vendas</h3>

        <p>
          Agora, acesse o menu lateral <strong>Vendas</strong> submenu{" "}
          <strong>Novo Pedido</strong>.
        </p>

        <BoxImage src={Image4} />

        <BoxImage src={Image5} />
        <p>
          Em seguida, na tela de <strong>Novo Pedido</strong> será possível
          visualizar o campo personalizado que foi criado. O sistema de
          informação disponibilizada, após os campos de disponibilidade.
        </p>

        <h3>Como usar o Campo Personalizado na Ordem de Produção</h3>

        <p>
          A ordem de produção no módulo PCP, já conta com diversos campos
          informativos. O sistema disponibiliza atributo para organizar os itens
          que podem ocorrer a mais que ou a alguma informação a respeito da
          Ordem de Produção.
        </p>

        <p>
          Acessando novamente o menu lateral <strong>Configurações</strong>,
          submenu <strong>Atributos</strong>, é possível cadastrar um{" "}
          <strong>Novo</strong> campo personalizado, para a tela de{" "}
          <strong>PCP</strong>.
        </p>

        <BoxImage src={Image6} />
        <p>
          A partir disso, vamos cadastrar uma Nova Ordem de Produção, usando
          Campo Personalizado. Para isso, acesse o menu submenu PCP ,Nova Ordem
          Produção.{" "}
        </p>
        <BoxImage src={Image7} />
        <p>
          Na tela, <strong>Cadastro de Ordem de Produção</strong>, ao rolar para
          baixo será possível visualizar o Atributo seguinte, na seção{" "}
          <strong>Campos Personalizados</strong>. Agora, seu atributo
          personalizado estará pronto para ser utilizado. Depois de preencher
          todos os campos, clique em <strong>Salvar</strong>.
        </p>

        <h3>Como usar o Campo Personalizado nos Cadastro do Produto</h3>

        <p>
          O sistema disponibiliza o atributo para organizar os dados dos
          produtos cadastrados em seu sistema. Neste caso será possível
          personalizar um novo campo para estar presente na tela de cadastro de
          novo produto, ou de edição de um produto já existente.
        </p>

        <p>
          Acessando novamente o menu lateral <strong>Configurações</strong>,
          submenu <strong>Atributos</strong>, é possível cadastrar um{" "}
          <strong>Novo</strong> campo personalizado, para a tela de{" "}
          <strong>Produto</strong>.
        </p>

        <p>
          O novo atributo criado poderá ser usado nos dados de um produto
          cadastrado anteriormente no sistema ou em um novo cadastro. Portanto,
          acesse o menu lateral <strong>Cadastros</strong>, submenu{" "}
          <strong>Novo Produto</strong>.
        </p>

        <BoxImage src={Image8} />
        <p>
          A próxima tela <strong>Cadastro de Produtos</strong> informa os dados
          do produto. Feito isso, busque pela seção{" "}
          <strong>Campos personalizadas</strong> e seu atributo personalizado
          estará pronto para ser utilizado. Depois de preencher todos os campos,
          clique em <strong>Salvar</strong>.
        </p>

        <h3>Como usar o Campo Personalizado nos Contratos</h3>

        <p>
          Além de todos os demais locais em que pode ser utilizado o Campo
          Personalizado, também pode ser usado no momento de realizar um novo
          Contrato no sistema.
        </p>

        <p>
          Assim como os demais atributos, inicialmente será necessário realizar
          o cadastro desse, acessando o menu lateral{" "}
          <strong>Configurações</strong>, submenu <strong>Atributos</strong>, em
          seguida, clicando em <strong>Novo</strong>, e preenchendo os dados com
          o <strong>Tipo Contrato</strong>.
        </p>
        <BoxImage src={Image9} />
        <p>
          Feito isso, já é possível usar esse novo campo na criação de um novo
          contrato. Dessa forma, acesse o menu lateral{" "}
          <strong>Contratos</strong>, submenu <strong>Novo Contrato</strong>.
        </p>

        <p>
          Assim que abrir a tela do Novo Contrato, na parte inferior você verá a
          seção <strong>Campos Personalizados</strong>, onde se encontra o{" "}
          <strong>Atributo</strong> que acabou de configurar no sistema.
        </p>

        <p>
          Lembrando que a informação apresentada neste campo poderá ser impressa
          de forma automática depois de gerar o contrato no sistema.
        </p>

        <p>
          Acessando o menu lateral <strong>Contratos</strong>, submenu{" "}
          <strong>Tipos de Contratos</strong>, no Dicionário você estará
          disponível uma <strong>TAG</strong> informada para esse campo
          anteriormente, na configuração do <strong>Atributo</strong>.
        </p>

        <BoxImage src={Image10} />
        <p>
          <strong>Como usar o Campo Personalizado no Cadastro de Pessoa</strong>
        </p>

        <p>
          Para criar campos personalizados no cadastro de pessoas, acesse a tela
          de cadastro do atributo, no menu lateral{" "}
          <strong>Configurações</strong>, submenu <strong>Atributos</strong>, e
          clique em <strong>Novo</strong>.
        </p>

        <p>
          Os campos serão os mesmos como demais telas, porém terão a adição do
          campo <strong>Tipo do valor</strong>, onde há a possibilidade de
          selecionar várias opções de como preencher essa informação.
        </p>

        <p>
          inda é possível selecionar este campo personalizado será de
          preenchimento obrigatório. Basta ativar o botão{" "}
          <strong>“É obrigatório?”</strong>.
        </p>

        <p>
          Agora, este recurso estará disponível no cadastro de uma nova pessoa
          ou editando um cadastro já existente. Portanto, acesse o menu lateral{" "}
          <strong>Cadastros</strong>, submenu <strong>Pessoas</strong>.
        </p>

        <BoxImage src={Image11} />

        <p>
          <strong>IMPORTANTE:</strong> os criados para, você pode ser adicionado
          em seu documento, para que seja adicionado em seu documento e pedido
          personalizado e com uma informação de orçamento na etiqueta, lembrando
          que a etiqueta não imprime um momento para conter o espaço ou hífen.
          Atributos criados para produtos, apresentada na busca avançada do
          cadastro de produtos, na qual você poderá selecionar o sistema irá
          trazer como informações que estão vinculados aos atributos
          cadastrados.
        </p>
      </Typography>
    </Container>
  );
};

export default ComoConfigurarOsCamposPersonalizadosNoSistemaERP;
