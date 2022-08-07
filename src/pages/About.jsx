/* eslint-disable max-len */

const About = () => (
  <div className="transition duration-500 h-auto bg-gray-200 dark:bg-gray-700" id="about">
    <div className="flex flex-col items-center justify-start" data-aos="fade-right">
      <h1 className="transition duration-500 text-3xl font-bold text-center after:bg-purple-700 dark:after:bg-purple-800 after:content-[''] after:block after:h-1 after:my-3 after:mx-auto after:w-32 dark:text-gray-300 font-Finger-Paint">About</h1>
      <div className="transition duration-500 container bg-[#f5f5f5] dark:bg-gray-600 dark:text-gray-300 rounded-2xl p-4 my-6 w-[80%] text-[1rem] md:text-[1.2rem] font-Poppins">
        <p className="text-center w-[80%] my-4 mx-auto">
          Hello, my name is
          {' '}
          <span className="transition duration-500 font-Finger-Paint text-[#8424aa] dark:text-purple-800">Lucas</span>
          , I&apos;ve finished
          {' '}
          <span className="transition duration-500 font-Finger-Paint text-[#8424aa] dark:text-purple-800">full-stack development</span>
          {' '}
          course at
          Microverse, an online school where I&apos;m not only learning code working on real-world projects but also
          learning how to work in teams from different parts of the world doing pair programming using JavaScript,
          React, Redux, Ruby and Rails, and I&apos;m even a
          {' '}
          <span className="transition duration-500 font-Finger-Paint text-[#8424aa] dark:text-purple-800">mentor</span>
          {' '}
          there.
        </p>
        <p className="text-center w-[80%] my-4 mx-auto">
          {' '}
          I love solving code algorithms because before I was like a puzzle/strategic gamer, then coding became the
          perfect replacement for that.
        </p>
        <p className="text-center w-[80%] my-4 mx-auto">
          In my free time, I like to watch movies, play video games, and try to improve my piano skills.
        </p>
      </div>
    </div>
  </div>
);

export default About;
