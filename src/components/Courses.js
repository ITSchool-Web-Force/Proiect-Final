import React from "react";

//Framer Motion library for React
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, title, degree, credential }) => {
  const ref = useRef(null);

  return (
    <li className="my-8 first:mt-0 last:mb:0 w-[80%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-gray-500">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{degree}</p>
        <p className="font-medium w-full">{title}</p>
        <p className="">{credential}</p>
      </motion.div>
    </li>
  );
};

const Courses = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="">
      <h2 className="font-bold text-4xl mb-10 w-full text-center">Courses</h2>
      <div ref={ref} className="mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-4 top-0 w-[4px] h-full bg-[black] origin-top"
        />

        <ul className="">
          <Details
            type="student react dev"
            time="dec. 2022 - Present"
            place="IT School | Online course"
            title="'Web Development' professional training
            course for obtaining the Junior Front-end Developer qualification"
          />
          <Details
            type="student backend dev"
            time="sept. 2021 - jan. 2022"
            place="Atelierele Ilbah, Bucharest"
            title="'Back-end Developer' professional training course to obtain the IT
            system programmer qualification"
            degree="programmer information system"
            credential="Credential ID: COR code: 251204"
          />
          <Details
            type="student frontend dev"
            time="apr. 2021 - sept. 2021"
            place="Atelierele Ilbah, Bucharest"
            title="Front-end Developer' professional training course to obtain the
            qualification of programmer helper"
            degree="programmer helper"
            credential="Credential ID: COR code: 351201"
          />
        </ul>
      </div>
    </div>
  );
};

export default Courses;
