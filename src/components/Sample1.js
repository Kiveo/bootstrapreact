import React from 'react';
import Jumbotron from '../containers/Jumbotron';
import Form from '../containers/Form';

export const Sample1 = () => {
  return(
    <div className="page">
      {window.scrollTo(0, 0)}
      <Jumbotron title="Sample 1 Prop" subtitle="Sample 1 Subtitle" />
      <div className="container">
        <hr />

        <h2>Sample 1 Form</h2>
        <Form />  
      </div>
    </div>
  );
}