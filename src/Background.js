import React from 'react';
import './Background.css';

setInterval(function() {
  let top = Math.floor(Math.random() * 81) + 11; 
  let left = Math.floor(Math.random() * 81) + 10; 

  document.getElementById("shooting-stars1").style.top = top + "%";
  document.getElementById("shooting-stars1").style.left = left + "%";

  void document.getElementById("shooting-stars1").offsetWidth;
  void document.getElementById("shooting-stars1").offsetHeight;

  document.getElementById("shooting-stars1").classList.remove('shooting-stars');

  void document.getElementById("shooting-stars1").offsetWidth;
  void document.getElementById("shooting-stars1").offsetHeight;

  document.getElementById("shooting-stars1").classList.add('shooting-stars');

  void document.getElementById("shooting-stars1").offsetWidth;
  void document.getElementById("shooting-stars1").offsetHeight;
}, 5000);


function Background() {
  return (
    <div className="sky-container">
      <img className="shooting-star" src="https://www.camilarovalino.com/hubfs/Personal%20Website/shooting%20star%20(2)-1-1.png" alt="shooting-star" />
      <div id="star-container">
        <img id="shooting-stars1" className="shooting-stars" src="https://www.camilarovalino.com/hubfs/Personal%20Website/Shooting%20stars.png" alt="shooting-stars" />
        <img id="shooting-stars2" className="shooting-stars" src="https://www.camilarovalino.com/hubfs/Personal%20Website/Shooting%20stars.png" alt="shooting-stars" />
      </div>
      {/* <img className="shooting-stars" src="https://www.camilarovalino.com/hubfs/Personal%20Website/Shooting%20stars.png" alt="shooting-stars" />
      <img className="shooting-stars" src="https://www.camilarovalino.com/hubfs/Personal%20Website/Shooting%20stars.png" alt="shooting-stars" />
      <img className="shooting-stars" src="https://www.camilarovalino.com/hubfs/Personal%20Website/Shooting%20stars.png" alt="shooting-stars" /> */}
      {/* BACKGROUND STARS & ANIMATIONS */}
      <div className="stars-0"></div>
      <div className="stars-1"></div>
      <div className="stars-2"></div>
      <div className="stars-3"></div>
      <div className="stars-4"></div>
      <div className="stars-5"></div>
    </div>
  );
}

export default Background;
