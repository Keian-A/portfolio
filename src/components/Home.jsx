import '../css/Home.css';
import myself from '../images/home-images/Myself.png';
import Messages from './Messages.jsx';

function Home() {

  return (
    <div className="Home">
      <div className="selfDescription">
        <img className="selfImage" src={myself} alt="myself" />
        <div className="infoDesc">
          <div className="aboutMe">
            <h2>&lt;AboutMe&gt;</h2>
            <p className="paragraph">Graduate of software engineering. Experience with JavaScript, React.js, Node.js, HTML5, CSS3, python, Django. Currently learning C#, .NET, and Java.</p>
            <h2>&lt;/AboutMe&gt;</h2>
          </div>
          <div className="purpose">
            <h2>Application Purpose</h2>
            <p className="paragraph" >This page is my current portfolio where you can select the hamburger icon in the top right to navigate to my projects page to view all my projects. There you can search for keywords to find technologies or languages I have made applications with before.</p>
          </div>
          <Messages />
        </div>
      </div>
    </div>
  );
}

export default Home;
