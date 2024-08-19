import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoCriarCombosPromocionaisNaLojaOnline1.png";
import Image2 from "../../assets/ComoCriarCombosPromocionaisNaLojaOnline2.png";
import Image3 from "../../assets/ComoCriarCombosPromocionaisNaLojaOnline3.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoCriarCombosPromocionaisNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como criar Combos Promocionais na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Os <b>Combos Promocionais</b> são uma estratégia para que o cliente
          leve mais de um produto da sua loja. Por exemplo, em uma loja de
          cosméticos, o cliente busca por um tônico facial. Durante a busca do
          produto ele encontra um combo com o tônico desejado, um hidrante
          facial e uma água micelar, por um preço excelente. Essa tática busca
          gerar uma necessidade que o cliente não sabia ter ou simplesmente
          disponibiliza um desconto que torna sedutora a compra.
        </p>
        <p>
          <b>Importante!</b> Para criar combos, os produtos já precisam estar
          informados na sua Loja Online. Você poderá enviar os produtos
          acessando o menu lateral <b>Loja Online,</b> submenu <b>Produtos</b>.
        </p>
        <p>
          Agora, para criar seus combos, acesse o menu lateral{" "}
          <b>Loja Online</b>, submenu <b>Combos Promocionais</b> e clique em{" "}
          <b>Novo</b>.
        </p>
        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Assim, o sistema abrirá a tela de cadastro dos combos, onde você
          precisará preencher algumas informações.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          <strong>Nome:</strong> informe o nome do seu combo;
          <br />
          <strong>Desconto %:</strong> neste campo informe a porcentagem de
          desconto que o combo terá;
          <br />
          <strong>Preço Final:</strong> neste campo será informado o valor final
          do combo, com o desconto aplicado. Ao lado de Preço Final, o sistema
          apresentará o valor do combo sem o desconto;
          <br />
          <strong>Preço fixo:</strong> ao marcar este checkbox, o sistema
          permitirá que você informe apenas o Preço Final do combo, e dessa
          forma, o sistema irá calcular o valor do desconto. Ao manter o
          checkbox desmarcado, o sistema permitirá que você informe apenas ao
          valor do desconto e irá calcular automaticamente o preço final do
          combo;
          <br />
          <strong>Ativo:</strong> você deverá marcar este checkbox, caso deseje
          que o combo esteja disponível na Loja Online;
          <br />
          <strong>Produto:</strong> busque pelo nome do produto que deseja
          adicionar no combo. Lembrando que este produto já deve ter sido
          enviado para a Loja Online;
          <br />
          <strong>Quantidade:</strong> informe a quantidade do produto que fará
          parte do combo;
          <br />
          <strong>Adicionar Produto:</strong> caso deseje adicionar mais
          produtos ao combo, basta clicar neste campo e informar novamente o
          nome do produto e a quantidade.
        </p>

        <p>
          Caso tenha escolhido o produto errado, você poderá editá-lo clicando
          no campo <strong>Produto</strong> ou <strong>Quantidade</strong>, e
          poderá excluí-lo clicando no ícone de lixeira.
          <br />
          Depois de preencher essas informações, clique em{" "}
          <strong>Salvar</strong>.
        </p>

        <p>
          Agora, os seus combos já estão disponíveis para venda, na tela inicial
          da sua loja.
        </p>

        <BoxImage src={Image3} />
        <p>
          Após adicionar ao carrinho, o seu cliente poderá selecionar a forma de
          entrega e finalizar a compra normalmente.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoCriarCombosPromocionaisNaLojaOnline;
