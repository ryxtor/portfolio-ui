import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Typed from 'react-typed';
import AOS from 'aos';
import me from '../images/me.webp';

const Showcase = () => {
  AOS.init({
    duration: 1500,
    startEvent: 'load',
    delay: 300,
  });

  return (
    <div className="bg-gray-100 dark:bg-gray-800 transition duration-500">
      <div id="home" className="flex flex-col md:flex-row justify-center md:justify-around gap-y-10 items-center md:h-[95vh]">
        <div data-aos="zoom-in" className="w-100 order-last md:order-first">
          <h1 className="transition duration-500 text-3xl text-center md:text-left text-gray-500 dark:text-gray-300 mb-4 font-Raleway">Hello! my name is</h1>
          <h2 className="mb-4 text-center md:text-left text-5xl text-gray-500 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-700 transition-colors duration-500 font-Finger-Paint">Lucas Bonnefon</h2>
          <p className="text-center md:text-left text-purple-700 dark:text-purple-600 text-2xl font-Raleway mb-6">
            <Typed
              strings={['I\'m a Full-Stack developer', 'I\'m a Front-end developer', 'I\'m a Back-end developer', 'I\'m a web developer']}
              typeSpeed={80}
              backSpeed={80}
              loop
            />
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <a href="mailto:lucasbonnefon@outlook.com" target="_blank" rel="noreferrer" className="mr-6">
              <FontAwesomeIcon icon={faEnvelope} size="2x" title="Email" className=" hover:text-purple-800 text-gray-600 dark:text-gray-300 dark:hover:text-purple-800 transition duration-300 drop-shadow" />
            </a>
            <a href="https://github.com/ryxtor" target="_blank" rel="noreferrer" className="mr-6">
              <FontAwesomeIcon icon={faGithub} size="2x" title="GitHub" className="hover:text-purple-800 text-gray-600 dark:text-gray-300 dark:hover:text-purple-800 transition duration-300 drop-shadow" />
            </a>
            <a href="https://www.linkedin.com/in/lucasbonnefon/" target="_blank" rel="noreferrer" className="mr-6">
              <FontAwesomeIcon icon={faLinkedin} size="2x" title="LinkedIn" className="hover:text-purple-800 text-gray-600 dark:text-gray-300 dark:hover:text-purple-800 transition duration-300 drop-shadow" />
            </a>
            <a href="https://twitter.com/Ryxtor" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" title="Twitter" className="hover:text-purple-800 text-gray-600 dark:text-gray-300 dark:hover:text-purple-800 transition duration-300 drop-shadow" />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="1500" className="mx-4 mt-20 md:mt-0 w-60 md:w-80">
          <img src={me} alt="me" width="320px" height="426.66px" className="rounded-tl-[250px] rounded-tr-[200px] rounded-br-[550px] rounded-bl-[300px]" />
        </div>
      </div>
      <div className="flex justify-center mt-10 md:mt-0">
        <a href="#about">
          <FontAwesomeIcon icon={faAngleDown} size="2x" title="Scroll down" className="bounce text-gray-600 dark:text-gray-300 hover:text-purple-800 dark:hover:text-purple-800 transition duration-300 drop-shadow" />
        </a>
      </div>
    </div>
  );
};

export default Showcase;
