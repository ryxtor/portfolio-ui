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
  return (
    <div className="containers">
      <div className="card">
        <div id={`card-${project.id}`} className="card-header HOVER relative">
          <span id={`span-${project.id}`} />
          <div className="icon-hover flex gap-10">
            <a href={project.live_demo} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEye} className="card-icon" size="2x" color="white" />
            </a>
            <a href={project.github_link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="card-icon" size="2x" color="white" />
            </a>
          </div>
          <div>
            {project.skills.map((skill) => (
              <img key={skill.id} src={icons[skill.name]} alt={skill.name} />
            ))}
          </div>

          <img src={project.image} alt={project.name} />
        </div>
        <div className="card-body">
          <span className="tag tag-teal mx-auto mb-4">{project.name}</span>
          <p>
            {project.description}
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
