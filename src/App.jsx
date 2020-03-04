import React from 'react';
import DataContainer from './containers/DataContainer';
import { Container, Image } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StarWarsLogo } from './images';
import { ResourceTabs } from './components';

const App = () =>
  <Container>
    <h1 className="title d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
      The
      <Image src={StarWarsLogo} />
      Encyclopedia
    </h1>
    <BrowserRouter>
      <ResourceTabs />
      <Switch>
        <Route exact path="/:resource(\w+)" component={DataContainer} />
        <Route exact path="/:resource(\w+)/:id(\d+)" component={DataContainer} />
      </Switch>
    </BrowserRouter>
  </Container>
;

export default App;
