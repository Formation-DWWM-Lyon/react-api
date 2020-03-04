import React from 'react';
import { Card } from 'react-bootstrap';
import { resources } from '../data';
import { Link } from 'react-router-dom';

const SingleResourceLayout = ({ children, name, edited, resource }) =>
  <Card>
    <Card.Header as="h3">{name}</Card.Header>
    <Card.Body>
      <Link to={`/${resource}`}>
        <Card.Subtitle>{resources[resource].name}</Card.Subtitle>
      </Link>
    </Card.Body>
    {children}
    <Card.Footer>
      <small className="text-muted">
        Last updated {new Date(edited).toDateString()}
      </small>
    </Card.Footer>
  </Card>
;

export default SingleResourceLayout;
