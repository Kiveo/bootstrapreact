import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar2 = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse justify-content-md-center collapse" id="navbarsExample08">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="#">Disabled For Demo</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="http://example.com" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
            <div className="dropdown-menu" aria-labelledby="dropdown08">
              <Link className="dropdown-item" to="/about">About</Link>
              <Link className="dropdown-item" to="/sample1">Sample 1</Link>
              <Link className="dropdown-item" to="/sample2">Sample 2</Link>
            </div>
          </li>
        </ul>

      </div>
      <Link className="navbar-brand" to="/">LOGO</Link>
    </nav>
  );
}
