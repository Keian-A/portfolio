import '../css/RenderProjects.css';
import { useEffect } from 'react';
import lightModeToggle from '../functions/lightModeToggle.js';
import darkModeToggle from '../functions/darkModeToggle.js';

function RenderProjects(props) {

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
                <div className="ProjectTop">
                    <h2 className="ProjectDescription" >{props.data.projectTitle}</h2>
                    <p className="ProjectDescription" >{props.data.projectDesc}</p>
                </div>
                <div className="InnerInfo">
                    <div className="skillsDeveloped">
                        {props.data.skills.map((item, idx) => {
                            return <p key={idx} className="ptagSkills">{item}</p>
                        })}
                    </div>
                    <img className="ProjectImage" src={props.data.image} alt={`project ${props.data.projectTitle} icon`} />
                    <div className="HelpfulLinks">
                        <p id="LinkDesc">Links:</p>
                        {props.data.links.map((item, idx) => {
                            let first = item.split('::::::')[0];
                            let second = item.split('::::::')[1];
                            return (
                                <a key={idx} className="ProjectLink" href={second} target="_blank" rel="noreferrer" >
                                    {first}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RenderProjects;
