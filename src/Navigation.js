import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <header>
      <div className="header-container">
      <img src="https://www.camilarovalino.com/hubfs/Billie-Eilish-Everything-I-Wanted.jpg" alt="billie-eilish" />
      <div className="icons">
        <span className="github"><i className="fab fa-github-alt"></i></span>
        <span className="linkedin"><i className="fab fa-linkedin-in"></i></span>
      </div>
      <ul>
      <li><a href="#">Info</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      </div>
    </header>
  );
}

export default Navigation;