import '../css/HamburgerMenu.css';
import { Link } from 'react-router-dom';
import GitHubLogo from '../images/hamburger-images/GitHubSmall.png';
import LinkedInLogo from '../images/hamburger-images/LinkedInSmall.png';
import FacebookIcon from '../images/hamburger-images/FacebookSmall.png';

function HamburgerMenu() {

  return (
    <div className="HamburgerMenu">
      <Link id="FirstNavLink" className="navLink" to="/">Home</Link>
      <Link className="navLink" to="/projects">Projects</Link>
      <a className="LinkedIcon" href="https://github.com/Keian-A" target="_blank" rel="noreferrer" >
        <img src={GitHubLogo} alt="GitHub Icon" />
      </a>
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
      {/* <button className="dark" onClick={darkModeToggle} >Dark Mode</button> */}
      {/* <button className="light" onClick={lightModeToggle} >Light Mode</button> */}
    </div>
  );
}

export default HamburgerMenu;
