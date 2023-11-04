import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
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
    const ELEMENTS_SPAN = [];

    if (!ELEMENTS_SPAN[0]) {
      ELEMENTS_SPAN[0] = document.getElementById(`span-${project.id}`);
    }

    element.addEventListener('mouseover', (e) => {
      ELEMENTS_SPAN[0].style.left = `${e.pageX - element.offsetLeft}px`;
      ELEMENTS_SPAN[0].style.top = `${e.pageY - element.offsetTop}px`;
    });

    element.addEventListener('mouseout', (e) => {
      ELEMENTS_SPAN[0].style.left = `${e.pageX - element.offsetLeft}px`;
      ELEMENTS_SPAN[0].style.top = `${e.pageY - element.offsetTop}px`;
    });
  }, [project]);

  const truncate = (str) => `${str.substring(0, 150)}... `;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div
      className="flex select-none justify-center flex-wrap w-auto xl:w-[26%] transition duration-500"
      data-aos="fade-up-left"
      data-aos-easing="ease-out-back"
      data-aos-duration="1200"
    >
      <div className="transition duration-500 shadow-xl overflow-hidden rounded-lg w-[300px] m-[10px] bg-gray-100 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
        <div
          id={`card-${project.id}`}
          className="HOVER relative inline-block overflow-hidden"
        >
          <span
            id={`span-${project.id}`}
            className="absolute block w-0 h-0 rounded-full bg-black opacity-50"
          />
          <div className="icon-hover flex gap-10 absolute top-[50%] left-[50%] m-0 p-0 opacity-0">
            <a href={project.live_demo} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faEye}
                className={`${project.live_demo ? 'hover:text-purple-800' : ''} drop-shadow transition`}
                title="Live Demo"
                size="2x"
                color="white"
              />
            </a>
            <a href={project.github_link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className={`${project.github_link ? 'hover:text-purple-800' : ''} drop-shadow transition`}
                title="GitHub Repository"
                size="2x"
                color="white"
              />
            </a>
          </div>
          <div className="skill-hover flex items-center absolute bottom-5 w-[100%] opacity-0 mx-auto">
            {project.skills.map((skill) => (
              <img
                key={skill.id}
                src={icons[skill.name]}
                alt={skill.name}
                title={skill.name}
                className="h-7 drop-shadow w-[100%] object-contain"
              />
            ))}
          </div>

          <img
            src={project.image}
            alt={project.name}
            className="w-[100%] h-[200px] object-cover"
          />
        </div>
        <div className="flex flex-col items-start p-[20px] min-h-[200px]">
          <span
            className="text-gray-200 mx-auto mb-4 shadow-md p-2 rounded-[50px] font-Raleway"
            style={{ background: colors[project.id] }}
          >
            {project.name}
          </span>
          <p className="font-Raleway m-0 text-[0.9rem]">
            {project.description.length > 150
              ? truncate(project.description)
              : project.description}
          </p>
        </div>
        <div className="flex justify-center gap-5 mb-3">
          <button
            type="button"
            onClick={openModal}
            className="transition border border-purple-700 w-[85px] shadow-md bg-purple-800 hover:bg-purple-600 dark:hover:bg-purple-700 text-gray-200 font-Raleway font-bold py-2 px-4 rounded-lg"
          >
            Details
          </button>
          {project.github_link ? (
            <a
              className="transition border border-purple-700 w-[85px] shadow-md bg-purple-800 hover:bg-purple-600 dark:hover:bg-purple-700 text-gray-200 font-Raleway font-bold py-2 px-4 rounded-lg"
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          ) : (
            <button
              type="button"
              className="transition border border-gray-500 w-[85px] shadow-md bg-gray-500 text-gray-200 font-Raleway font-bold py-2 px-4 rounded-lg"
              disabled
            >
              Source
            </button>
          )}
        </div>
      </div>
      <Modal
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 100,
          },
          content: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="w-[80%] md:w-[90%] bg-gray-200 dark:bg-gray-700 dark:border-gray-600 border h-auto max-h-[90%] min-h-fit rounded-lg shadow m-auto"
      >
        <div className="flex flex-col items-start h-[100%]">
          <div className="md:flex">
            <img
              src={project.image}
              alt={project.name}
              className="w-[100%] md:w-[50%] lg:w-[60%] xl:w-[70%] h-[250px] object-cover md:object-contain md:h-auto self-center"
            />
            <div className="flex h-[100%] w-[100%] items-center flex-col">
              <div className="flex flex-col items-center">
                <h3 className="font-Finger-Paint text-purple-600 drop-shadow-lg text-xl py-3">
                  {project.name}
                </h3>
                <p className="font-Raleway dark:text-gray-300 self-center mx-3 text-[0.9rem] text-center">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-[100%] md:dark:bg-gray-800 md:bg-gray-300 ">
            <div className="flex items-center justify-around w-[100%] lg:w-[60%] xl:w-[70%] py-3">
              {project.skills.map((skill) => (
                <div
                  className="group flex flex-col flex-grow w-[33%] items-center justify-center gap-3 "
                  key={skill.name}
                >
                  <img
                    key={skill.id}
                    src={icons[skill.name]}
                    alt={skill.name}
                    title={skill.name}
                    className="h-7 drop-shadow w-[100%] object-contain"
                  />
                  <p className="transition duration-300 group-hover:text-purple-700 text-center text-sm font-Raleway font-semibold text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex mt-3 justify-around mb-3 w-[100%] lg:w-[40%] xl:w-[30%]">
              {project.live_demo ? (
                <a
                  className="transition bg-purple-800 hover:bg-purple-900 text-gray-200 font-Raleway font-bold py-2 px-4 rounded-lg w-[112px]"
                  href={project.live_demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              ) : (
                <button
                  type="button"
                  className="transition bg-gray-500 text-gray-200 font-Raleway font-bold py-2 px-4 rounded-lg w-[112px]"
                  disabled
                >
                  Live Demo
                </button>
              )}
              {project.github_link ? (
                <a
                  className="transition border border-purple-700 w-[85px] shadow-md bg-purple-800 hover:bg-purple-600 dark:hover:bg-purple-700 text-gray-200 font-Raleway font-bold py-2 px-4 rounded-lg"
                  href={project.github_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
              ) : (
                <button
                  type="button"
                  className="transition border border-gray-500 w-[85px] shadow-md bg-gray-500 text-gray-200 font-Raleway font-bold py-2 px-4 rounded-lg"
                  disabled
                >
                  Source
                </button>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-[255px] md:top-0 right-0 transition ease-out duration-300 bg-gray-200 bg-opacity-0 md:hover:bg-gray-300 dark:md:hover:bg-gray-800 text-purple-700 drop-shadow font-Finger-Paint font-bold py-2 px-4 rounded-lg"
          >
            X
          </button>
        </div>
      </Modal>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    github_link: PropTypes.string,
    live_demo: PropTypes.string,
    image: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Project;
