import '../css/Projects.css';

function Projects() {
  return (
    <div className="Projects">

      <div className="FirstProject">
        <h2>AnonyMessage</h2>
        <p className="ProjectDescription">This application provides the user a real-time, anonymous chatroom</p>
        <div className="InnerInfo">
          <div className="skillsDeveloped">
            <p id="ptagSkill" className="ptagSkills">Skills developed</p>
            <p className="ptagSkills">Communication</p>
            <p className="ptagSkills">Problem solving</p>
            <p className="ptagSkills">Teamwork</p>
          </div>
          <img src="https://via.placeholder.com/150" alt="project 1 name" />
          <div className="HelpfulLinks">
            <a className="ProjectLink" href="https://github.com/BESH-401" target="_blank" rel="noreferrer" >
              GitHub Repo Link
            </a>
            <a className="ProjectLink" href="https://anony-message.netlify.app/" target="_blank" rel="noreferrer" >
              Deployed Link
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;
