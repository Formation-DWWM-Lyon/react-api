import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { SingleResourceLayout } from '.';
import LinkContainer from '../containers/LinkContainer';

const Character = ({ name, gender, birth_year, edited, homeworld }) =>
  <SingleResourceLayout {...{ resource: 'planets', name, edited }}>
    <ListGroup variant="flush">
      <ListGroup.Item>Gender: {gender}</ListGroup.Item>
      <ListGroup.Item>Birth year: {birth_year}</ListGroup.Item>
      <ListGroup.Item>
        Homeworld: <LinkContainer url={homeworld} />
      </ListGroup.Item>
    </ListGroup>
  </SingleResourceLayout>
;

export default Character;
