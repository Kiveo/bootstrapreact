import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
        <NavLink className="navbar-brand" to="/">LOGO</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdown08">
                <NavLink className="dropdown-item" to="/sample1">Sample 1</NavLink>
                <NavLink className="dropdown-item" to="/sample2">Sample 2</NavLink>
                <NavLink className="dropdown-item" to="/sample3">Sample 3</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
