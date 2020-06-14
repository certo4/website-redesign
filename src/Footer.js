import React from 'react';
import './Footer.css';

function Footer() {
  const date = new Date();
  const currYear = date.getFullYear();

  return (
    <footer>
      <div className="footer-container" id="footer">
        <div className="footer-icons">
          <span className="footer-icon"><i class="fab fa-linkedin" id="linkedin-footer"></i></span>
          <span className="footer-icon"><i class="fas fa-envelope-square" id="email-footer"></i></span>
          <span className="footer-icon"><i class="fab fa-github-square" id="github-footer"></i></span>
        </div>
        <div className="copyright">
          <span className="copyright-icon"><i class="far fa-copyright"></i></span>
          <p>Camila Rovalino {currYear}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
