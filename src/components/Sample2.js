import React from 'react';
import Jumbotron from '../containers/Jumbotron';
import Modal from '../containers/Modal';

export const Sample2 = () => {
  return(
    <div className="page">
      {window.scrollTo(0, 0)}
      <Jumbotron title="Sample 2 Prop" subtitle="Sample 2 Subtitle" />
      <div className="container">
        <hr />

        <h2>Sample 2</h2>
        <Modal />

      </div>
    </div>
  );
}