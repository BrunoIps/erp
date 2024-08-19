import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP1.png";
import Image2 from "../../assets/ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP2.png";
import Image3 from "../../assets/ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP3.png";
import Image4 from "../../assets/ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP4.png";
import Image5 from "../../assets/ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP5.png";
import Image6 from "../../assets/ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP6.png";
import Image7 from "../../assets/ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP7.png";
import Image8 from "../../assets/ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP8.png";
import Image9 from "../../assets/ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP9.png";
import Image10 from "../../assets/ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP10.png";
import Image11 from "../../assets/ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP11.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como Agrupar Pedidos e emitir a Nota Fiscal no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Sabe quando você tem 2 ou mais pedidos de uma mesma pessoa (seja ela
          física ou jurídica) e quer gerar uma única NF-e ou NFS-e? Pois então,
          nesse artigo a gente ensina todos os passos para fazer esse
          agrupamento, sem erros, sem burocracia e ganhando mais praticidade no
          controle de vendas e na gestão fiscal!
        </p>
        <p>
          Para começar, acesse o menu lateral <b>Vendas</b>, submenu{" "}
          <b>Agrupamento de </b>
          <b>Pedidos</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Nesse momento, se abrirá uma tela de agrupamento de pedidos, onde você
          deve clicar em <b>Novo</b> e pesquisar pelo código de cada pedido que
          deseja agrupar. Feito isso, clique em <b>Adicionar</b>. Repita o
          processo até adicionar todos os pedidos que deseja agrupar.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Uma vez que eles estejam agrupados, você verá a seguinte listagem:
        </p>

        <BoxImage src={Image3} />
        <p>
          Note que haverá 4 outras abas, onde será possível visualizar outras
          informações dos pedidos anexados, são elas:{" "}
          <b>Produtos/Serviços, Equipamentos, Laudos e Veículos.</b>
        </p>
        <p>
          Clique em <b>Salvar</b> e já será exibido o código do agrupamento, o
          nome da empresa e do cliente.{" "}
        </p>

        <BoxImage src={Image4} />
        <p>
          Clicando em voltar, você retorna à listagem de agrupamentos. Marque o
          checkbox ao lado do agrupamento gerado e será possível:{" "}
          <b>
            Emitir a NF-e, Emitir NFS-e, Imprimir o agrupamento, Editá-lo,
            Excluí-lo ou Cancelar a Seleção.
          </b>
        </p>
        <BoxImage src={Image5} />
        <p>
          Para emitir a nota, basta selecionar o tipo de documento fiscal
          desejado e seguir os passos de preenchimento, conforme vamos explicar
          mais adiante.
        </p>
        <p>
          <b>Existe outro caminho para realizar essa opção? </b>
        </p>
        <p>
          Outro caminho possível é através do menu Vendas, submenu{" "}
          <b>Pedidos e Orçamentos.</b>
        </p>
        <BoxImage src={Image6} />
        <p>
          <b>Atenção! </b>Os pedidos já precisam estar com o status{" "}
          <b>Pedido Faturado.</b>
          Para agrupar esses pedidos, eles precisam ser da mesma pessoa e a
          venda precisa ser proveniente da mesma empresa (considerando casos em
          que você tenha mais de uma empresa cadastrada no sistema). Por
          exemplo, você não pode agrupar uma venda da Loja A e uma da Loja B,
          mesmo que o cliente seja o mesmo.
        </p>
        <BoxImage src={Image7} />
        <p>
          Selecione os pedidos desejados, clicando no checkbox à sua esquerda.
          Nesse momento, surgirá uma modal com algumas opções. Então, selecione
          o tipo de nota que deseja emitir.{" "}
        </p>
        <BoxImage src={Image8} />
        <p>
          Marcando a opção <b>NF-e</b>, você será direcionado para a tela de
          edição da <b>Nova NFe.</b>
        </p>
        <BoxImage src={Image9} />
        <p>
          Alguns dados tanto do cliente como dos produtos, já serão carregados
          automaticamente. Inclua as informações faltantes ou faça algum ajuste
          necessário. Vale destacar que os dados do remetente (aquele que emite
          a nota, ou seja a sua empresa, são de preenchimento obrigatório). Com
          todos os dados corretamente inseridos, clique em <b>Pré-visualizar</b>
          .
        </p>
        <BoxImage src={Image10} />
        <p>
          Assim, você poderá revisar a nota e se tudo estiver correto, basta
          clicar em Emitir NF-e (ou Voltar à Edição para corrigir).{" "}
        </p>
        <BoxImage src={Image11} />
        <p>
          É importante destacar que esse processo n
          <b>ão funciona para gerar movimentação financeira</b>. É
          exclusivamente uma facilidade para<b> emitir a nota fiscal!</b>
        </p>
        <p>
          E nesse sentido, em se tratando da emissão de uma nota fiscal, há
          outro ponto super importante que precisa ser observado:{" "}
          <b>
            você não poderá agrupar pedidos que tenham categorias de venda
            diferentes.
          </b>{" "}
          Por exemplo:{" "}
          <b>
            não dá para juntar um pedido com venda de materiais e serviços e
            outro com brindes.
          </b>
        </p>
      </Typography>
    </Container>
  );
};
export default ComoAgruparPedidosEEmitiraNotaFiscalNoSistemaERP;
