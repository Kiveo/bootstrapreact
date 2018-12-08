import React from 'react';
import Jumbotron from '../containers/Jumbotron';
import Carousel from '../containers/Carousel';

export const Sample3 = () => {
  return(
    <div className="page">
      {window.scrollTo(0, 0)}
      <Jumbotron title="Sample 3" subtitle="Carousel Demo" />
      <div className="container">
        <hr />

        <h2>Sample 3: Gallery</h2>
        <Carousel />

      </div>
    </div>
  );
}