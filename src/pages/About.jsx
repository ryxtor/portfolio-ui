/* eslint-disable max-len */
import AOS from 'aos';

const About = () => {
  AOS.init({
    duration: 1500,
    startEvent: 'load',
    delay: 300,
  });

  return (
    <div className=" h-auto bg-gray-200" id="about">
      <div className="flex flex-col items-center justify-start" data-aos="fade-right">
        <h1 className="text-3xl font-bold text-center heading font-Raleway font-Finger-Paint">About</h1>
        <div className="container bg-[#f5f5f5] rounded-2xl p-4 my-6 w-[80%] text-[1rem] md:text-[1.2rem] font-Poppins">
          <p className="text-center w-[80%] my-4 mx-auto">
            Hello, my name is
            {' '}
            <span className="font-Finger-Paint text-[#8424aa]">Lucas</span>
            , I&apos;ve finished
            {' '}
            <span className="font-Finger-Paint text-[#8424aa]">full-stack development</span>
            {' '}
            course at
            Microverse, an online school where I&apos;m not only learning code working on real-world projects but also
            learning how to work in teams from different parts of the world doing pair programming using JavaScript,
            React, Redux, Ruby and Rails, and I&apos;m even a
            {' '}
            <span className="font-Finger-Paint text-[#8424aa]">mentor</span>
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
};

export default About;
