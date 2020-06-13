import React from "react";
import "./ProjectCard.css";
import styled from 'styled-components';
import { textColor, backgroundColor } from './theme';

function ProjectCard() {
  const ProjectTitle = styled.h1 `
    color: ${textColor};
    background: ${backgroundColor};
  `
  const ProjectInfo = styled.p `
    color: ${textColor};
    background: ${backgroundColor};
  `

  return (
      <div className="card-container">
        <ProjectTitle className="card-h1">Lorem Ipsum</ProjectTitle>
        <img className="card-img" src="https://www.camilarovalino.com/hubfs/Billie-Eilish-Everything-I-Wanted.jpg" alt="billie-eilish" />
        <ProjectInfo className="card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Ac tortor vitae purus faucibus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sit amet justo donec enim diam vulputate ut. Morbi quis commodo odio aenean sed adipiscing. Nunc sed id semper risus in hendrerit gravida rutrum. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Amet purus gravida quis blandit turpis cursus in hac. In vitae turpis massa sed. Auctor urna nunc id cursus metus aliquam. Maecenas pharetra convallis posuere morbi leo urna molestie. Nam aliquam sem et tortor consequat. Sagittis id consectetur purus ut faucibus pulvinar elementum. Augue eget arcu dictum varius duis at consectetur. Consequat nisl vel pretium lectus quam id. Eros in cursus turpis massa tincidunt dui.</ProjectInfo>
      </div>
  );
}

export default ProjectCard;
