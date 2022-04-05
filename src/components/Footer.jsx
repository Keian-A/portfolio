import '../css/Footer.css';
import GitHubLogo from '../images/footer-images/GitHubSmall.png';
import LinkedInLogo from '../images/footer-images/LinkedInSmall.png';
import FacebookIcon from '../images/footer-images/FacebookSmall.png';
import { useEffect } from 'react';
import darkModeToggle from '../functions/darkModeToggle';
import lightModeToggle from '../functions/lightModeToggle';

function Footer() {

  useEffect(() => {
    if (document.getElementsByTagName("h1")[0].style.color === "white") {
      darkModeToggle();
    } else {
      lightModeToggle();
    }
  });

  return (
    <div className="Footer">
      <div className="InfoIcon">
        <a className="LinkedIcon" href="https://github.com/Keian-A" target="_blank" rel="noreferrer" >
          <img src={GitHubLogo} alt="GitHub Icon" />
        </a>
      </div>
      <div className="InfoIcon">
        <a className="LinkedIcon" href="https://www.linkedin.com/in/keiananthony/" target="_blank" rel="noreferrer" >
          <img src={LinkedInLogo} alt="LinkedIn Icon" />
        </a>
      </div>
      <div className="InfoIcon">
        <a className="LinkedIcon" href="https://www.facebook.com/Keian.Anthony.1/" target="_blank" rel="noreferrer" >
          <img src={FacebookIcon} alt="Facebook Icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
