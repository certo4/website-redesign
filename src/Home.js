import React from 'react';
import './Home.css';
import styled from 'styled-components';
import { textColor, backgroundColor } from './site-themes/theme';


function Content() {

  const Header = styled.h1 `
    color: ${textColor};
    background: ${backgroundColor};
  `

  const Box = styled.ul `
  color: ${textColor};
  background: ${backgroundColor};
  ` 

  return (
      <div className="content-container">
      <Header className="header-home">Camila Rovalino</Header>
      <h2>Developer</h2>
      <div className="lists-container">
        <Box id="first-box">
          <li><p>I am a Jumbo! I graduated from Tufts University in 2019 with a BS in Quantitative Economics. 
          Tufts enriched my worldview, gave me exposure to a wide range of opportunities, and led me 
          to find what I love to do.</p><br /></li>
          <li><p>I fell in love with Computer Science in my third year at school. Studying Computer Science 
          expanded my intellectual comfort zones and inspired me to approach new challenges with an open 
          mind. I learned to code in C and C++ while tackling <a href="/projects">projects</a> for every 
          new CS fundamental concept I learned. I was encouraged to think dynamically and be resourceful 
          when finding answers to technical questions. All of these reasons inspired me to pursue a career 
          in tech.</p><br /></li>
          <li><p>At Tufts, I was also a co-project manager of 
          a <a href="https://www.davisprojectsforpeace.org/projects/projects/2018/node/6192">
          Digital Libraries project</a> in rural and coastal areas of Ecuador for more than two years.
          </p><br /></li>
        </Box>
        <Box id="second-box">
          <li><p>This was one of the most formative experiences I had in school. I had the opportunity to work 
          closely with community members and learn about leadership and empathy. I was able to experience 
          first-hand how deep the technological gap is and how important it is for people to learn how to 
          overcome it. This project was a unique chance to remain connected and give back to the country I 
          come from.</p><br /></li>
          <li><p>After graduating school, I started working in HubSpot! I self-taught front-end web development 
          during my time at HS by creating my personal website -  you can <a href="/card">read more about 
          that here</a>. Now, as a specialist on design, I am working on the front-end of customer’s 
          websites on a daily basis. I am looking forward to continue building my career and skills in tech.
          </p><br /><br /><br /><br /><br /></li>
        </Box>
      </div>
    </div>
  );
}

export default Content;
