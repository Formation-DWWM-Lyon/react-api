import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { parseSwapiUrl } from '../utils';
import Loader from 'react-loader-spinner';

export default class LinkContainer extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    const { url } = this.props;

    Axios.get(url)
    .then(response => this.setState({ data: response.data }))
    .catch(error => console.error(error));
  }

  render = () => {
    const { url } = this.props;
    const { data } = this.state;

    if (!data) {
      return (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={20}
          width={20}
          className="d-inline"
        />
      );
    }

    const [resource, id] = parseSwapiUrl(url);

    return (
      <Link to={`/${resource}/${id}`}>
        {data.name}
      </Link>
    );
  }
}
