import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoConfigurarDiasEHorariosDeAtendimentoNaLojaOnline1.png";
import Image2 from "../../assets/ComoConfigurarDiasEHorariosDeAtendimentoNaLojaOnline2.png";
import Image3 from "../../assets/ComoConfigurarDiasEHorariosDeAtendimentoNaLojaOnline3.png";
import Image4 from "../../assets/ComoConfigurarDiasEHorariosDeAtendimentoNaLojaOnline4.png";
import Image5 from "../../assets/ComoConfigurarDiasEHorariosDeAtendimentoNaLojaOnline5.png";
import Image6 from "../../assets/ComoConfigurarDiasEHorariosDeAtendimentoNaLojaOnline6.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoConfigurarDiasEHorariosDeAtendimentoNaLojaOnline = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como configurar Dias e Horários de Atendimento na Loja Online
      </TitleComponent>

      <Typography variant="body1" gutterBottom>
        <p>
          Para que os seus clientes e fornecedores possam ir até a sua loja
          física ou contatar sua equipe sobre produtos, solicitar atendimento ou
          fazer entregas, é fundamental informar o horário de expediente.
        </p>
        <p>
          Para isso, acesse o menu lateral <b>Loja Online</b>, submenu{" "}
          <b>Configurações</b> e clique na aba <b>Configurações</b>.
        </p>

        <BoxImage src={Image1} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Agora, em<b> Dias e horários de atendimento</b> o sistema apresentará
          todos os dias da semana. Você poderá marcar os dias em que a sua loja
          se encontra aberta.
        </p>
        <BoxImage src={Image2} />
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          Após selecionar os dias, o sistema abrirá um campo para o horário de
          abertura e outro para o horário de fechamento do seu comércio. Você
          poderá clicar no ícone de mais para adicionar mais campos para horário
          de abertura e de fechamento, assim poderá informar os intervalos da
          loja.
        </p>

        <BoxImage src={Image3} />

        <p>
          Também é possível clicar em <b>Copiar</b>. Assim, ao habilitar os
          demais dias de atendimento, poderá apenas clicar em <b>Colar</b>. Ao
          fazer isso, o sistema preencherá automaticamente o horário, conforme o
          do dia copiado.
        </p>

        <BoxImage src={Image4} />

        <p>
          Após definir seus horários, basta clicar em <b>Salvar</b>. Agora, seus
          clientes poderão verificar seus horários de atendimento diretamente na
          sua loja virtual. Para isso, basta acessar o site da loja e clicar em
          <b> Horários ou em Aberto</b>, caso esteja no horário de atendimento.
        </p>

        <BoxImage src={Image5} />
        <p>
          Assim, será aberto um modal com todos os dias da semana e os horários
          de atendimento da loja física.
        </p>

        <BoxImage src={Image6} />
      </Typography>
    </Container>
  );
};
export default ComoConfigurarDiasEHorariosDeAtendimentoNaLojaOnline;
