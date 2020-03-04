import React, { Component } from 'react';
import Axios from 'axios';
import { Character } from '../components';

export default class Container extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    console.log("Le composant Container vient juste d'être monté!");
    Axios.get('https://swapi.co/api/people/1')
    .then(response => this.setState({ data: response.data }))
    .catch(error => console.error(error));
  }

  render = () => {
    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Character
      name={data.name}
      gender={data.gender}
      birth_year={data.birth_year}
    />;
  }
}
