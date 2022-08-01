import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Typed from 'react-typed';
import AOS from 'aos';

const Showcase = () => {
  AOS.init({
    duration: 1500,
    startEvent: 'load',
    delay: 300,
  });

  return (
    <div id="home" className="flex flex-col md:flex-row justify-around h-screen items-center">
      <div data-aos="zoom-in" className="w-80">
        <h1 className="text-3xl text-center text-gray-500 mb-4">Hello! my name is</h1>
        <h2 className="mb-4 text-center text-5xl text-gray-500">Lucas Bonnefon</h2>
        <p className="text-center text-purple-700 text-2xl font-sans mb-6">
          <Typed
            strings={['I\'m a Full-Stack developer', 'I\'m a web designer', 'I\'m a web developer']}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </p>
        <div className="flex items-center justify-center">
          <a href="mailto:lucasbonnefon@outlook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="mr-6 hover:text-purple-800 text-gray-600 transition duration-300 drop-shadow" />
          </a>
          <a href="https://github.com/ryxtor" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="mr-6 hover:text-purple-800 text-gray-600 transition duration-300 drop-shadow" />
          </a>
          <a href="https://www.linkedin.com/in/lucasbonnefon/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="mr-6 hover:text-purple-800 text-gray-600 transition duration-300 drop-shadow" />
          </a>
          <a href="https://twitter.com/Ryxtor" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="hover:text-purple-800 text-gray-600 transition duration-300 drop-shadow" />
          </a>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-delay="1500">
        <img src="https://i.imgur.com/XqQXQZb.jpg" alt="me" />
      </div>
    </div>
  );
};

export default Showcase;
