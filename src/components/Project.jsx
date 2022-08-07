import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import HTML from '../images/logos/html.svg';
import CSS from '../images/logos/css.svg';
import JavaScript from '../images/logos/javascript.svg';
import React from '../images/logos/react.svg';
import Redux from '../images/logos/redux.svg';
import Ruby from '../images/logos/ruby.svg';
import Rails from '../images/logos/rails.png';
import Mysql from '../images/logos/mysql.svg';
import PostgreSQL from '../images/logos/postgresql.svg';
import Bootstrap from '../images/logos/bootstrap.svg';
import Tailwind from '../images/logos/tailwind.svg';
import Sass from '../images/logos/sass.svg';
import Netlify from '../images/logos/netlify.svg';
import Heroku from '../images/logos/heroku.svg';
import Webpack from '../images/logos/webpack.svg';
import Npm from '../images/logos/npm.svg';
import Jest from '../images/logos/jest.svg';
import Rspec from '../images/logos/rspec.svg';
import Git from '../images/logos/git.svg';

const Project = ({ project }) => {
  const icons = {
    HTML,
    CSS,
    JavaScript,
    React,
    Redux,
    Ruby,
    Rails,
    Mysql,
    PostgreSQL,
    Bootstrap,
    Tailwind,
    Sass,
    Netlify,
    Heroku,
    Webpack,
    Npm,
    Jest,
    Rspec,
    Git,
  };

  const colors = [
    '#A45EE9',
    '#8B008B',
    '#592693',
    '#2C041D',
    '#4B0076',
    '#D34DD2',
    '#AF69ED',
    '#4CO212',
    '#A50B5E',
    '#873260',
    '#601A3E',
    '#29021A',
    '#4D0F28',
    '#9E7BB3',
    '#957A81',
    '#311465',
    '#9866C7',
    '#BF92E4',
    '#C8A2C9',
    '#B47EE5',
  ];

  useEffect(() => {
    const card = `card-${project.id}`;
    const element = document.getElementById(card);
    // const title = document.getElementById(`title-${project.id}`);
    const ELEMENTS_SPAN = [];

    if (!ELEMENTS_SPAN[0]) { ELEMENTS_SPAN[0] = document.getElementById(`span-${project.id}`); }

    element.addEventListener('mouseover', (e) => {
      ELEMENTS_SPAN[0].style.left = `${e.pageX - element.offsetLeft}px`;
      ELEMENTS_SPAN[0].style.top = `${e.pageY - element.offsetTop}px`;
    });

    element.addEventListener('mouseout', (e) => {
      ELEMENTS_SPAN[0].style.left = `${e.pageX - element.offsetLeft}px`;
      ELEMENTS_SPAN[0].style.top = `${e.pageY - element.offsetTop}px`;
    });
  }, [project]);

  const truncate = (str) => `${str.substring(0, 200)}... `;

  return (
    <div
      className="flex justify-evenly flex-wrap w-auto xl:w-[26%] transition duration-500"
      data-aos="fade-up-left"
      data-aos-easing="ease-out-back"
      data-aos-duration="1200"
    >
      <div
        className="transition duration-500 shadow-xl overflow-hidden rounded-lg w-[300px] m-[10px] dark:bg-gray-700 dark:text-gray-300"
      >
        <div id={`card-${project.id}`} className="HOVER relative inline-block overflow-hidden">
          <span id={`span-${project.id}`} className="absolute block w-0 h-0 rounded-full bg-black opacity-50" />
          <div className="icon-hover flex gap-10 absolute top-[50%] left-[50%] m-0 p-0 opacity-0">
            <a href={project.live_demo} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEye} className="hover:text-purple-800 drop-shadow transition" title="Live Demo" size="2x" color="white" />
            </a>
            <a href={project.github_link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="hover:text-purple-800 drop-shadow transition" title="GitHub Repository" size="2x" color="white" />
            </a>
          </div>
          <div className="skill-hover flex items-center absolute bottom-5 left-10 w-[80%] opacity-0 mx-auto">
            {project.skills.map((skill) => (
              <img key={skill.id} src={icons[skill.name]} alt={skill.name} title={skill.name} className="h-7 drop-shadow w-[100%] object-contain" />
            ))}
          </div>

          <img src={project.image} alt={project.name} className="w-[100%] h-[200px] object-cover" />
        </div>
        <div className="flex flex-col items-start p-[20px] min-h-[250px]">
          <span className="text-white mx-auto mb-4 shadow-md p-2 rounded-[50px] font-Raleway" style={{ background: colors[project.id] }}>{project.name}</span>
          <p className="font-Raleway m-0 text-[0.9rem]">
            { project.description.length > 200
              ? (
                <>
                  {truncate(project.description)}
                  <a href={project.github_link} target="_blank" rel="noreferrer" className="inline underline text-blue-500">Read more</a>
                </>
              )
              : project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    github_link: PropTypes.string.isRequired,
    live_demo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Project;
