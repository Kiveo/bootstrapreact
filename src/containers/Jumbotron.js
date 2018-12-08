import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return(
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Hello, world!</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <p><Link className="btn btn-primary btn-lg" to="#" role="button">Learn more »</Link></p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;