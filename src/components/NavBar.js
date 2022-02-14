import '../css/NavBar.css';
import { Twirl as Hamburger } from 'hamburger-react';
import HamburgerMenu from './HamburgerMenu';
import { useState, useEffect } from 'react';
import darkModeToggle from '../functions/darkModeToggle';
import lightModeToggle from '../functions/lightModeToggle';

function NavBar() {

  const [isOpen, setOpen] = useState(false);
  const showMenu = () => setOpen(!isOpen);

  useEffect(() => {
    if (document.getElementsByTagName("h1")[0].style.color === "white") {
      darkModeToggle();
    } else {
      lightModeToggle();
    }
  });

  return (
    <div className="NavBar">
      <h1>Keian's Portfolio</h1>
      <Hamburger toggled={isOpen} toggle={showMenu} />
      <nav className={isOpen ? "ActiveNav" : "Nav"}>
        <HamburgerMenu />
      </nav>
    </div >
  );
}

export default NavBar;
