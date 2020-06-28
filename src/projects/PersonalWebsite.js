import React from "react";
import "./PersonalWebsite.css";
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
        <ProjectTitle className="card-h1">Personal Website</ProjectTitle>
        <div className="card-gallery">
          <img className="card-img" src="https://f.hubspotusercontent20.net/hubfs/5964876/Personal%20Website/Projects/home-dark-2.png" alt="Website home" />
          <img className="card-img" src="https://f.hubspotusercontent20.net/hubfs/5964876/Personal%20Website/Projects/background-tufts-2.png" alt="Website background" />
          <img className="card-gif" src="https://media.giphy.com/media/KDsNRSAxtKGihU3er4/giphy.gif" alt="Website now" />
        </div>
        <ProjectInfo className="card-info">
          <p>In order to learn more about front-end web development I created <a href="https://pages.camilarovalino.com/" target="_blank">the first version</a> of my personal
          website from top to bottom in HTML, CSS, JavaScript and hosted it in HubSpot. The concept was that my website would contain three pages 
          with background, current work, and contact. The home page would only be a music player that would take you through each of the pages.</p><br /> 
          
          <p>This project was a great space to be creative and learn how to put together a website. However, when I was done, I knew there were 
          many areas where I could improve and I did not want the nightmare of having all my styling in one single stylesheet. This is why I decided 
          to redesign my website in React and take advantage of its modularity and flexibility.</p><br />
          
          <p>Another sample improvement I could make was taking advantage of the flow of the document to position elements and make my site mobile 
          responsive more easily. I overused absolute positioning in the Background page so I created different sets of media queries that would 
          attempt to cover all tablet and mobile sizes. I can tell you now, if you are using a mobile device and you hold your phone horizontally 
          you are most likely to see some weird spacing to the right of the Background page. This is because it is not sustainable to keep using 
          media queries only to take care of mobile responsiveness. You are bound to bump into a window size that will break your layout.</p><br />
          
          <p>When I was redesigning my website I still wanted it to be mobile responsive but I did not want to repeat the endless media query 
          journey from before so I evaluated my options. I could use Bootstrap that comes with modules that have mobile responsiveness 
          integrated in them or I could use CSS grid. I opted for grid and I cannot sing its praises enough. With minimal media queries and 
          very few lines of code I had made my website fully mobile responsive.</p><br />

          {/* <p>You can find the full source code for the current and the original website below.</p><br /> */}
        </ProjectInfo>
        <div className="previous-project">
          <p><a>Gerp</a></p>
        </div>
        <div className="next-project">
          <p><a>Universal Machine</a></p>
        </div>
      </div>
  );
}

export default ProjectCard;
