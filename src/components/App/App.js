import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppStyled from './AppStyled';

import Home from 'src/containers/Home';
import Contact from 'src/containers/Contact';
import Skills from 'src/containers/Skills';
import Portfolio from 'src/containers/Portfolio';

function App() {
  return (
    <AppStyled>
      <Switch>
        <Route key="4" path="/contact">
          <Contact />
        </Route>
        <Route key="3" path="/réalisations">
          <Portfolio />
        </Route>
        <Route key="2" path="/compétences">
          <Skills />
        </Route>
        <Route key="1" path="/">
          <Home />
        </Route>
      </Switch>
    </AppStyled>
  );
}

export default App;
