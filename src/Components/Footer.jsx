import React from "react";
import "../CompStyle/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrivacyModal from "../Modalview/Modalview.jsx"
import {
    faYoutube,
    faGithub,
    faFacebook,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer-container">
              <div className="item1">
                  <PrivacyModal />
              </div>

              <div className="item2">
                  <span style={{ paddingRight: 5 }}>Copyright </span>
                  <FontAwesomeIcon icon={faCopyright} />{" "}
                  <span style={{ paddingLeft: 5 }}>
                      {new Date().getFullYear()} Riju Mondal. All Rights
                      Reserved.
                  </span>
              </div>
              <a
                  href="https://github.com/RomeoIndiaJulietUniform"
                  target="_blank"
                  className="item3"
              >
                  <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                  href="https://www.linkedin.com/in/riju-mondal-137686244"
                  target="_blank"
                  className="item4"
              >
                  <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                  href="https://www.youtube.com/watch?v=OoO5d5P0Jn4&list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV"
                  target="_blank"
                  className="item5"
              >
                  <FontAwesomeIcon icon={faYoutube} />
              </a>

              {false && <PrivacyModal click={true} />}
          </div>
      </footer>
  );
};

export default Footer;