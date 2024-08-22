import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/PorQueNaoEstaCalculandoORreteDosCorreiosNaLojaOnline1.png";
import Image2 from "../../assets/PorQueNaoEstaCalculandoORreteDosCorreiosNaLojaOnline2.png";
import Image3 from "../../assets/PorQueNaoEstaCalculandoORreteDosCorreiosNaLojaOnline3.png";
import Image4 from "../../assets/PorQueNaoEstaCalculandoORreteDosCorreiosNaLojaOnline4.png";
import Image5 from "../../assets/PorQueNaoEstaCalculandoORreteDosCorreiosNaLojaOnline5.png";
import Image6 from "../../assets/PorQueNaoEstaCalculandoORreteDosCorreiosNaLojaOnline6.png";

import BoxImage from "../../components/Image/BoxImage";

const PorQueNaoEstaCalculandoORreteDosCorreiosNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Por que não está calculando o frete dos Correios na Loja Online
      </TitleComponent>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          É de extrema importância que o valor do frete esteja sendo calculado
          corretamente nas lojas virtuais. Isso pelo fato de que se estiver
          informado um valor menor do que realmente deveria ser pago, a sua
          empresa deverá arcar com custos adicionais deste valor. Portanto, se
          você realiza as entregas na Loja Online através dos Correios e percebe
          que o valor do frete está incorreto, este artigo é para você. Para que
          não ocorra nenhuma inconsistência no valor do frete, é necessário se
          atentar a três dicas fundamentais.
        </p>
        <p>
          <strong>1. Informar peso e tamanho no cadastro do produto</strong>
        </p>
        <p>
          Ao anunciar um produto na Loja Online, em que o envio ocorre através
          dos Correios, é necessário que os produtos estejam configurados com o
          peso e tamanho. Para saber como realizar o cadastro do tamanho no
          sistema, acompanhe o artigo:{" "}
          <a href="/cadastros-basicos/como-configurar-os-tamanhos-de-produtos-no-sistema-erp">
            Como configurar os Tamanhos de Produtos no Sistema ERP
          </a>
          . Lembrando que no cadastro do tamanho, deve ser habilitado o campo{" "}
          <b>Visível no SIGEP</b>, para que o Sistema ERP se comunique com o
          sistema dos Correios.
        </p>
        <p>
          Feito isso, você poderá inserir o tamanho e o peso no cadastro do
          produto. Portanto, acesse o menu lateral <b>Cadastros</b>, submenu{" "}
          <b>Produtos e edite</b> o produto desejado.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Em seguida, na aba <b>Dados</b>, expanda a seção <b>Estoque</b>. Neste
          momento você deverá preencher os seguintes campos:
        </p>
        <BoxImage src={Image2} />
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Peso Bruto (KG):</strong> informe o peso bruto, incluindo o
          peso do produto e materiais necessários para embalagem;
          <br />
          <strong>Peso Líquido (KG):</strong> informe o peso líquido, sendo
          apenas o peso do produto;
          <br />
          <strong>Tamanho/Dimensões:</strong> informe o tamanho configurado
          anteriormente no módulo Estoque.
        </p>
        <p>
          Depois de informar os dados necessário, basta clicar em{" "}
          <strong>Salvar</strong>.
        </p>
        <p>
          <strong>2. Configurar tamanho de caixa na Loja Online</strong>
        </p>
        <p>
          Além de configurar os tamanhos no módulo Estoque e informá-los nos
          produtos, também é necessário cadastrar estes tamanhos no módulo Loja
          Online. Sendo assim, acesse o menu lateral{" "}
          <strong>Loja Online</strong>, submenu{" "}
          <strong>Tamanhos de Caixa</strong>. Em seguida, clique em{" "}
          <strong>Novo</strong>.
        </p>

        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>Na nova tela, será necessário preencher os seguintes campos:</p>

        <BoxImage src={Image4} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <strong>Largura (cm):</strong> informe a largura da embalagem;
          <br />
          <strong>Altura (cm):</strong> informe a altura da embalagem;
          <br />
          <strong>Comprimento (cm):</strong> informe o comprimento da embalagem.
        </p>

        <p>
          Lembrando que os dados que informar nesses campos devem ser os mesmos
          que foram informados no tamanho do módulo Estoque.
        </p>

        <p>
          Automaticamente o sistema criará a prévia de uma embalagem de acordo
          com as medidas que você informou. Caso a medida seja incompatível com
          os Correios, será apresentada a mensagem{" "}
          <strong>Tamanho de Caixa incompatível com correios!</strong> Sendo
          assim, será necessário ajustar as medidas do tamanho nesta tela e
          também, na tela de Tamanhos no módulo Estoque. Depois de preencher os
          dados, clique em <strong>Salvar</strong>.
        </p>

        <p>
          <strong>3. Permitir que o produto seja enviado pelo SIGEP</strong>
        </p>

        <p>
          Por fim, para que o frete seja calculado corretamente na sua Loja
          Online, é necessário habilitar o produto para ser enviado através do
          SIGEP. Para isso, acesse o menu lateral <strong>Loja Online</strong>,
          submenu <strong>Produtos</strong>.
        </p>

        <BoxImage src={Image5} />

        <p>
          Nesta página, <b>expanda o produto </b>que deseja entregar através dos
          correios e habilite o campo <b>Permitir Sigep (Correios)</b>. Em
          seguida, clique em <b>Salvar</b>.
        </p>
        <BoxImage src={Image6} />
        <p>
          Agora que todos os passos foram realizados, o valor do frete através
          dos Correios já será calculado corretamente no site da sua Loja
          Online.
        </p>
      </Typography>
    </Container>
  );
};

export default PorQueNaoEstaCalculandoORreteDosCorreiosNaLojaOnline;
