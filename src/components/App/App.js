import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import AppStyled from './AppStyled';
import 'animate.css'
import { AnimatePresence } from "framer-motion"

import Home from 'src/containers/Home';
import Skills from 'src/containers/Skills';
import Portfolio from 'src/containers/Portfolio';
import Nav from 'src/containers/Nav';
import Tarif from 'src/containers/Tarif';
import Legal from 'src/components/Legal'
import SimpleMenu from 'src/components/SimpleMenu'

function App() {

  const location = useLocation();
  return (
    <AppStyled>
      <div className="bcg-wrapper">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
        <Route path="/legal">
            <Legal />
          </Route>
          <Route path="/tarif">
            <Tarif />
          </Route>
          <Route path="/réalisations">
            <Portfolio />
          </Route>
          <Route path="/compétences">
            <Skills />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
      </div>
      <Nav />
      <SimpleMenu />
    </AppStyled>
  );
}

export default App;
