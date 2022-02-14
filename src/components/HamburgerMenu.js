import '../css/HamburgerMenu.css';
import { Link } from 'react-router-dom';
import lightModeToggle from '../functions/lightModeToggle.js';
import darkModeToggle from '../functions/darkModeToggle';
import { useEffect } from 'react';

function HamburgerMenu() {

  useEffect(() => {
    if (document.getElementsByTagName("h1")[0].style.color === "white") {
      darkModeToggle();
    } else {
      lightModeToggle();
    }
  });

  return (
    <div className="HamburgerMenu">
      <Link id="FirstNavLink" className="navLink" to="/">Home</Link>
      <Link className="navLink" to="/projects">Projects</Link>
      <button className="dark" onClick={darkModeToggle} >Dark Mode</button>
      <button className="light" onClick={lightModeToggle} >Light Mode</button>
    </div>
  );
}

export default HamburgerMenu;
