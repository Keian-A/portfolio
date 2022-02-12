import '../css/Footer.css';
import GitHubLogo from '../images/GitHubSmall.png';

function Footer() {
  return (
    <div className="Footer">
      <div className="GitHubInfo">
        <a className="GitHubIcon" href="https://github.com/Keian-A" target="_blank" >
          <img src={GitHubLogo} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
