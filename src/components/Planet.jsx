import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Planet = ({ name, population, gravity, edited }) =>
  <Card>
    <Card.Header as="h3">{name}</Card.Header>
    <Card.Body>
      <Card.Subtitle>Planet</Card.Subtitle>
    </Card.Body>
    <ListGroup variant="flush">
      <ListGroup.Item>Population: {population}</ListGroup.Item>
      <ListGroup.Item>Gravity: {gravity}</ListGroup.Item>
    </ListGroup>
    <Card.Footer>
      <small className="text-muted">
        Last updated {new Date(edited).toDateString()}
      </small>
    </Card.Footer>
  </Card>
;

export default Planet;
