import '../css/Home.css';
import myself from '../images/Myself.png';

function Home() {
  return (
    <div classname="Home">
      <div className="selfInfo">
        <img className="selfImage" src={myself} alt="myself" />
        <p className="selfDescription">Hey everyone! My name is Keian Anthony, and I am a full stack software developer. I have previous experience in customer service, where I learned the importance of meeting the needs of the client. I have always been interested in technology ever since I was 8 years old and received my first laptop for my birthday. Growing up with tech got me interested in the hardware side of tech from a young age and I built my 3rd computer by the time I was 18 years old. Recently I have been in love with the software development side of tech. I am professionally skilled in a plethora of languages & frameworks including JavaScript, React, Node.js, Java, Lua, and more!</p>
      </div>
    </div>
  );
}

export default Home;
