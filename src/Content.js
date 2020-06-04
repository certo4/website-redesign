import React from 'react';
import './Content.css';

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById("sun") || document.getElementById("moon")) {
    document.getElementById("sun").addEventListener('click', function() {

      document.getElementById("first-box").style.animationName = "dark-to-light";
      document.getElementById("first-box").style.animationDuration = ".5s";
  
      setTimeout(function() {
        document.getElementById("first-box").style.backgroundColor = "white";
        document.getElementById("first-box").style.color = "#000505";
      }, 500);
  
      document.getElementById("second-box").style.animationName = "dark-to-light";
      document.getElementById("second-box").style.animationDuration = ".5s";
  
      setTimeout(function() {
        document.getElementById("second-box").style.backgroundColor = "white";
        document.getElementById("second-box").style.color = "#000505";
      }, 500);
    });

    document.getElementById("moon").addEventListener('click', function() {

      document.getElementById("first-box").style.animationName = "light-to-dark";
      document.getElementById("second-box").style.animationDuration = ".5s";
  
      setTimeout(function() {
        document.getElementById("first-box").style.backgroundColor = "#000505";
        document.getElementById("first-box").style.color = "white";
      }, 500);
  
      document.getElementById("second-box").style.animationName = "light-to-dark";
      document.getElementById("second-box").style.animationDuration = ".5s";
  
      setTimeout(function() {
        document.getElementById("second-box").style.backgroundColor = "#000505";
        document.getElementById("second-box").style.color = "white";
      }, 500);
    });
  }
});

function Content() {
  return (
    <div className="content-container">
      <h1 id="header1">Camila Rovalino</h1>
      <h2>Developer</h2>
      <span className="sun" id="sun"><i class="fas fa-sun"></i></span>
      <span className="moon" id="moon"><i class="fas fa-moon"></i></span>
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
