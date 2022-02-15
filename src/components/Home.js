import '../css/Home.css';
import myself from '../images/Myself.png';
import { useEffect } from 'react';
import darkModeToggle from '../functions/darkModeToggle';
import lightModeToggle from '../functions/lightModeToggle';

function Home() {

  useEffect(() => {
    if (document.getElementsByTagName("h1")[0].style.color === "white") {
      darkModeToggle();
    } else {
      lightModeToggle();
    }
  });

  return (
    <div className="Home">
      <div className="selfDescription">
        <img className="selfImage" src={myself} alt="myself" />
        <div className="infoDesc">
          <h2>About me</h2>
          <p>Hey all! My name is Keian Anthony, and I am a full stack software developer. I have previous experience in customer service, where I learned the importance of meeting the needs of the client. I have always been interested in technology ever since I was 8 years old and received my first laptop for my birthday. Growing up with tech got me interested in the hardware side of tech from a young age and I built my 3rd computer by the time I was 18 years old. Recently I have been in love with the software development side of tech. I am professionally skilled in a plethora of languages & frameworks including JavaScript, React, Node.js, Java, Lua, and more!</p>
        </div>
      </div>
      <div className="pageDescription">
        <h2>Application Purpose</h2>
        <p>This page is my current portfolio where you can select the hamburger icon in the top right to navigate to my projects page to view all my projects. There you can search for keywords to find technologies or languages I have made applications with before.</p>
      </div>
    </div>
  );
}

export default Home;
