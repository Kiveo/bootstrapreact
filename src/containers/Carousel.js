import React, { Component } from 'react';
import slide1 from '../images/slide1.svg';
import slide2 from '../images/slide2.svg';
import slide3 from '../images/slide3.svg';

import './Carousel.css';

class Carousel extends Component {
  render() {
    return(
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={slide1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={slide2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={slide3} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;

