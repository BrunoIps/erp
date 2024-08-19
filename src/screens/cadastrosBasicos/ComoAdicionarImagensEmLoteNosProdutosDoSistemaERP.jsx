import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/imagensEmLote.png";
import Image2 from "../../assets/imagensEmLote2.png";
import Image3 from "../../assets/imagensEmLote3.png";
import Image4 from "../../assets/imagensEmLote4.png";
import Image5 from "../../assets/imagensEmLote5.png";
import Image6 from "../../assets/imagensEmLote6.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoAdicionarImagensEmLoteNosProdutosDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como adicionar Imagens em lote nos Produtos do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        Está precisando de agilidade para adicionar imagens em seus produtos?
        Temos uma funcionalidade na qual não será necessário editar produto por
        produto para realizar a função! Se ficou interessado em saber mais sobre
        este assunto, continue nesse artigo que vamos te mostrar o passo a
        passo.
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Primeiramente, deve acessar o menu lateral <strong>Cadastros,</strong>{" "}
          submenu
          <strong> Produtos.</strong>
        </p>
        <p>
          <BoxImage src={Image1} />
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Agora, serão apresentados todos os seus produtos já cadastrados no
          sistema. Mas você também pode localizar itens com exatidão. Para isto,
          use a opção <strong>Busca Avançada </strong> e informe as descrições
          para que o sistema liste os seus produtos.
        </p>
        <p>
          <BoxImage src={Image2} />
        </p>

        <p>
          Feito isso, selecione os itens desejados e imediatamente o sistema
          apresentará no topo de sua tela algumas opções possíveis. Para dar
          continuidade, clique em <strong>Buscar Imagens.</strong>
          <BoxImage src={Image3} />
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Na nova tela, serão apresentados separadamente todos os itens
          selecionados. Aqui você tem a opção de buscar por uma imagem
          específica diretamente do seu computador.
        </p>
        <p>
          <BoxImage src={Image4} />
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Mas se deseja anexar uma imagem específica que já se encontra no seu
          computador, utilize a opção <strong>Anexar</strong>. Logo, o sistema
          abrirá seus arquivos para localizar a mesma.
        </p>
        <p>
          <BoxImage src={Image5} />
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Caso tenha inserido uma imagem por engano, não tem problema, você
          poderá excluí-la. Para isto, basta acessar o menu lateral{" "}
          <strong>Cadastros, </strong>
          submenu <strong>Produtos, </strong>editar o produto no qual deseja
          retirar a imagem e ir até a seção <strong>Fotos.</strong>
        </p>
        <p>
          <BoxImage src={Image6} />
        </p>
        <p>
          Agora, você verá as imagens inseridas neste item, onde será necessário
          clicar no ícone de X para deletá-la. Por fim, não se esqueça de salvar
          o cadastro do produto novamente.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoAdicionarImagensEmLoteNosProdutosDoSistemaERP;
