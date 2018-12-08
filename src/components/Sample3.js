import React from 'react';
import Jumbotron from '../containers/Jumbotron';
// import Modal from '../containers/Modal';

export const Sample3 = () => {
  return(
    <div className="page">
      {window.scrollTo(0, 0)}
      <Jumbotron title="Sample 3 Prop" subtitle="Sample 3 Subtitle" />
      <div className="container">
        <hr />

        <h2>Sample 3</h2>
        {/* <Modal /> */}

      </div>
    </div>
  );
}