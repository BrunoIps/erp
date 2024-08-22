import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";

const ComoCadastrarOperacoesFiscaisParaEmitirNFNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como cadastrar Operações Fiscais para emitir NF-e no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        É muito comum as empresas terem tributações de produtos diferente uma
        das outras. Mas para facilitar esta explicação, vamos exemplificar cada
        uma das situações.
      </Typography>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <b>Uma empresa que vende todos os produtos com a mesma tributação</b>
        </p>
        <p>
          A primeira situação e a mais simples, é quando a empresa vende todos
          os produtos com a mesma tributação. Imaginamos que a empresa esteja
          inserida no regime de apuração Simples Nacional, onde não há
          incidência de ICMS. Logo, todos os produtos que esta empresa vende
          terão apenas uma situação de ICMS, que será a 400 (Não Tributada).
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <b>Uma empresa que vende produtos com tributações diferentes</b>
        </p>

        <p>
          Já a segunda situação é quando os itens vendidos não possuem a mesma
          tributação. Um exemplo disso é quando o governo determina que alguns
          produtos terão incidência de ICMS ST. Então neste caso, a sua empresa
          pode ter produtos com o ICMS normal, e outros, o ICMS ST. Mas claro,
          este é apenas um exemplo. Você pode ter várias outras situações em que
          o imposto entre os produtos podem mudar, como é o caso de alíquotas.
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <b>
            Duas empresas diferentes que vendem produtos com a mesma tributação
          </b>
        </p>
        <p>
          A terceira situação é quando você gerencia no Sistema ERP duas ou mais
          empresas, que possuem regimes de apuração diferentes. Ou seja, uma
          empresa do Simples Nacional e outra do Lucro Real. Porém, ambas vendem
          os mesmos produtos e a tributação deles não variam, por exemplo, todos
          eles possuem ICMS normal, sem a incidência de ST.
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <b>
            Duas empresas diferentes que vendem produtos com tributações
            diferentes
          </b>
        </p>
        <p>
          Já a quarta situação é quando você gerencia no Sistema ERP duas ou
          mais empresas, que possuem regimes de apuração diferentes. Ou seja,
          uma empresa do Simples Nacional e outra do Lucro Real. Além disso,
          ambas vendem os mesmos produtos com tributações diferentes, por
          exemplo, alguns produtos possuem ICMS normal, sem a incidência de ST,
          já outros possuem ICMS com a incidência de ST.
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Agora ficou mais fácil de identificar qual dessas situações se
          enquadra na realidade da sua empresa? Então, para saber mais em como
          configurar cada uma delas no Sistema ERP, conte com os respectivos
          artigos:
        </p>
      </Typography>
      <p>
        <a href="/fiscal/como-emitir-nf-e-com-produtos-de-mesma-tributacao-no-sistema-erp">
          Como emitir NF-e com produtos de mesma tributação no Sistema ERP
        </a>
      </p>
      <p>
        <a href="/fiscal/como-emitir-nf-e-com-produtos-de-tributacoes-diferentes-no-sistema-er">
          Como emitir NF-e com produtos de tributações diferentes no Sistema ERP
        </a>
      </p>
      <p>
        <a href="/fiscal/como-emitir-nf-e-para-empresas-diferentes-com-produtos-de-mesma-tributacao-no-sistema-erp">
          Como emitir NF-e para empresas diferentes com produtos de mesma
          tributação no Sistema ERP
        </a>
      </p>
      <p>
        <a href="/fiscal/como-emitir-nf-e-para-empresas-diferentes-com-produtos-de-tributacoes-diferentes-no-sistema-erp">
          Como emitir NF-e para empresas diferentes com produtos de tributações
          diferentes no Sistema ERP
        </a>
      </p>
    </Container>
  );
};
export default ComoCadastrarOperacoesFiscaisParaEmitirNFNoSistemaERP;
