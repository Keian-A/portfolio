import '../css/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <h1>Keian's Portfolio</h1>
      <Link className="navLink" to="/">Home</Link>
      <Link className="navLink" to="/projects">Projects</Link>
    </div >
  );
}

export default NavBar;
