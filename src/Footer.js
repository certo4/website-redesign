import React from 'react';
import './Footer.css';

function Footer() {
  const date = new Date();
  const currYear = date.getFullYear();

  return (
    <footer>
      <div className="footer-container" id="footer">
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/camila-rovalino"><span className="footer-icon"><i class="fab fa-linkedin" id="linkedin-footer"></i></span></a>
          <a href="mailto:cert.o4@hotmail.com?subject=Mail from Your Site"><span className="footer-icon"><i class="fas fa-envelope-square" id="email-footer"></i></span></a>
          <a href="https://github.com/certo4"><span className="footer-icon"><i class="fab fa-github-square" id="github-footer"></i> </span></a>
        </div>
        <div className="copyright">
          <span className="copyright-icon"><i class="far fa-copyright"></i></span>
          <p>{currYear} Camila Rovalino</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
