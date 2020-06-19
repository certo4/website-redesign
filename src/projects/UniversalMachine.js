import React from "react";
import "./UniversalMachine.css";
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
        <ProjectTitle className="card-h1">Universal Machine</ProjectTitle>
        <img className="card-img" src="https://f.hubspotusercontent20.net/hubfs/5964876/Personal%20Website/Projects/kcachegrind.png" alt="kcachegrind" />
        <ProjectInfo className="card-info">
          <p>Pair programming project in which we had to build an emulator of a Turing-complete machine with 14 instructions and a 
          segmented memory as an assignment for COMP40 Machine Structure and Assembly Language. This machine most resembles the 
          first IBM PC Intel 8086.</p><br />

          <p>The machine takes in a program that is written in a series of instructions. Our emulator needed to go through each 
          instruction, decode, and execute it. In order to test our UM, we had to write our own assembly code.</p><br />

          <p>Once the machine was built, the second part of the assignment was to optimize it using tools like kcachegrind to 
          evaluate the most expensive parts of the program. We learned that it is key to make sure you have written a program 
          well. Only then you can measure performance to improve the parts that affect performance the most.</p>
        </ProjectInfo>
      </div>
  );
}

export default ProjectCard;
