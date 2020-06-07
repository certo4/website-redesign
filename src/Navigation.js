import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <div className="header-container">
      <img className="logo" src="https://www.camilarovalino.com/hubfs/Billie-Eilish-Everything-I-Wanted.jpg" alt="billie-eilish" />
      <div className="icons">
        <span className="github"><i className="fab fa-github-alt"></i></span>
        <span className="linkedin"><i className="fab fa-linkedin-in"></i></span>
      </div>
      <ul className="navigation-menu">
        <Link to='/'>
          <li id="projects-link"><a href="#">Info</a></li>
        </Link>
        <Link to='/projects'>
          <li><a href="#">Projects</a></li>
        </Link>
        <li><a href="#">Contact</a></li>
      </ul>
      </div>
    </header>
  );
}

export default Navigation;