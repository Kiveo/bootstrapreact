import React from 'react';
import { Link } from 'react-router-dom';
import CardImage from '../images/286x180.svg';

export const Card = (props) => {
  return(
    <div className={props.size}>
      <img className="card-img-top" src={CardImage} alt="Card caption" />
      <div className="card-body">
        <h5 className="card-title">{props.heading}</h5>
        <p className="card-text">Card content can be placed within these components, React will display it anywhere cards are called.</p>
        <Link to="/" className="btn btn-primary">More Info Link</Link>
      </div>
    </div>
  );
}