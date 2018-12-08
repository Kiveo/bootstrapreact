import React from 'react';
import { Card } from './Card';
import Jumbotron from '../containers/Jumbotron';

export const About = () => {
  return(
    <div className="page">
      {window.scrollTo(0, 0)}
      <Jumbotron title="About Prop" subtitle="About Subtitle" />
      <div className="container">
        <hr />
        <h2>Pertinent Info</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Phasellus volutpat lectus eget dolor posuere facilisis. 
          Sed aliquam lacinia mauris non sollicitudin. Sed ultrices sed lorem eu sollicitudin. 
          Curabitur egestas massa quis venenatis tincidunt. Nullam mollis nisi nec hendrerit posuere. 
          Aenean lorem velit, feugiat in feugiat sed, feugiat nec mi. Nulla at finibus justo.</p>
          
      </div>
    </div>
  );
}