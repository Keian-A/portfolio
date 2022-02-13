import '../css/NavBar.css';
import { Twirl as Hamburger } from 'hamburger-react';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';

function NavBar() {

  const [isOpen, setOpen] = useState(false);

  const showMenu = () => setOpen(!isOpen);

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
