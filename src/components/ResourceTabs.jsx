import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { resources } from '../data';
import { Link, withRouter } from 'react-router-dom';

const ResourceTabs = ({ location }) => {
  const currentResource = location.pathname.match(/^\/(\w+)/)[1] ||
    Object.keys(resources)[0];

  return (
    <ButtonGroup>
      {Object.keys(resources).map( (key) =>
        <Link to={`/${key}`}>
          <Button
            key={key}
            variant={currentResource === key ? 'secondary' : 'primary'}
            disabled={currentResource === key}
          >
            {resources[key].namePlural}
          </Button>
        </Link>
      )}
    </ButtonGroup>
  );
}

export default withRouter(ResourceTabs);
