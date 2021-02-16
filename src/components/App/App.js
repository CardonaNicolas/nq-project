import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppStyled from './AppStyled';

import Home from 'src/containers/Home';
import Skills from 'src/containers/Skills';
import Portfolio from 'src/containers/Portfolio';
import SwitchMode from 'src/containers/SwitchMode';
import Nav from 'src/containers/Nav';

function App() {
  return (
    <AppStyled>
      <Switch>
        <Route key="3" path="/réalisations">
          <Portfolio />
          <Nav />
          <SwitchMode />
        </Route>
        <Route key="2" path="/compétences">
          <Skills />
          <Nav />
          <SwitchMode />
        </Route>
        <Route key="1" path="/">
          <Home />
          <Nav />
          <SwitchMode />
        </Route>
      </Switch>
    </AppStyled>
  );
}

export default App;
