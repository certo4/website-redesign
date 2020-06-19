import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { textColor, backgroundColor } from './site-themes/theme';

function Projects() {
  const Card = styled.div `
    color: ${textColor};
    background: ${backgroundColor};
  `

  return (
      <div className="projects-container">
        <Card id="project1" className="project-card">
          <img className="img-project1" src="https://f.hubspotusercontent20.net/hubfs/5964876/Personal%20Website/Projects/background-tufts-2.png" alt="Camila Rovalino original site" />
          <h3 className="h2-projects" id="h2-projects">Personal Website</h3>
          <Link to="/personal-website"><button className="b1">Learn more</button></Link>
        </Card>
        <Card id="project2" className="project-card">
          <img className="img-project2" src="https://f.hubspotusercontent20.net/hubfs/5964876/Personal%20Website/Projects/kcachegrind.png" alt="kcachegrind" />
          <h3 className="h2-projects" id="h2-projects">Universal Machine</h3>
          <Link to="/um"><button className="b2">Learn more</button></Link>
        </Card>
        <Card id="project3" className="project-card">
          <img className="img-project3" src="https://f.hubspotusercontent20.net/hubfs/5964876/Personal%20Website/Projects/gerp-1-1.png" alt="gerp code" />
          <h3 className="h2-projects" id="h2-projects">Gerp</h3>
          <Link to="/gerp"><button className="b3">Learn more</button></Link>
        </Card>
      </div>
  );
}

export default Projects;