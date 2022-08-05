import { useRef } from 'react';
import { useForm } from '@formspree/react';
import { toast } from 'react-toastify';

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
      <section className="text-gray-700 body-font relative bg-gray-200">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 heading font-Finger-Paint">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto font-Raleway leading-relaxed text-base">Feel free to drop a line anytime!</p>
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
                  <label htmlFor="name" className="font-Raleway leading-7 text-sm text-gray-600">
                    Name
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-purple-500 text-base outline-none font-Raleway text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </label>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="font-Raleway leading-7 text-sm text-gray-600">
                    Email
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@email.com"
                      className="w-full font-Raleway bg-gray-100 rounded border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </label>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="font-Raleway leading-7 text-sm text-gray-600">
                    Message
                    <textarea
                      required
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      className="w-full font-Raleway bg-gray-100 rounded border border-gray-300 focus:border-purple-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                  </label>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto font-Raleway text-white bg-purple-800 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg transition"
                >
                  Send
                </button>
              </div>
              <div className="p-2 w-full pt-8 border-t border-gray-200 text-center">
                <p className="font-Raleway">
                  Don&apos;t want to fill out the form? You can reach me directly at
                  {' '}
                  <a href="mailto:lucasbonnefon@outlook.com" className="text-purple-700 underline">
                    lucasbonnefon@outlook.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
