import '../css/RenderProjects.css';

function Items(props) {

    if (props.data !== null) {
        return (
            <>
                {
                    props.data.map((item, idx) => {
                        if (item !== null) {
                            return (
                                <div className="Projects" key={idx}>
                                    <div className="Project">
                                        <div className="ProjectTop">
                                            <h2 className="ProjectDescription" >{item.projectTitle}</h2>
                                            <p className="ProjectDescription" >{item.projectDesc}</p>
                                        </div>
                                        <div className="InnerInfo">
                                            <div className="skillsDeveloped">
                                                <p id="ptagSkill" className="ptagSkills">Skills developed:</p>
                                                {item.skills.map((item, idx) => {
                                                    return <p key={idx} className="ptagSkills">{item}</p>
                                                })}
                                            </div>
                                            <img className="ProjectImage" src={item.image} alt={`project ${item.projectTitle} icon`} />
                                            <div className="HelpfulLinks">
                                                <p id="LinkDesc">Links:</p>
                                                {item.links.map((item, idx) => {
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
                        } else {
                            return (
                                <>
                                </>
                            );
                        }
                    })
                }
            </>
        );
    } else {
        return (
            <>
            </>
        );
    }
}

export default Items;
