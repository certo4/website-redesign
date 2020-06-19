import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { useTheme } from './site-themes/ThemeContext';

function closeMobileMenu() {
  document.getElementById("mobile-menu").style.animationName = "fadeOut";
  document.getElementById("mobile-menu").style.animationDuration = ".5s";

  setTimeout(function() {
    document.getElementById("mobile-menu").style.display = "none";
    document.getElementById("root").style.display = "static";
    document.getElementById("menu-icon").style.display = "inline";
  }, 500);
}

function openMobileMenu() {
  document.getElementById("mobile-menu").style.animationName = "fadeIn";
  document.getElementById("mobile-menu").style.animationDuration = ".5s";

  setTimeout(function() {
    document.getElementById("mobile-menu").style.display = "grid";
    document.getElementById("menu-icon").style.display = "none";
  }, 500);
}

function Navigation() {
  const themeToggle = useTheme();

  function mobileLightToggle() {
    themeToggle.lightToggle();
    closeMobileMenu();
  }

  function mobileDarkToggle() {
    themeToggle.darkToggle();
    closeMobileMenu();
  }

  return (
    <header>
      <div className="header-container">
        <Link to='/' className="logo"><img className="logo" src="https://www.camilarovalino.com/hubfs/Personal%20Website/Logo/Original%20logo(8)%20(3).png" alt="logo" /></Link>
      {/* <div className="icons">
        <span className="linkedin"><i className="fab fa-linkedin-in"></i></span>
        <span className="github"><i class="fab fa-github"></i></span>
      </div> */}
      <div className="mode-toggle">
        <span className="sun-nav-l" id="sun" onClick={() => themeToggle.lightToggle()}><i class="fas fa-sun"></i></span>
        <span className="moon-nav-l" id="moon" onClick={() => themeToggle.darkToggle()}><i class="fas fa-moon"></i></span>
      </div>
      <ul className="navigation-menu">
        <Link to='/'><li id="home-link"><a href="#">Info</a></li></Link>
        <Link to='/projects'><li><a id="projects-link" href="#">Projects</a></li></Link>
        <li><a id="contact-link" href="#footer">Contact</a></li>
      </ul>
      </div>
      <div className="mobile-menu-container">
        <span className="menu-icon" id="menu-icon" onClick={openMobileMenu}><i class="fas fa-bars"></i></span>
        <div className="mobile-menu" id="mobile-menu">
        <span className="close-mobile" onClick={closeMobileMenu}><i class="fas fa-times"></i></span>
          <div className="mobile-toggle">
            <span className="sun-nav-m" id="sun" onClick={mobileLightToggle}><i class="fas fa-sun"></i></span>
            <span className="moon-nav-m" id="moon" onClick={mobileDarkToggle}><i class="fas fa-moon"></i></span>
          </div>
          <ul className="mobile-navigation-menu">
            <li id="home-link" onClick={closeMobileMenu}><Link to='/'>Info</Link></li>
            <li id="projects-link" onClick={closeMobileMenu}><Link to='/projects'>Projects</Link></li>
            <li><a id="contact-link" href="#footer" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
          <div className="icons-m">
            <a href="https://www.linkedin.com/in/camila-rovalino"><span className="linkedin-m"><i className="fab fa-linkedin-in"></i></span></a>
            <a href="https://github.com/certo4"><span className="github-m"><i className="fab fa-github"></i></span></a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;