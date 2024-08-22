import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarOsTamanhosDeProdutosNoSistemaERP1.png";
import Image2 from "../../assets/ComoConfigurarOsTamanhosDeProdutosNoSistemaERP2.png";
import Image3 from "../../assets/ComoConfigurarOsTamanhosDeProdutosNoSistemaERP3.png";
import Image4 from "../../assets/ComoConfigurarOsTamanhosDeProdutosNoSistemaERP4.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarOsTamanhosDeProdutosNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar os Tamanhos de Produtos no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          A configuração de tamanho de produtos serve para que sejam
          configurados as dimensões das embalagens utilizadas nas entregas de
          cada item. Logo, essas informações são utilizadas para o controle de
          frete das vendas das mercadorias. Você poderá configurar as medidas de
          embalagens de diferentes produtos, podendo ser caixas, cilindros e
          envelopes.
        </p>
        <p>
          Para isso, acesse o menu lateral <b>Estoque</b>, submenu{" "}
          <b>Tamanhos</b>.
        </p>
        <p>
          <BoxImage src={Image1} />
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Para adicionar um tamanho, clique em <b>Novo</b>.
        </p>
        <p>Na próxima tela, informe os seguintes campos:</p>
        <BoxImage src={Image2} />

        <p>
          <strong>Nome do tamanho:</strong> informe um nome para identificação
          da sua embalagem. Este campo será utilizado para buscar este cadastro
          no cadastro do produto;
        </p>

        <p>
          <strong>Largura (cm):</strong> informe a largura da embalagem, em
          centímetros;
        </p>

        <p>
          <strong>Altura (cm):</strong> informe a altura do produto, em
          centímetros;
        </p>

        <p>
          <strong>Profundidade/Comprimento (cm):</strong> informe a profundidade
          do item, em centímetros;
        </p>

        <p>
          <strong>Diâmetro (cm):</strong> informe o diâmetro do item, em
          centímetros, se houver;
        </p>

        <p>
          <strong>Tipo Objeto:</strong> este campo será preenchido
          automaticamente conforme o preenchimento dos campos acima;
        </p>

        <p>
          <strong>Visível no SIGEP:</strong> ao marcar esse checkbox, você
          definirá que esse tamanho será sincronizado com a integração SIGEP Web
          (Correios);
        </p>

        <p>
          Abaixo dos campos, há uma ilustração para você se guiar e localizar as
          medidas corretamente.
        </p>

        <p>
          Após preencher todos os campos, clique em <strong>Salvar</strong>.
        </p>

        <h3>Como informar o Tamanho no Cadastro do Produto</h3>

        <p>
          Para isso, acesse o menu lateral <strong>Cadastro</strong>, submenu{" "}
          <strong>Produto</strong>.
        </p>

        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Localize o produto desejado e clique em Editar. Logo após, dirija-se à
          seção Estoque, na aba <b>Dados</b>.
        </p>
        <BoxImage src={Image4} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Clique sobre o campo <strong>Tamanho/Dimensões</strong> e se abrirão
          os tamanhos cadastrados anteriormente, selecione o que corresponde a
          esse produto, e clique em <strong>Salvar</strong>.
        </p>

        <p>
          Caso possua dúvidas nas configurações dos tamanhos aceitos pelos
          Correios, segue o link que é possível acompanhar o artigo
          disponibilizado pelo mesmo para estar auxiliando na configuração dos
          tamanhos corretos, segue o artigo{" "}
          <a
            href="https://www.correios.com.br/enviar/encomendas/arquivo/nacional/guia-tecnico-embalagens-rpc_v1-1.pdf"
            target="_blank"
            rel="noreferrer"
          >
            EMBALAGENS RECOMENDADAS PELOS CORREIOS
          </a>
        </p>
      </Typography>
    </Container>
  );
};
export default ComoConfigurarOsTamanhosDeProdutosNoSistemaERP;
