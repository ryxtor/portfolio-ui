/* eslint-disable max-len */

const About = () => (
  <div className="transition duration-500 h-auto bg-gray-200 dark:bg-gray-700" id="about">
    <div className="flex flex-col items-center justify-start" data-aos="fade-right">
      <h1 className="transition duration-500 text-3xl font-bold text-center after:bg-purple-700 dark:after:bg-purple-800 after:content-[''] after:block after:h-1 after:my-3 after:mx-auto after:w-32 dark:text-gray-300 font-Finger-Paint">About</h1>
      <div className="transition duration-500 container bg-[#f5f5f5] dark:bg-gray-600 dark:text-gray-300 rounded-2xl p-4 my-6 w-[80%] text-[1rem] md:text-[1.3rem] font-Raleway">
        <p className="text-center w-[80%] my-4 mx-auto">
          Hello, my name is
          {' '}
          <span className="transition duration-500 font-Finger-Paint text-[#8424aa] dark:text-purple-800">Lucas</span>
          , I&apos;m a certified
          {' '}
          <span className="transition duration-500 font-Finger-Paint text-[#8424aa] dark:text-purple-800">full-stack web developer</span>
          {'. '}
          I have worked on several projects using
          {' '}
          <span className="transition duration-500 font-Finger-Paint text-[#8424aa] dark:text-purple-800">JavaScript</span>
          {', '}
          <span className="transition duration-500 font-Finger-Paint text-[#8424aa] dark:text-purple-800">React</span>
          {', '}
          <span className="transition duration-500 font-Finger-Paint text-[#8424aa] dark:text-purple-800">Redux</span>
          {', '}
          <span className="transition duration-500 font-Finger-Paint text-[#8424aa] dark:text-purple-800">Ruby</span>
          {' and '}
          <span className="transition duration-500 font-Finger-Paint text-[#8424aa] dark:text-purple-800">Ruby on Rails</span>
          {', '}
          most of them in teams doing pair programming with other developers from different parts of the world.
        </p>
        <p className="text-center w-[80%] my-4 mx-auto">
          {' '}
          I love solving code algorithms because before I was like a puzzle/strategic gamer, then coding became the
          perfect replacement for that.
        </p>
        <p className="text-center w-[80%] my-4 mx-auto">
          In my free time, I like to watch movies, solve coding challenges, and try to improve my piano skills.
        </p>
        <p className="text-center w-[80%] my-4 mx-auto">
          Below you can see my skills and some of the projects I&apos;ve worked on.
        </p>
      </div>
    </div>
  </div>
);

export default About;
