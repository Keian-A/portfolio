import '../css/Projects.css';
import AnonMessage from '../images/AnonMessage.png';
import CAS from '../images/CAS.png';
import { useEffect } from 'react';
import darkModeToggle from '../functions/darkModeToggle';
import lightModeToggle from '../functions/lightModeToggle';

function Projects() {

  useEffect(() => {
    if (document.getElementsByTagName("h1")[0].style.color === "white") {
      darkModeToggle();
    } else {
      lightModeToggle();
    }
  });

  return (
    <div className="Projects">

      <div className="Project">
        <h2>AnonyMessage</h2>
        <p className="ProjectDescription">This application provides the user a real-time, anonymous chatroom</p>
        <h4>Primary Technologies Used</h4>
        <p>Socket.io & React</p>
        <div className="InnerInfo">
          <div className="skillsDeveloped">
            <p id="ptagSkill" className="ptagSkills">Skills developed</p>
            <p className="ptagSkills">Communication</p>
            <p className="ptagSkills">Problem solving</p>
            <p className="ptagSkills">Teamwork</p>
          </div>
          <img className="ProjectImage" src={AnonMessage} alt="project 1 name" />
          <div className="HelpfulLinks">
            <a className="ProjectLink" href="https://github.com/BESH-401/anonymessage-frontend" target="_blank" rel="noreferrer" >
              Front-End GitHub Repo
            </a>
            <a className="ProjectLink" href="https://github.com/BESH-401/anonymessage-backend" target="_blank" rel="noreferrer" >
              Back-End GitHub Repo
            </a>
            <a className="ProjectLink" href="https://anony-message.netlify.app/" target="_blank" rel="noreferrer" >
              Deployed Site
            </a>
          </div>
        </div>
      </div>

      <div className="Project">
        <h2>Code Against Sanity</h2>
        <p className="ProjectDescription">This application is our rendition of Cards Against Humanity</p>
        <h4>Primary Technologies Used</h4>
        <p>Socket.io & ReadLine</p>
        <div className="InnerInfo">
          <div className="skillsDeveloped">
            <p id="ptagSkill" className="ptagSkills">Skills developed</p>
            <p className="ptagSkills">Communication</p>
            <p className="ptagSkills">Problem solving</p>
            <p className="ptagSkills">Teamwork</p>
          </div>
          <img className="ProjectImage" src={CAS} alt="project 1 name" />
          <div className="HelpfulLinks">
            <a className="ProjectLink" href="https://github.com/BESH-401" target="_blank" rel="noreferrer" >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;
