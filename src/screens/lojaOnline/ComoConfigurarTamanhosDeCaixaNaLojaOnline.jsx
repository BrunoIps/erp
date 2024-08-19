import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarTamanhosDeCaixaNaLojaOnline1.png";
import Image2 from "../../assets/ComoConfigurarTamanhosDeCaixaNaLojaOnline2.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarTamanhosDeCaixaNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar Tamanhos de Caixa na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Na Loja Online, os Tamanhos de Caixa serve para que as dimensões de
          embalagens sejam sincronizadas com a integração do SIGEP Web
          (Correios). Nesse caso, se você deseja enviar as mercadorias para seus
          clientes através dos correios, será necessário realizar esta
          configuração na sua Loja Online, e depois, cadastrar os tamanhos de
          caixas que você utilizará para o envio das mercadorias. Lembrando que
          os tamanhos precisam estar configurados no módulo Estoque e devem
          estar informados dentro do cadastro do produto. Mas além disso, é
          necessário configurar estes tamanhos no módulo Loja Online.
          {/* aqui tem que fazer pagina  */}
        </p>
        <p>
          Para isso, acesse o menu lateral <b>Loja Online</b>, submenu{" "}
          <b>Tamanhos de Caixa</b>. Na sequência, clique em <b>Novo</b>.
        </p>
      </Typography>

      <Typography variant="body1" gutterBottom>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>Na nova tela, preencha os seguintes campos:</p>
        <BoxImage src={Image2} />
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
          <strong>Importante!</strong> Os dados que informar nesses campos devem
          ser os mesmos que foram informados no cadastro de tamanho do módulo
          Estoque.
        </p>

        <p>
          Automaticamente o sistema criará a prévia de uma embalagem de acordo
          com as medidas que você informou na tela. Caso a medida seja
          incompatível com os Correios, será apresentada a mensagem{" "}
          <strong>Tamanho de Caixa incompatível com correios!</strong> Sendo
          assim, será necessário ajustar as medidas do tamanho nesta tela e
          também, na tela de Tamanhos no módulo Estoque.
        </p>

        <p>
          Caso possua dúvidas nas configurações dos tamanhos aceitos pelos
          Correios, segue o link que é possível acompanhar o artigo
          disponibilizado pelo mesmo para estar auxiliando na configuração dos
          tamanhos corretos, segue o artigo{" "}
          <a href="https://www.correios.com.br/enviar/encomendas/arquivo/nacional/guia-tecnico-embalagens-rpc_v1-1.pdf">
            EMBALAGENS RECOMENDADAS PELOS CORREIOS
          </a>
          .
        </p>

        <p>
          Depois de preencher os dados, clique em <strong>Salvar</strong>.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarTamanhosDeCaixaNaLojaOnline;
