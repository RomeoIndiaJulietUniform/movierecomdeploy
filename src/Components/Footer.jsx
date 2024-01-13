import React from 'react';
import "../CompStyle/footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <p>Connect with me:</p>
      <div className="social-links">
        <a href="https://github.com/rijuoddusual1999" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/GitHub-Profile-green" alt="GitHub Badge" />
        </a>
        <a href="https://leetcode.com/riju1/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/LeetCode-Profile-orange" alt="LeetCode Badge" />
        </a>
        <a href="https://www.linkedin.com/in/riju-mondal-137686244/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/LinkedIn-Profile-blue" alt="LinkedIn Badge" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
