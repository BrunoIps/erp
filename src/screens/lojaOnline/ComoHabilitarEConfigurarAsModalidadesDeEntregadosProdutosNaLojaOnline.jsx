import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoHabilitarEConfigurarAsModalidadesDeEntregadosProdutosNaLojaOnline1.png";
import Image2 from "../../assets/ComoHabilitarEConfigurarAsModalidadesDeEntregadosProdutosNaLojaOnline2.png";
import Image3 from "../../assets/ComoHabilitarEConfigurarAsModalidadesDeEntregadosProdutosNaLojaOnline3.png";
import Image4 from "../../assets/ComoHabilitarEConfigurarAsModalidadesDeEntregadosProdutosNaLojaOnline4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoHabilitarEConfigurarAsModalidadesDeEntregadosProdutosNaLojaOnline =
  () => {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <TitleComponent>
          Como Habilitar e Configurar as Modalidades de Entrega dos Produtos na
          Loja Online.
        </TitleComponent>

        <Typography variant="body1" gutterBottom>
          <p>
            Quando o envio das suas mercadorias é bem executado, você gera as
            melhores experiências de compra, fideliza seus clientes e cria uma
            imagem positiva. Na Loja Online não poderia ser diferente. E com
            esse tutorial veja como é simples habilitar as modalidades de
            entregas de seus produtos.
          </p>
          <p>
            Antes de mais nada, será necessário acessar o menu lateral Loja
            Online, submenu <b>Produtos</b>.
          </p>

          <BoxImage src={Image1} />
        </Typography>
        <Typography variant="body1" gutterBottom>
          <p>
            Feito isso, será possível verificar todos os produtos juntamente com
            a possibilidade de realizar uma busca pelo seu código ou nome e
            também através da busca avançada, auxiliando na busca precisa de
            produtos cadastrados.
          </p>
          <BoxImage src={Image2} />
        </Typography>
        <Typography variant="body1" gutterBottom>
          <p>
            Agora, para que seja possível verificar as Modalidades de Entrega
            desses produtos, será necessário clicar no ícone de seta no início
            de cada descrição.
          </p>

          <BoxImage src={Image3} />
          <p>
            E pronto, com isso já será possível realizar as configurações de
            habilitações de entregas, sendo possível escolher a combinar com o
            vendedor, sigep (correios), entregas customizadas, retirada no local
            e agendamentos. E não para por aí, ainda será possível configurar a
            Otimização para Buscadores, tendo como possibilidade Meta Tag Title,
            Meta Tag Keywords e Meta Tag Description.
          </p>

          <BoxImage src={Image4} />
        </Typography>
      </Container>
    );
  };
export default ComoHabilitarEConfigurarAsModalidadesDeEntregadosProdutosNaLojaOnline;
