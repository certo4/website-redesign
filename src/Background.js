import React from 'react';
import './Background.css';

setInterval(function() {
  let top = Math.floor(Math.random() * 81) + 10; 
  let left = Math.floor(Math.random() * 81) + 10; 

  document.getElementById("shooting-stars1").style.top = top + "%";
  document.getElementById("shooting-stars1").style.left = left + "%";

  void document.getElementById("shooting-stars1").offsetWidth;
  void document.getElementById("shooting-stars1").offsetHeight;

  document.getElementById("shooting-stars1").classList.remove('shooting-stars1');

  void document.getElementById("shooting-stars1").offsetWidth;
  void document.getElementById("shooting-stars1").offsetHeight;

  document.getElementById("shooting-stars1").classList.add('shooting-stars1');

  void document.getElementById("shooting-stars1").offsetWidth;
  void document.getElementById("shooting-stars1").offsetHeight;
}, 5000);

setInterval(function() {
  let top = Math.floor(Math.random() * 81) + 10; 
  let left = Math.floor(Math.random() * 81) + 10; 

  document.getElementById("shooting-stars2").style.top = top + "%";
  document.getElementById("shooting-stars2").style.left = left + "%";

  void document.getElementById("shooting-stars2").offsetWidth;
  void document.getElementById("shooting-stars2").offsetHeight;

  document.getElementById("shooting-stars2").classList.remove('shooting-stars2');

  void document.getElementById("shooting-stars2").offsetWidth;
  void document.getElementById("shooting-stars2").offsetHeight;

  document.getElementById("shooting-stars2").classList.add('shooting-stars2');

  void document.getElementById("shooting-stars2").offsetWidth;
  void document.getElementById("shooting-stars2").offsetHeight;
}, 3000);


function Background() {
  return (
    <div className="sky-container">
      <div id="star-container">
        <img id="shooting-stars1" className="shooting-stars" src="https://f.hubspotusercontent20.net/hubfs/5964876/Personal%20Website/Shooting%20stars.png" alt="shooting-stars" />
        <img id="shooting-stars2" className="shooting-stars" src="https://f.hubspotusercontent20.net/hubfs/5964876/Personal%20Website/Shooting%20stars.png" alt="shooting-stars" />
      </div>

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
