import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppStyled from './AppStyled';

import Home from 'src/containers/Home';
import Skills from 'src/containers/Skills';
import Portfolio from 'src/containers/Portfolio';
import SwitchMode from 'src/containers/SwitchMode';

function App() {
  return (
    <AppStyled>
      <Switch>
        <Route key="3" path="/réalisations">
          <Portfolio />
        </Route>
        <Route key="2" path="/compétences">
          <Skills />
        </Route>
        <Route key="1" path="/">
          <Home />
          <SwitchMode />
        </Route>
      </Switch>
    </AppStyled>
  );
}

export default App;
