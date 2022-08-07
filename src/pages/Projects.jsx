import { useEffect, useState } from 'react';
import Project from '../components/Project';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('https://portfolio-ryxtor-api.herokuapp.com/v1/projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    })();
  }, []);

  return (
    <div className="transition duration-500 h-auto dark:bg-gray-800" id="projects">
      <h1 className="transition duration-500 text-3xl font-bold text-center mb-8 after:bg-purple-700 dark:after:bg-purple-800 after:content-[''] after:block after:h-1 after:my-3 after:mx-auto after:w-32 dark:text-gray-300 font-Finger-Paint">Projects</h1>
      <div className="flex flex-wrap items-center justify-center">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
