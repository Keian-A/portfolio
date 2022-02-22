import '../css/Projects.css';
import { useEffect } from 'react';
import darkModeToggle from '../functions/darkModeToggle';
import lightModeToggle from '../functions/lightModeToggle';
import projectData from '../data/projectData.js';

function Projects() {

  useEffect(() => {

    // Change color scheme here
    if (document.getElementsByTagName("h1")[0].style.color === "white") {
      darkModeToggle();
    } else {
      lightModeToggle();
    }
  });

  {
    for (let ii = 0; ii < projectData.length; ii++) {
      return (
        <div className="Project">
          <div className="ProjectTop">
            <h2 className="ProjectDescription" >{projectData[ii].projectTitle}</h2>
            <p className="ProjectDescription" >{projectData[ii].projectDesc}</p>
          </div>
          <div className="InnerInfo">
            <div className="skillsDeveloped">
              {projectData[ii].skills.map((item) => {
                return <p key={item} className="ptagSkills">{item}</p>
              })}
            </div>
            <img className="ProjectImage" src={projectData[ii].image} alt={`project ${projectData[ii].projectTitle} icon`} />
            <div className="HelpfulLinks">
              <p id="LinkDesc">Links:</p>
              {projectData[ii].links.map((item) => {
                let first = item.split('::::::')[0];
                let second = item.split('::::::')[1];
                return (
                  <a className="ProjectLink" href={second} target="_blank" rel="noreferrer" >
                    {first}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Projects;
