import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

function closeMobileMenu() {
  document.getElementById("mobile-menu").style.display = "none";
  // document.getElementById("footer").style.display = "grid";
}

function openMobileMenu() {
  document.getElementById("mobile-menu").style.display = "grid";
  // document.getElementById("footer").style.display = "none";
}

function Navigation() {
  return (
    <header>
      <div className="header-container">
      <img className="logo" src="https://www.camilarovalino.com/hubfs/Billie-Eilish-Everything-I-Wanted.jpg" alt="billie-eilish" />
      <div className="icons">
        <span className="github"><i className="fab fa-github-alt"></i></span>
        <span className="linkedin"><i className="fab fa-linkedin-in"></i></span>
      </div>
      <div className="mode-toggle">
        <span className="sun-nav-l" id="sun"><i class="fas fa-sun"></i></span>
        <span className="moon-nav-l" id="moon"><i class="fas fa-moon"></i></span>
      </div>
      <ul className="navigation-menu">
        <Link to='/'>
          <li id="home-link"><a href="#">Info</a></li>
        </Link>
        <Link to='/projects'>
          <li><a id="projects-link" href="#">Projects</a></li>
        </Link>
        <li><a id="contact-link" href="#">Contact</a></li>
      </ul>
      </div>
      <div className="mobile-menu-container">
        <span className="menu-icon" id="menu-icon" onClick={openMobileMenu}><i class="fas fa-bars"></i></span>
        <div className="mobile-menu" id="mobile-menu">
        <span className="close-mobile" onClick={closeMobileMenu}><i class="fas fa-times"></i></span>
          {/* <div className="m-menu-items"> */}
            <div className="mobile-toggle">
              <span className="sun-nav-m" id="sun" onClick={closeMobileMenu}><i class="fas fa-sun"></i></span>
              <span className="moon-nav-m" id="moon" onClick={closeMobileMenu}><i class="fas fa-moon"></i></span>
            </div>
            <ul className="mobile-navigation-menu">
              <li id="home-link" onClick={closeMobileMenu}><Link to='/'>Info</Link></li>
              <li id="projects-link" onClick={closeMobileMenu}><Link to='/projects'>Projects</Link></li>
              <li><a id="contact-link" href="#" onClick={closeMobileMenu}>Contact</a></li>
            </ul>
            <div className="icons-m">
              <span className="github-m"><i className="fab fa-github-alt"></i></span>
              <span className="linkedin-m"><i className="fab fa-linkedin-in"></i></span>
            </div>
          </div>
        </div>
      {/* </div> */}
    </header>
  );
}

export default Navigation;