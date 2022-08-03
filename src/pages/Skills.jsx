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
        <h1 className="text-3xl font-bold text-center heading mb-10">Skills</h1>
        <div className="skills container flex flex-wrap justify-center items-center gap-4">
          <img src={html} alt="html" title="HTML" />
          <img src={css} alt="css" title="CSS" />
          <img src={javascript} alt="js" title="JavaScript" />
          <img src={react} alt="react" title="React" />
          <img src={redux} alt="redux" title="Redux" />
          <img src={ruby} alt="ruby" title="Ruby" />
          <img src={rails} alt="rails" title="Rails" />
          <img src={git} alt="git" title="Git" />
          <img src={mysql} alt="mysql" title="MySQL" />
          <img src={postgres} alt="postgres" title="PostgreSQL" />
          <img src={bootstrap} alt="bootstrap" title="Bootstrap" />
          <img src={tailwind} alt="tailwind" title="Tailwind" />
          <img src={sass} alt="sass" title="SASS" />
          <img src={netlify} alt="netlify" title="Netlify" />
          <img src={heroku} alt="heroku" title="Heroku" />
          <img src={webpack} alt="webpack" title="Webpack" />
          <img src={npm} alt="npm" title="NPM" />
          <img src={jest} alt="jest" title="Jest" />
          <img src={rspec} alt="rspec" title="RSpec" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
