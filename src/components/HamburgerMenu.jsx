import '../css/HamburgerMenu.css';
import { Link } from 'react-router-dom';

function HamburgerMenu() {

  return (
    <div className="HamburgerMenu">
      <Link id="FirstNavLink" className="navLink" to="/">Home</Link>
      <Link className="navLink" to="/projects">Projects</Link>
      {/* <button className="dark" onClick={darkModeToggle} >Dark Mode</button> */}
      {/* <button className="light" onClick={lightModeToggle} >Light Mode</button> */}
    </div>
  );
}

export default HamburgerMenu;
