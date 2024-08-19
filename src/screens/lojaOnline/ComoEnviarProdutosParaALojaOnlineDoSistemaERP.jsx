import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoEnviarProdutosParaALojaOnlineDoSistemaERP1.png";
import Image2 from "../../assets/ComoEnviarProdutosParaALojaOnlineDoSistemaERP2.png";
import Image3 from "../../assets/ComoEnviarProdutosParaALojaOnlineDoSistemaERP3.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoEnviarProdutosParaALojaOnlineDoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como enviar Produtos para a Loja Online do Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Após configurar a sua Loja Online, chegou a hora de enviar seus
          produtos para lá e começar a realizar muitas vendas. Para isso, é
          necessário que você já tenha seus produtos cadastrados no Sistema ERP,
          sendo eles produtos simples ou variáveis. Além disso, é importante que
          seus produtos estejam cadastrados com categoria, imagem, peso e
          tamanhos. Dessa forma, através das categorias e imagens, seus clientes
          poderão verificar detalhes dos produtos e com a informação de peso e
          tamanho, o valor de frete via Correios ou JadLog será calculado
          automaticamente.
        </p>
        <p>
          Com todos os dados preenchidos corretamente no cadastro do produto, é
          o momento de enviá-los para a Loja Online. Para isso, acesse o menu
          lateral <b>Loja Online</b>, submenu <b>Produtos</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Feito isso, o sistema apresentará uma listagem com todos os seus
          produtos cadastrados. Mas se preferir, você poderá utilizar utilizar
          os filtros para realizar uma busca mais rápida pelos produtos que
          deseja enviar para a loja.
        </p>
        <p>
          Assim, o sistema lhe apresentará a listagem de seus produtos, com as
          informações detalhadas de cada produto, de acordo com o filtro
          aplicado.
        </p>
        <p>
          Agora, para que o produto seja exibido no site da sua Loja Online,
          habilite o campo <b>Vender na Loja.</b>
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Outra forma de enviar os produtos para o site é selecionando-os em
          massa, podendo selecionar um a um, ou todos de uma vez só. Assim, será
          apresentado um modal com a opção Enviar Para Loja, a qual você deve
          clicar.
        </p>
        <BoxImage src={Image3} />

        <p>
          Ainda na listagem de produtos, você também poderá habilitar a opção
          <b> Destacar</b>. Assim, este produto será informado na tela inicial
          do seu site. Outra opção que você poderá utilizar é a de Preço Sob
          Consulta, que ocultará o preço do produto na Loja Online.
        </p>

        <p>
          Dessa forma, ao acessar seu site, você verá que os produtos estarão
          informados com sucesso, e você poderá navegar pela tela inicial ou por
          categorias específicas para localizar o produto.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoEnviarProdutosParaALojaOnlineDoSistemaERP;
