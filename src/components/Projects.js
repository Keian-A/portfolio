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
    return (
      <div className="Projects">

        {projectData.map((individualProject) => {
          return (

            <div className="Project">
              <div className="ProjectTop">
                <h2 className="ProjectDescription" >{individualProject.projectTitle}</h2>
                <p className="ProjectDescription" >{individualProject.projectDesc}</p>
              </div>
              <div className="InnerInfo">
                <div className="skillsDeveloped">
                  {individualProject.skills.map((item) => {
                    return <p key={item} className="ptagSkills">{item}</p>
                  })}
                </div>
                <img className="ProjectImage" src={individualProject.image} alt={`project ${individualProject.projectTitle} icon`} />
                <div className="HelpfulLinks">
                  <p id="LinkDesc">Links:</p>
                  {individualProject.links.map((item) => {
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
        })};
      </div>
    );
  }
}

export default Projects;
