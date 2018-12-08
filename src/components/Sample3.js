import React from 'react';
import Carousel from '../containers/Carousel';

import Signup from '../containers/Signup';
import park from '../images/park.jpg';

export const Sample3 = () => {
  return(
    <div className="page">
      {window.scrollTo(0, 0)}
      <Carousel slide1={park} slide2={park} slide3={park} />
      <div className="container">
        <hr />

        <h2>Sample 3: Carousel and Signup</h2>
        <Signup />
        
      </div>
    </div>
  );
}