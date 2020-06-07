import React from 'react';
import './Home.css';

function homeDarkToLight() {
  document.getElementById("header1").style.opacity = "1";
  document.getElementById("header1").style.transform = "translateY(0px)";
  document.getElementById("header1").style.animationName = "dark-to-light";
  document.getElementById("header1").style.animationDuration = ".5s";

  setTimeout(function() {
    document.getElementById("header1").style.backgroundColor = "#ced3dc";
    document.getElementById("header1").style.color = "#000505";
  }, 500);

  document.getElementById("first-box").style.animationName = "dark-to-light";
  document.getElementById("first-box").style.animationDuration = ".5s";

  setTimeout(function() {
    document.getElementById("first-box").style.backgroundColor = "#ced3dc";
    document.getElementById("first-box").style.color = "#000505";
  }, 500);

  document.getElementById("second-box").style.animationName = "dark-to-light";
  document.getElementById("second-box").style.animationDuration = ".5s";

  setTimeout(function() {
    document.getElementById("second-box").style.backgroundColor = "#ced3dc";
    document.getElementById("second-box").style.color = "#000505";
  }, 500);
}

function homeLightToDark() {
  document.getElementById("header1").style.opacity = "1";
  document.getElementById("header1").style.transform = "translateY(0px)";
  document.getElementById("header1").style.animationName = "light-to-dark";
  document.getElementById("header1").style.animationDuration = ".5s";

  setTimeout(function() {
    document.getElementById("header1").style.backgroundColor = "#000505";
    document.getElementById("header1").style.color = "#ced3dc";
  }, 500);

  document.getElementById("first-box").style.animationName = "light-to-dark";
  document.getElementById("first-box").style.animationDuration = ".5s";

  setTimeout(function() {
    document.getElementById("first-box").style.backgroundColor = "#000505";
    document.getElementById("first-box").style.color = "#ced3dc";
  }, 500);

  document.getElementById("second-box").style.animationName = "light-to-dark";
  document.getElementById("second-box").style.animationDuration = ".5s";

  setTimeout(function() {
    document.getElementById("second-box").style.backgroundColor = "#000505";
    document.getElementById("second-box").style.color = "#ced3dc";
  }, 500);
}

function Content() {
  return (
    <div className="content-container">
      <h1 className="header-home" id="header1">Camila Rovalino</h1>
      <h2>Developer</h2>
      <span className="sun" id="sun" onClick={homeDarkToLight}><i class="fas fa-sun"></i></span>
      <span className="moon" id="moon" onClick={homeLightToDark}><i class="fas fa-moon"></i></span>
      <div className="lists-container">
        <ul id="first-box">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec.<br /><br /></li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec.<br /><br /></li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec.<br /><br /></li>
        </ul>
        <ul id="second-box">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec.<br /><br /></li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec.<br /><br /></li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec.<br /><br /></li>
        </ul>
      </div>
    </div>
  );
}

export default Content;
