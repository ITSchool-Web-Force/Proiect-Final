import React from "react";

import { contact } from "../data/contact.js";

const Contact = () => {
  const ref = React.useRef();

  function reset(ev) {
    ev.preventDefault();
    ref.current.reset();
  }

  return (
    <>
      <div className="container-testimonials max-w-[1240px]" id="contact">
        <p className="text-xl tracking-widest uppercase text-[#86198f] bg-white dark:bg-gray-900">
          Contact
        </p>
        <h2 className="py-4 sm:text-4xl bg-white dark:bg-gray-900 dark:text-white">
          Let&apos;s connect
        </h2>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/* info */}
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-[#5f48c5] rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1 dark:text-white">
                      {title}
                    </h4>
                    <p className="mb-1 dark:text-white">{subtitle}</p>
                    <p className="text-[#5f48c5] font-semibold">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* form */}
          <form
            ref={ref}
            method="POST"
            action="https://getform.io/f/48da4e5d-722d-420e-a158-340e63225788"
            className="flex flex-col w-full max-w-[600px]"
          >
            <div className="flex gap-2">
              <input
                className="placeholder-gray-500 p-3 m-2 w-full rounded-lg 
                border-2 border-violet-400 bg-violet-100"
                type="text"
                placeholder="Your name"
                name="name"
              />
              <input
                className="placeholder-gray-500 p-3 m-2 w-full rounded-lg 
                border-2 border-violet-400 bg-violet-100"
                placeholder="Your email"
                type="email"
                name="email"
              />
            </div>
            <input
              className="placeholder-gray-500 p-3 m-2 rounded-lg 
                border-2 border-violet-400 bg-violet-100"
              placeholder="subject"
              type="text"
              name="subject"
            />
            <textarea
              className="placeholder-gray-500 p-3 m-2 rounded-lg 
              border-2 border-violet-400 bg-violet-100 resize-none"
              placeholder="Your message"
              name="message"
            ></textarea>
            <div className="grid grid-cols-4 gap-4 content-between">
              <button
                className="text-[#808080] rounded-lg 
              border-2 bg-violet-100 px-4 hover:bg-[#86198f] hover:text-white hover:bg-gradient-to-r from-[#a467b3] to-[#5a82ba] py-3 my-8 mx-auto flex items-center"
              >
                Send message
              </button>
              <button
                className="text-[#808080] rounded-lg  border-2 bg-violet-100 px-4 hover:bg-[#ff0000] hover:text-white py-3 my-8 mx-auto flex items-center"
                onClick={reset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
