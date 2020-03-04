import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { SingleResourceLayout } from '.';

const Planet = ({ name, population, gravity, edited }) =>
  <SingleResourceLayout {...{ resource: 'planets', name, edited }}>
    <ListGroup variant="flush">
      <ListGroup.Item>Population: {population}</ListGroup.Item>
      <ListGroup.Item>Gravity: {gravity}</ListGroup.Item>
    </ListGroup>
  </SingleResourceLayout>
;

export default Planet;
