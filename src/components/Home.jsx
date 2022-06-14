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
            <h2>About me</h2>
            <p className="paragraph">Hey all! My name is Keian Anthony, and I am a full stack software developer. I have always been interested in technology ever since I was 8 years old and received my first laptop for my birthday. Recently I have been in love with the software development side of tech. I am professionally skilled in a plethora of languages & frameworks including JavaScript, React, Node.js, Java, Lua, and more.</p>
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
