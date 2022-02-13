import '../css/NavBar.css';
import { Link } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';

function NavBar() {
  return (
    <div className="NavBar">
      <h1>Keian's Portfolio</h1>
      <Hamburger onToggle={toggled => {
        if (toggled) {
          return (
            <>
            </>
          );
        } else {
          return (
            <>
              {null}
            </>
          );
        }
      }} />
      <Link className="navLink" to="/">Home</Link>
      <Link className="navLink" to="/projects">Projects</Link>
    </div >
  );
}

export default NavBar;
