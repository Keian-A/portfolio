import '../css/Projects.css';
import { useEffect } from 'react';
import darkModeToggle from '../functions/darkModeToggle';
import lightModeToggle from '../functions/lightModeToggle';
import projectData from '../data/projectData.js';
import Pagination from './Pagination';

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
      <Pagination data={queriedData} />
    </div>
  );
}

export default Projects;
