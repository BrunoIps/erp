// Router.js
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import MainLayout from "../components/mainLayout";
import LojaOnlineIndex from "../screens/lojaOnline";
import React from "react";

import { cardsLojaOnline } from "../mocks/loja-online";
import CadastroBasicoIndex from "../screens/cadastrosBasicos/cadastrosBasicos";
import { cadastroBasico } from "../mocks/cadastrosBasicos";
import { vendas } from "../mocks/vendas";
import ScrollToTop from "../components/Scroll/ScrollToTop";
import Vendas from "../screens/vendas/vendas";
import { fiscal } from "../mocks/fiscal";
import { configuracoes } from "../mocks/configuracoes";
import FiscalIndex from "../screens/fiscal";
import ConfiguracoesIndex from "../screens/configuracoes";

const MyRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <ScrollToTop />
        <Routes>
          <Route path="/loja-online" element={<LojaOnlineIndex />} />
          <Route path="/" element={<Navigate to="/loja-online" />} />
          <Route path="/cadastros-basicos" element={<CadastroBasicoIndex />} />
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/fiscal" element={<FiscalIndex />} />
          <Route path="/configuracoes" element={<ConfiguracoesIndex />} />
          {cardsLojaOnline.map((card) => {
            if (card.element) {
              return <Route path={card.path} element={card.element} />;
            }
            return null;
          })}
          {cadastroBasico.map((card) => {
            if (card.element) {
              return <Route path={card.path} element={card.element} />;
            }
            return null;
          })}
          {vendas.map((card) => {
            if (card.element) {
              return <Route path={card.path} element={card.element} />;
            }
            return null;
          })}
          {fiscal.map((card) => {
            if (card.element) {
              return <Route path={card.path} element={card.element} />;
            }
            return null;
          })}
          {configuracoes.map((card) => {
            if (card.element) {
              return <Route path={card.path} element={card.element} />;
            }
            return null;
          })}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default MyRoutes;
