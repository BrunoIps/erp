import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoVerificarSeOcorreuUmaNovaVendaNaLojaOnline1.png";
import Image2 from "../../assets/ComoVerificarSeOcorreuUmaNovaVendaNaLojaOnline2.png";
import Image3 from "../../assets/ComoVerificarSeOcorreuUmaNovaVendaNaLojaOnline3.png";
import Image4 from "../../assets/ComoVerificarSeOcorreuUmaNovaVendaNaLojaOnline4.png";
import Image5 from "../../assets/ComoVerificarSeOcorreuUmaNovaVendaNaLojaOnline5.png";
import Image6 from "../../assets/ComoVerificarSeOcorreuUmaNovaVendaNaLojaOnline6.png";
import Image7 from "../../assets/ComoVerificarSeOcorreuUmaNovaVendaNaLojaOnline7.png";
import Image8 from "../../assets/ComoVerificarSeOcorreuUmaNovaVendaNaLojaOnline8.png";

import BoxImage from "../../components/Image/BoxImage";

const ComoVerificarSeOcorreuUmaNovaVendaNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como verificar se ocorreu uma Nova Venda na Loja Online
      </TitleComponent>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Você já sabe que a Loja Online é uma plataforma virtual que
          possibilita que você tenha o site próprio da sua empresa. Com ela, os
          usuários/clientes acessam seu site e efetuam compras diretamente pela
          loja virtual. Mas a questão é: Como você saberá que ocorreu uma nova
          venda lá na sua Loja Online? É sobre isso que falaremos nesse post. Há
          diversas formas para acompanhar essas novas vendas. Confira!
        </p>
        <p>
          <strong>Notificação de novas vendas via e-mail</strong>
        </p>
        <p>
          Na configuração da Loja Online, há um campo para informar o vendedor
          responsável pelas vendas na Loja Online. Na mesma tela, há uma opção
          que pode ser habilitada para que o vendedor receba notificações de
          novas vendas via e-mail. Dessa forma, tanto o administrador do sistema
          quanto o vendedor receberão através do seu respectivo e-mail, as
          informações de vendas realizadas. Mas fique atento a alguns pré
          requisitos:
        </p>
        <ul>
          <li>
            A empresa responsável pela Loja Online deve possuir servidor de
            e-mails configurado. Para saber como realizar esta configuração,
            siga o artigo:
            <a href="/cadastros-basicos/como-configurar-o-servidor-de-e-mail-no-sistema-erp">
              Como configurar Servidor de E-mail no Loja Online
            </a>
            ;
          </li>
          <br />
          <li>
            É necessário ter um vendedor configurado como usuário no sistema.
            Para saber como configurar um usuário vendedor.
          </li>
          <br />
          <li>
            É necessário informar o e-mail geral do vendedor, no cadastro de
            pessoas, conforme imagem abaixo.
          </li>
        </ul>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Depois de atender a todos esses requisitos, você já poderá configurar
          para receber notificações via e-mail. Para isso, acesse o menu lateral
          <strong> Loja Online,</strong> submenu <strong>Configurações</strong>,
          e acesse a aba <strong>Configurações</strong>.
        </p>
        <BoxImage src={Image2} />
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Agora, na seção <strong>Conectando sua loja ao BackOffice,</strong>{" "}
          você verá os seguintes campos.
        </p>

        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Vendedor:</strong> informe o nome do usuário vendedor que será
          responsável pelas vendas na Loja Online;
          <br />
          <strong>Notificar vendedor padrão via e-mail:</strong> habilite esta
          opção para que o vendedor padrão receba informações de novas vendas
          realizadas na Loja Online. Lembrando que o e-mail será enviado ao
          vendedor para o endereço informado no cadastro da pessoa.
        </p>
        <p>
          Por fim, clique em <strong>Salvar</strong> no topo da tela. Dessa
          forma, quando o cliente realizar uma compra na Loja Online,
          automaticamente será encaminhado um e-mail ao administrador e ao
          vendedor, informando os seguintes dados.
        </p>

        <BoxImage src={Image4} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <h4>
          <strong>Painel de vendas da Loja Online</strong>
        </h4>

        <p>
          Outra forma de verificar as vendas realizadas através da loja virtual,
          é pelo próprio painel de vendas da Loja Online. Para isso, acesse o
          menu lateral <strong>Loja Online,</strong> submenu{" "}
          <strong>Vendas</strong>.
        </p>
        <BoxImage src={Image5} />

        <p>
          Nesta tela, serão apresentadas todas as vendas realizadas na Loja
          Online.
        </p>
        <BoxImage src={Image6} />
        <p>
          Você conseguirá verificar o cliente que efetuou a compra, o valor da
          compra, bem como o pagamento utilizado. Além disso, ao expandir a
          venda, são informados mais detalhes sobre os itens que foram
          comprados, quantidade e valor. Ainda, ao editar a venda, o sistema o
          direciona para a tela de Pedidos e Orçamentos, onde poderá analisar os
          dados e finalizar a venda normalmente.
        </p>

        <p>
          <strong>Painel de Pedidos e Orçamentos</strong>
        </p>
        <p>
          Por fim, outra possibilidade de verificar as vendas realizadas na Loja
          Online é através do painel de Pedidos e Orçamentos. Para isso, você
          deve acessar o menu lateral <b>Vendas</b>, submenu <b>Pedidos</b> e
          <b> Orçamentos</b>.
        </p>
        <BoxImage src={Image7} />
        <p>
          Nesta tela serão informadas todas as vendas realizadas no seu sistema,
          inclusive as da Loja Online. Você poderá editar a venda e finalizar da
          forma que desejar.
        </p>
        <BoxImage src={Image8} />
        <p>
          Sem dúvidas, com essas três possibilidades de verificar novas vendas,
          nenhuma delas passará despercebida pelo seu time de vendas!
        </p>
      </Typography>
    </Container>
  );
};

export default ComoVerificarSeOcorreuUmaNovaVendaNaLojaOnline;
