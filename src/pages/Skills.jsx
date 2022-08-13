import AOS from 'aos';
import html from '../images/logos/html.svg';
import css from '../images/logos/css.svg';
import javascript from '../images/logos/javascript.svg';
import react from '../images/logos/react.svg';
import redux from '../images/logos/redux.svg';
import ruby from '../images/logos/ruby.svg';
import rails from '../images/logos/rails.png';
import mysql from '../images/logos/mysql.svg';
import postgres from '../images/logos/postgresql.svg';
import bootstrap from '../images/logos/bootstrap.svg';
import tailwind from '../images/logos/tailwind.svg';
import sass from '../images/logos/sass.svg';
import netlify from '../images/logos/netlify.svg';
import heroku from '../images/logos/heroku.svg';
import webpack from '../images/logos/webpack.svg';
import npm from '../images/logos/npm.svg';
import jest from '../images/logos/jest.svg';
import rspec from '../images/logos/rspec.svg';
import git from '../images/logos/git.svg';

const Skills = () => {
  AOS.init({
    duration: 1500,
    startEvent: 'load',
    delay: 300,
  });

  const skills = [
    {
      name: 'HTML',
      image: html,
      width: '61px',
    },
    {
      name: 'CSS',
      image: css,
      width: '61px',
    },
    {
      name: 'Javascript',
      image: javascript,
      width: '70px',
    },
    {
      name: 'React',
      image: react,
      width: '70px',
    },
    {
      name: 'Redux',
      image: redux,
      width: '73px',
    },
    {
      name: 'Ruby',
      image: ruby,
      width: '70.27px',
    },
    {
      name: 'Rails',
      image: rails,
      width: '199.11px',
    },
    {
      name: 'Git',
      image: git,
      width: '70px',
    },
    {
      name: 'MySQL',
      image: mysql,
      width: '135px',
    },
    {
      name: 'PostgreSQL',
      image: postgres,
      width: '68px',
    },
    {
      name: 'Bootstrap',
      image: bootstrap,
      width: '88px',
    },
    {
      name: 'Tailwind',
      image: tailwind,
      width: '117px',
    },
    {
      name: 'Sass',
      image: sass,
      width: '93px',
    },
    {
      name: 'Netlify',
      image: netlify,
      width: '61px',
    },
    {
      name: 'Heroku',
      image: heroku,
      width: '63px',
    },
    {
      name: 'Webpack',
      image: webpack,
      width: '70px',
    },
    {
      name: 'NPM',
      image: npm,
      width: '70px',
    },
    {
      name: 'Jest',
      image: jest,
      width: '63.31px',
    },
    {
      name: 'RSpec',
      image: rspec,
      width: '70px',
    },
  ];

  return (
    <div className="transition duration-500 h-auto bg-gray-200 dark:bg-gray-700 py-10 font-Raleway" id="skills">
      <div className="flex flex-col items-center justify-start" data-aos="fade-left">
        <h1 className="transition duration-500 text-3xl font-bold text-center after:bg-purple-700 dark:after:bg-purple-800 after:content-[''] after:block after:h-1 after:my-3 after:mx-auto after:w-32 mb-10 dark:text-gray-300 font-Finger-Paint">Skills</h1>
        <div className="container flex flex-wrap justify-center items-center gap-4 p-4">
          {skills.map((skill) => (
            <div className="flex flex-col items-center justify-center gap-3" key={skill.name}>
              <img src={skill.image} alt={skill.name} height="70px" width={skill.width} title={skill.name} className="h-[70px]" />
              <p className="transition duration-500 text-center text-sm font-Raleway font-semibold text-gray-700 dark:text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
