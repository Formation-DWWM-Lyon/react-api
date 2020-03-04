import React from 'react';
import DataContainer from './containers/DataContainer';
import { Container } from 'react-bootstrap';

const App = () =>
  <Container>
    <DataContainer resource="truc" />
  </Container>
;

export default App;
