import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import LinkContainer from '../containers/LinkContainer';

const Character = ({ name, gender, birth_year, edited, homeworld }) =>
  <Card>
    <Card.Header as="h3">{name}</Card.Header>
    <Card.Body>
      <Card.Subtitle>Character</Card.Subtitle>
    </Card.Body>
    <ListGroup variant="flush">
      <ListGroup.Item>Gender: {gender}</ListGroup.Item>
      <ListGroup.Item>Birth year: {birth_year}</ListGroup.Item>
      <ListGroup.Item>
        Homeworld: <LinkContainer url={homeworld} />
      </ListGroup.Item>
    </ListGroup>
    <Card.Footer>
      <small className="text-muted">
        Last updated {new Date(edited).toDateString()}
      </small>
    </Card.Footer>
  </Card>
;

export default Character;
