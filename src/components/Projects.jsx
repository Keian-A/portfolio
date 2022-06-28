import '../css/Projects.css';
import { useState } from 'react';
import projectData from '../data/projectData.js';
import PaginatedItems from './PaginatedItems.jsx';
import Search from './Search.jsx';

function Projects() {

  const [data, setData] = useState(projectData);

  const setQuerySearch = (queryStr) => {
    let result = projectData.map(project => {
      return project.techUsed.includes(queryStr) ? project : null;
    });
    setData(result);
  }

  return (
    <div>
      <Search setQuerySearch={setQuerySearch} />
      <PaginatedItems itemsPerPage={3} itemList={data} />
    </div>
  );
}

export default Projects;
