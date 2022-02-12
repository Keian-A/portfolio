import '../css/Footer.css';
import GitHubLogo from '../images/GitHubSmall.png';
import LinkedInLogo from '../images/LinkedInSmall.png';
import FacebookIcon from '../images/FacebookSmall.png';

function Footer() {
  return (
    <div className="Footer">
      <div className="GitHubInfo">
        <a className="GitHubIcon" href="https://github.com/Keian-A" target="_blank" rel="noreferrer" >
          <img src={GitHubLogo} alt="GitHub Icon" />
        </a>
      </div>
      <div className="LinkedInInfo">
        <a className="LinkedInIcon" href="https://www.linkedin.com/in/keiananthony/" target="_blank" rel="noreferrer" >
          <img src={LinkedInLogo} alt="LinkedIn Icon" />
        </a>
      </div>
      <div className="FacebookInfo">
        <a className="FacebookIcon" href="https://www.facebook.com/Keian.Anthony.1/" target="_blank" rel="noreferrer" >
          <img src={FacebookIcon} alt="Facebook Icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
