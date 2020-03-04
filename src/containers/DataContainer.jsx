import React, { Component } from 'react';
import Axios from 'axios';
import { Character } from '../components';
import Loader from 'react-loader-spinner';

export default class DataContainer extends Component {
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
      return (
        <div className="text-center">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      );
    }

    return <Character {...data} />;
  }
}
