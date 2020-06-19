import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { textColor, backgroundColor } from './theme';

function Projects() {
  const Card = styled.div `
    color: ${textColor};
    background: ${backgroundColor};
  `

  return (
      <div className="projects-container">
        <Card id="project1" className="project-card">
          <img className="img-project1" src="https://www.camilarovalino.com/hubfs/Billie-Eilish-Everything-I-Wanted.jpg" alt="billie-eilish" />
          <h3 className="h2-projects" id="h2-projects">Lorem ipsum dolor</h3>
          <Link to="/card">
            <button className="b1">Learn more</button>
          </Link>
        </Card>
        <Card id="project2" className="project-card">
          <img className="img-project2" src="https://www.camilarovalino.com/hubfs/Billie-Eilish-Everything-I-Wanted.jpg" alt="billie-eilish" />
          <h3 className="h2-projects" id="h2-projects">Lorem ipsum dolor</h3>
          <button className="b2">Learn more</button>
        </Card>
        <Card id="project3" className="project-card">
          <img className="img-project3" src="https://www.camilarovalino.com/hubfs/Billie-Eilish-Everything-I-Wanted.jpg" alt="billie-eilish" />
          <h3 className="h2-projects" id="h2-projects">Lorem ipsum dolor</h3>
          <button className="b3">Learn more</button>
        </Card>
      </div>
  );
}

export default Projects;