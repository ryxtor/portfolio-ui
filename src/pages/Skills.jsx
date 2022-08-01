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

  return (
    <div className="h-auto bg-gray-200 py-10" id="skills">
      <div className="flex flex-col items-center justify-start" data-aos="fade-left">
        <h1 className="text-3xl font-bold text-center heading">Skills</h1>
        <div className="skills container flex flex-wrap justify-center items-center gap-4">
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={javascript} alt="js" />
          <img src={react} alt="react" />
          <img src={redux} alt="redux" />
          <img src={ruby} alt="ruby" />
          <img src={rails} alt="rails" />
          <img src={git} alt="git" />
          <img src={mysql} alt="mysql" />
          <img src={postgres} alt="postgres" />
          <img src={bootstrap} alt="bootstrap" />
          <img src={tailwind} alt="tailwind" />
          <img src={sass} alt="sass" />
          <img src={netlify} alt="netlify" />
          <img src={heroku} alt="heroku" />
          <img src={webpack} alt="webpack" />
          <img src={npm} alt="npm" />
          <img src={jest} alt="jest" />
          <img src={rspec} alt="rspec" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
