import '../css/Projects.css';
import { useEffect } from 'react';
import darkModeToggle from '../functions/darkModeToggle';
import lightModeToggle from '../functions/lightModeToggle';
import projectData from '../data/projectData.js';
import PaginatedItems from './PaginatedItems.jsx';

function Projects() {

  useEffect(() => {

    // Change color scheme here
    if (document.getElementsByTagName("h1")[0].style.color === "white") {
      darkModeToggle();
    } else {
      lightModeToggle();
    }
  });

  let queriedData = projectData;

  return (
    <div>
      {/* Search component here */}
      <PaginatedItems itemsPerPage={3} itemList={queriedData} />
    </div>
  );
}

export default Projects;
