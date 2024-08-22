import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/UtilizandoPIXDoMercadoPagoNaLojaOnline1.png";
import Image2 from "../../assets/UtilizandoPIXDoMercadoPagoNaLojaOnline2.png";
import Image3 from "../../assets/UtilizandoPIXDoMercadoPagoNaLojaOnline3.png";
import Image4 from "../../assets/UtilizandoPIXDoMercadoPagoNaLojaOnline4.png";
import Image5 from "../../assets/UtilizandoPIXDoMercadoPagoNaLojaOnline5.png";
import Image6 from "../../assets/UtilizandoPIXDoMercadoPagoNaLojaOnline6.png";
import Image7 from "../../assets/UtilizandoPIXDoMercadoPagoNaLojaOnline7.png";
import Image8 from "../../assets/UtilizandoPIXDoMercadoPagoNaLojaOnline8.png";
import Image9 from "../../assets/UtilizandoPIXDoMercadoPagoNaLojaOnline9.png";
import Image10 from "../../assets/UtilizandoPIXDoMercadoPagoNaLojaOnline10.png";
import Image11 from "../../assets/UtilizandoPIXDoMercadoPagoNaLojaOnline11.png";
import Image12 from "../../assets/UtilizandoPIXDoMercadoPagoNaLojaOnline12.png";
import BoxImage from "../../components/Image/BoxImage";

const UtilizandoPIXDoMercadoPagoNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Utilizando PIX do Mercado Pago na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          A Integração do Mercado Pago no Sistema ERP, disponibiliza também a
          utilização junto a Loja Online. Acompanhe este artigo para saber mais!
        </p>
        <p>
          nicialmente é necessário possuir configurado a Integração no Mercado
          Pago junto ao ERP, para saber mais como estar configurando essa
          integração, acompanhe o artigo:
        </p>
        <ol>
          <li>
            <a href="/cadastros-basicos/integrando-mercado-pago-no-sistema-erp">
              Integrando Mercado Pago no Sistema ERP
            </a>
          </li>
        </ol>
        <p>
          Após ter a configuração finalizada e validada, é possível estar
          utilizando junto a Loja Online.
        </p>

        <p>
          Acesse Menu Lateral Loja Online e em seguida Submenu{" "}
          <b>Configurações</b>
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Em seguida clique no ícone de <b>Pagamentos</b>
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          No campo de Plataformas de cobrança, selecione o campo de{" "}
          <b>Integração Financeira</b>
        </p>
        <BoxImage src={Image3} />
        <p>
          Os campos de Integração Financeira serão disponibilizados para
          preenchimento
        </p>
        <BoxImage src={Image4} />
        <p>
          <b>Conta Bancária:</b> informe o nome da conta do Mercado pago que foi
          criada;
        </p>
        <p>
          <b>Meios de pagamento:</b> selecione quais as formas de pagamento que
          deseja estar disponibilizando na Loja Online e clique no sinal de +
          para serem adicionadas
        </p>
        <BoxImage src={Image5} />
        <p>Feito isso, salve as alterações.</p>
        <h4>Loja Online</h4>
        <p>
          Na Loja Online, será possível visualizar as informações de pagamento
          em suas vendas.
        </p>
        <p>Efetue o login em sua loja</p>
        <BoxImage src={Image6} />
        <p>
          Escolha os itens que desejas, clicando no campo carinho ou editando o
          produto e adicionando o mesmo ao seu carinho de compras
        </p>
        <BoxImage src={Image7} />
        <p>
          Será aberta uma nova janela do item que desejas efetuar a compra,
          então clique em <b>Comprar</b>
        </p>
        <BoxImage src={Image8} />
        <p>
          Então, será direcionado a tela de entrega onde você irá visualizar os
          dados e em seguida clicar em <b>Escolher Forma de Pagamento</b>
        </p>
        <BoxImage src={Image9} />
        <p>
          Em Pagamentos é possível visualizar as formas de pagamentos que foram
          disponibilizadas nas configurações da Integração Financeira
        </p>
        <BoxImage src={Image10} />
        <p>
          Selecione a forma de pagamento PIX em seguida clique em finalizar
          compra
        </p>
        <BoxImage src={Image11} />
        <p>
          Então será gerado o Qr-Code para quitação. Em seguida será direcionado
          a tela de Detalhes da compra, para acompanhar o pedido
        </p>
        <BoxImage src={Image12} />
      </Typography>
    </Container>
  );
};
export default UtilizandoPIXDoMercadoPagoNaLojaOnline;
