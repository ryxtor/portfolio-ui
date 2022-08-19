import { useRef } from 'react';
import { useForm } from '@formspree/react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const form = useRef(null);
  const [state, handleSubmit] = useForm('xyyvgnan');
  const customId = 'custom-id-yes';

  if (state.succeeded) {
    form.current.reset();
    toast.success('Thanks for reaching out! I will get back to you as soon as possible.', {
      toastId: customId,
    });
  }

  return (
    <div id="contact">
      <section className="transition duration-500 text-gray-700 body-font relative dark:bg-gray-700 bg-gray-200">
        <div className="container px-5 py-14 mx-auto" data-aos="zoom-in-left" data-aos-easing="ease-out-back" data-aos-duration="1200">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="transition duration-500 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-300 after:bg-purple-700 dark:after:bg-purple-800 after:content-[''] after:block after:h-1 after:my-3 after:mx-auto after:w-32 font-Finger-Paint">
              Contact Me
            </h1>
            <p className="transition duration-500 lg:w-2/3 mx-auto dark:text-gray-300 font-Raleway leading-relaxed text-base">Feel free to drop a line anytime!</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form
              ref={form}
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xyyvgnan"
              method="POST"
              className="flex flex-wrap -m-2"
            >
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="font-Raleway leading-7 text-sm text-gray-600 dark:text-gray-300">
                    Name
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full bg-gray-100 dark:bg-gray-600 dark:border-gray-800 dark:focus:border-purple-800 dark:text-gray-300 rounded border border-gray-300 focus:border-purple-500 text-base outline-none font-Raleway text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </label>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="font-Raleway leading-7 text-sm text-gray-600 dark:text-gray-300">
                    Email
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@email.com"
                      className="w-full font-Raleway bg-gray-100 dark:bg-gray-600 dark:border-gray-800 dark:focus:border-purple-800 dark:text-gray-300 rounded border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </label>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="font-Raleway leading-7 text-sm text-gray-600 dark:text-gray-300">
                    Message
                    <textarea
                      required
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      className="w-full font-Raleway bg-gray-100 dark:bg-gray-600 dark:border-gray-800 dark:focus:border-purple-800 dark:text-gray-300 rounded border border-gray-300 focus:border-purple-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                  </label>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto font-Raleway text-white dark:text-gray-300 dark:hover:bg-purple-700 bg-purple-800 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg transition"
                >
                  Send
                </button>
              </div>
              <div className="p-2 w-full pt-8 text-center flex flex-col items-center gap-6">
                <p className="transition duration-500 font-Raleway dark:text-gray-300">
                  Don&apos;t want to fill out the form? You can reach me directly at
                  {' '}
                  <a href="mailto:lucasbonnefon@outlook.com" className="transition duration-500 text-purple-700 dark:text-purple-500 font-Finger-Paint underline">
                    lucasbonnefon@outlook.com
                  </a>
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
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
