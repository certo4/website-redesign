import React from 'react';
import './Projects.css';
import {Link} from 'react-router-dom';

function darkToLight() {
  
  document.getElementById("project1").style.animationName = "dark-to-light";
  document.getElementById("project1").style.animationDuration = ".5s";

  setTimeout(function() {
    document.getElementById("project1").style.backgroundColor = "#ced3dc";
    document.getElementById("project1").style.color = "#000505";
  }, 500);

  document.getElementById("project2").style.animationName = "dark-to-light";
  document.getElementById("project2").style.animationDuration = ".5s";

  setTimeout(function() {
    document.getElementById("project2").style.backgroundColor = "#ced3dc";
    document.getElementById("project2").style.color = "#000505";
  }, 500);

  document.getElementById("project3").style.animationName = "dark-to-light";
  document.getElementById("project3").style.animationDuration = ".5s";

  setTimeout(function() {
    document.getElementById("project3").style.backgroundColor = "#ced3dc";
    document.getElementById("project3").style.color = "#000505";
  }, 500);
}

  function lightToDark() {
    document.getElementById("project1").style.animationName = "light-to-dark";
    document.getElementById("project1").style.animationDuration = ".5s";

    setTimeout(function() {
      document.getElementById("project1").style.backgroundColor = "#000505";
      document.getElementById("project1").style.color = "#ced3dc";
    }, 500);

    document.getElementById("project2").style.animationName = "light-to-dark";
    document.getElementById("project2").style.animationDuration = ".5s";

    setTimeout(function() {
      document.getElementById("project2").style.backgroundColor = "#000505";
      document.getElementById("project2").style.color = "#ced3dc";
    }, 500);

    document.getElementById("project3").style.animationName = "light-to-dark";
    document.getElementById("project3").style.animationDuration = ".5s";

    setTimeout(function() {
      document.getElementById("project3").style.backgroundColor = "#000505";
      document.getElementById("project3").style.color = "#ced3dc";
    }, 500);
}

function Projects() {
  return (
      <div className="projects-container">
        <span className="sun-projects" id="sun-projects" onClick={darkToLight}><i class="fas fa-sun"></i></span>
        <span className="moon-projects" id="moon-projects" onClick={lightToDark}><i class="fas fa-moon"></i></span>
        <div id="project1" className="project-card">
          <img className="img-project1" src="https://www.camilarovalino.com/hubfs/Billie-Eilish-Everything-I-Wanted.jpg" alt="billie-eilish" />
          <h3 className="h2-projects" id="h2-projects">Lorem ipsum dolor</h3>
          <Link to="/card">
            <button className="b1">Learn more</button>
          </Link>

        </div>
        <div id="project2" className="project-card">
          <img className="img-project2" src="https://www.camilarovalino.com/hubfs/Billie-Eilish-Everything-I-Wanted.jpg" alt="billie-eilish" />
          <h3 className="h2-projects" id="h2-projects">Lorem ipsum dolor</h3>
          <button className="b2">Learn more</button>
        </div>
        <div id="project3" className="project-card">
          <img className="img-project3" src="https://www.camilarovalino.com/hubfs/Billie-Eilish-Everything-I-Wanted.jpg" alt="billie-eilish" />
          <h3 className="h2-projects" id="h2-projects">Lorem ipsum dolor</h3>
          <button className="b3">Learn more</button>
        </div>
      </div>
  );
}

export default Projects;