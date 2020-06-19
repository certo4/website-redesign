import React from 'react';
import './Home.css';
import styled from 'styled-components';
import { textColor, backgroundColor } from './theme';


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
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec.<br /><br /></li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec.<br /><br /></li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec.<br /><br /></li>
        </Box>
        <Box id="second-box">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec.<br /><br /></li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec.<br /><br /></li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec.<br /><br /></li>
        </Box>
      </div>
    </div>
  );
}

export default Content;
