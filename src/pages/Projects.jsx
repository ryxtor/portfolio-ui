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
    <div className="h-auto" id="projects">
      <h1 className="text-3xl font-bold text-center mb-8 heading font-Raleway">Projects</h1>
      <div className="flex flex-wrap items-center justify-center">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
