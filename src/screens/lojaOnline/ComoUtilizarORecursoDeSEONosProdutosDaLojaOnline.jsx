import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoUtilizarORecursoDeSEONosProdutosDaLojaOnline1.png";
import Image2 from "../../assets/ComoUtilizarORecursoDeSEONosProdutosDaLojaOnline2.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoUtilizarORecursoDeSEONosProdutosDaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como utilizar o recurso de SEO nos produtos da Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Sem dúvida, para alcançar melhores resultados no meio digital, é
          preciso atualizar sempre as tecnologias utilizadas. Exemplo disso é
          investir em SEO.
        </p>
        <p>
          O SEO é um conjunto de técnicas que busca otimizar o posicionamento de
          um site nas páginas de buscas (Google, Yahoo, etc…) conquistando assim
          um tráfego orgânico.
        </p>
        <p>
          Essa ferramenta otimiza a posição da sua <b>Loja Online</b> nos
          rankings de buscas. Para ter resultados efetivos, é fundamental que
          você se dedique para fazer boas descrições dos produtos, utilizar
          palavras-chave relevantes e até imagens que realmente se relacionem
          com o produto anunciado. Lembre-se que quanto mais informações você
          utilizar para alimentar o algoritmo, mais inteligente ele fica!
        </p>
        <p>
          Para acessar esse recurso, acesse o menu lateral <b>Loja Online</b>,
          submenu
          <b>Produtos</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, você deverá expandir o produto para que possa visualizar os
          campos.
        </p>
        <BoxImage src={Image2} />
        <p>
          <b>Meta Tag Title:</b> informe o título, ou seja, o nome da mercadoria
          em si.
        </p>
        <p>Por exemplo: Gel Hidratante Facial - Oceane;</p>

        <p>
          <b>Meta tag description:</b> a descrição é uma produção de conteúdo
          com as características do seu produto. Lembre-se de fazer uma
          descrição breve e atrativa, utilizando linguagem acessível.
        </p>
        <p>
          Por exemplo: Este creme com textura gel possui alta hidratação e
          propriedades rejuvenescedoras graças à ação do ácido hialurônico.
          Soma-se a ele outros componentes: Extrato de pérola, Niacinamida
          (Vitamina B3) e Mel. O Facial Gel Cream possui rápida absorção e não
          deixa resíduos gordurosos. Também refresca e deixa a pele revitalizada
          e macia.
        </p>

        <p>
          <b>Meta tag Keywords:</b> palavras-chave, são as palavras importantes
          (aquelas que são fundamentais) para identificar este item.
        </p>
        <p>Por exemplo: Gel Hidratante, Gel Facial, SkinCare, Oceane</p>

        <p>
          <b>Atenção!</b> Há uma regra para separação de palavras chaves nos
          campos SEO. Para separar as palavras, deve-se usar os símbolos > ou -.
        </p>

        <p>
          Com todas as informações corretamente inseridas, clique em{" "}
          <b>Salvar</b>.
        </p>

        <p>
          <b>Importante!</b> As recomendações de SEO indicam que a Meta
          Description deve ter menos de 160 caracteres, pois, o Google corta a
          Meta Description a partir desta quantidade{" "}
          <i>(o que inclui letras, números, pontos e espaços)</i>. É preciso que
          o texto seja menor que isso para aparecer corretamente.
        </p>

        <p>
          Quanto às <b>palavras-chave</b>, você pode incluir quantas desejar. A
          única questão que realmente precisa ser observada é que para fazer com
          que seu produto tenha relevância e esteja bem posicionado em buscas na
          web, as palavras-chave precisam ter conexão com o que está sendo
          anunciado.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoUtilizarORecursoDeSEONosProdutosDaLojaOnline;
