import React from "react";
import "./Gerp.css";
import styled from 'styled-components';
import { textColor, backgroundColor } from '../site-themes/theme';

function ProjectCard() {
  const ProjectTitle = styled.h1 `
    color: ${textColor};
    background: ${backgroundColor};
  `
  const ProjectInfo = styled.div `
    color: ${textColor};
    background: ${backgroundColor};
  `

  return (
      <div className="card-container">
        <ProjectTitle className="card-h1">Gerp</ProjectTitle>
        <img className="card-img" src="https://f.hubspotusercontent20.net/hubfs/5964876/Personal%20Website/Projects/gerp-1-1.png" alt="gerp code" />
        <ProjectInfo className="card-info">
          <p>Project for COMP15 Data Structures in which I had to replicate the Unix grep command. The “gerp” program indexes all 
          files and subdirectories in the input directory and executes search queries on them. Each search query would return the 
          line number, path, line it shows up in, and query. To make this, I used a Hash Table data structure made of an array and 
          linked lists to handle hash table collisions.</p>
        </ProjectInfo>
      </div>
  );
}

export default ProjectCard;
