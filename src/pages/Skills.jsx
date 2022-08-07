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
    <div className="transition duration-500 h-auto bg-gray-200 dark:bg-gray-700 py-10 font-Raleway" id="skills">
      <div className="flex flex-col items-center justify-start" data-aos="fade-left">
        <h1 className="transition duration-500 text-3xl font-bold text-center after:bg-purple-700 dark:after:bg-purple-800 after:content-[''] after:block after:h-1 after:my-3 after:mx-auto after:w-32 mb-10 dark:text-gray-300 font-Finger-Paint">Skills</h1>
        <div className="container flex flex-wrap justify-center items-center gap-4 p-4">
          <img src={html} alt="html" title="HTML" height="70px" width="61px" className="h-[70px]" />
          <img src={css} alt="css" title="CSS" height="70px" width="61px" className="h-[70px]" />
          <img src={javascript} alt="js" title="JavaScript" height="70px" width="70px" className="h-[70px]" />
          <img src={react} alt="react" title="React" height="70px" width="70px" className="h-[70px]" />
          <img src={redux} alt="redux" title="Redux" height="70px" width="73px" className="h-[70px]" />
          <img src={ruby} alt="ruby" title="Ruby" height="70px" width="70.27px" className="h-[70px]" />
          <img src={rails} alt="rails" title="Rails" height="70px" width="199.11px" className="h-[70px]" />
          <img src={git} alt="git" title="Git" height="70px" width="70px" className="h-[70px]" />
          <img src={mysql} alt="mysql" title="MySQL" height="70px" width="135px" className="h-[70px]" />
          <img src={postgres} alt="postgres" title="PostgreSQL" height="70px" width="68px" className="h-[70px]" />
          <img src={bootstrap} alt="bootstrap" title="Bootstrap" height="70px" width="88px" className="h-[70px]" />
          <img src={tailwind} alt="tailwind" title="Tailwind" height="70px" width="117px" className="h-[70px]" />
          <img src={sass} alt="sass" title="SASS" height="70px" width="93px" className="h-[70px]" />
          <img src={netlify} alt="netlify" title="Netlify" height="70px" width="70px" className="h-[70px]" />
          <img src={heroku} alt="heroku" title="Heroku" height="70px" width="63px" className="h-[70px]" />
          <img src={webpack} alt="webpack" title="Webpack" height="70px" width="70px" className="h-[70px]" />
          <img src={npm} alt="npm" title="NPM" height="70px" width="70px" className="h-[70px]" />
          <img src={jest} alt="jest" title="Jest" height="70px" width="63.31px" className="h-[70px]" />
          <img src={rspec} alt="rspec" title="RSpec" height="70px" width="70px" className="h-[70px]" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
