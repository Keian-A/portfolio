import '../css/Projects.css';
import AnonMessage from '../images/AnonMessage.png';
// import CAS from '../images/CAS.png';
import { useEffect } from 'react';
import darkModeToggle from '../functions/darkModeToggle';
import lightModeToggle from '../functions/lightModeToggle';
import projectData from '../data/projectData.js';

function Projects() {

  useEffect(() => {

    // Render test data here
    let parent = document.getElementsByClassName("Projects")[0];
    for (let ii = 0; ii < projectData.length; ii++) {
      let projectDiv = document.createElement("div");
      projectDiv.classList.add("Project");
      let projectTopDiv = document.createElement("div");
      projectTopDiv.classList.add("ProjectTop");
      let ProjectDescriptionH2 = document.createElement("h2");
      ProjectDescriptionH2.classList.add("ProjectDescription");
      ProjectDescriptionH2.innerHTML = projectData[ii].projectTitle;
      let ProjectDescriptionP = document.createElement("p");
      ProjectDescriptionP.classList.add("ProjectDescription");
      ProjectDescriptionP.innerHTML = projectData[ii].projectDesc;
      let InnerInfoDiv = document.createElement("div");
      InnerInfoDiv.classList.add("InnerInfo");
      let SkillsDevelopedDiv = document.createElement("div");
      SkillsDevelopedDiv.classList.add("skillsDeveloped");
      let ptagSkill = document.createElement("p");
      ptagSkill.setAttribute("id", "ptagSkill");
      ptagSkill.classList.add("ptagSkills");
      ptagSkill.innerHTML = "Skills developed:";
      SkillsDevelopedDiv.appendChild(ptagSkill);
      for (let jj = 0; jj < projectData[ii].skills.length; jj++) {
        let skillPTag = document.createElement("p");
        skillPTag.classList.add("ptagSkills");
        skillPTag.innerHTML = projectData[ii].skills[jj];
        SkillsDevelopedDiv.appendChild(skillPTag);
      }
      let projectImage = document.createElement("img");
      projectImage.setAttribute("src", projectData[ii].image);
      projectImage.setAttribute("alt", "Project");
      let HelpfulLinksDiv = document.createElement("div");
      HelpfulLinksDiv.classList.add("HelpfulLinks");
      let LinkDescPTag = document.createElement("p");
      LinkDescPTag.setAttribute("id", "LinkDesc");
      LinkDescPTag.innerHTML = "Links:"
      HelpfulLinksDiv.appendChild(LinkDescPTag);
      for (let jj = 0; jj < projectData[ii].links.length; jj++) {
        let firstPart = projectData[ii].links[jj].split("::::::")[0];
        let secondPart = projectData[ii].links[jj].split("::::::")[1];
        let LinkAnchorTag = document.createElement("a");
        LinkAnchorTag.setAttribute("href", secondPart)
        LinkAnchorTag.setAttribute("rel", "noreferrer");
        LinkAnchorTag.setAttribute("target", "_blank");
        LinkAnchorTag.classList.add("ProjectLink");
        LinkAnchorTag.innerHTML = firstPart;
        HelpfulLinksDiv.appendChild(LinkAnchorTag);
      }
      InnerInfoDiv.appendChild(SkillsDevelopedDiv);
      InnerInfoDiv.appendChild(projectImage);
      InnerInfoDiv.appendChild(HelpfulLinksDiv);
      projectTopDiv.appendChild(ProjectDescriptionH2);
      projectTopDiv.appendChild(ProjectDescriptionP);
      projectDiv.appendChild(projectTopDiv);
      projectDiv.appendChild(InnerInfoDiv);
      parent.appendChild(projectDiv);
    }

    // Change color scheme here
    if (document.getElementsByTagName("h1")[0].style.color === "white") {
      darkModeToggle();
    } else {
      lightModeToggle();
    }
  });

  return (
    <div className="Projects">
      {/* Will dynamically render each project here after initial load through useEffect hook */}
    </div>
  );
}

export default Projects;
