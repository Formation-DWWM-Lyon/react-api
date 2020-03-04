import React from 'react';

const Character = ({ name, gender, birth_year }) =>
  <div>
    <h2>{name}</h2>
    <ul>
      <li>Gender: {gender}</li>
      <li>Birth year: {birth_year}</li>
    </ul>
  </div>
;

export default Character;
