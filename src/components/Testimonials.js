import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="container-testimonials max-w-[1240px]" id="testimonials">
        <p className="text-xl tracking-widest uppercase text-[#86198f] bg-white dark:bg-gray-900">
          Testimonials
        </p>
        <h2 className="py-4 sm:text-4xl bg-white dark:bg-gray-900 dark:text-white">
          What other people say
        </h2>

        <div className="grid gap-12 text-center md:grid-cols-2">
          {/*First Testimonial*/}
          <div className="mb-6 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src="https://i.postimg.cc/cCqByhWn/1542797895328.jpg"
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <p className="my-4 text-xl text-neutral-500 dark:text-neutral-300">
              "I got the chance to witness Octavian&apos;s exceptional
              proficiency in JavaScript and CSS, where he always went the extra
              mile to offer alternative solutions, or a different perspective.
              He was never content with simply meeting the minimum requirements,
              always doing his best to exceed them. Octavian is a highly
              motivated person with a strong work ethic and a true passion for
              front-end development; and even back-end. He would be a powerhouse
              of an addition to any team looking for a skilled front-end
              developer."
            </p>
            <p className="italic dark:text-[#86198f]">
              - Alex Silviu Scripcariuc
            </p>
            <p className="dark:text-[#86198f]">
              &#40;UX Designer with a passion for neuroscience and design
              psychology &#41;
            </p>
          </div>
          {/*Second Testimonial*/}
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src="https://i.postimg.cc/cCMwqNTp/1678394825898.jpg"
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <p className="my-4 text-xl text-neutral-500 dark:text-neutral-300">
              "It&apos;s a pleasure having Octavian as a colleague at IT School,
              he&apos;s so passionate about web development, eager to learn new
              things, putting effort and discipline in studying every day. This
              perseverence and curiosity for web development and the latest
              technologies will take him very far in this field. Any employer
              would be happy to have you in their team, Octavian!"
            </p>
            <p className="italic dark:text-[#86198f]">- Diana Dinu</p>
            <p className="dark:text-[#86198f]">
              &#40;Aspiring front-end developer&#41;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
