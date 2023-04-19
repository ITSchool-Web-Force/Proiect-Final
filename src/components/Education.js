import React from "react";

//Framer Motion library for React
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  type,
  time,
  place,
  degree,
  intership,
  activities,
  certificates,
}) => {
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
        <p className="">{activities}</p>
        <p className="">{certificates}</p>
        <p className="">{intership}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="">
      <h2 className="font-bold text-4xl mb-10 w-full text-center">Education</h2>
      <div ref={ref} className="mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-4 top-0 w-[4px] h-full bg-[black] origin-top"
        />

        <ul className="">
          <Details
            type="college student construction engineer"
            time="2012 - 2020"
            place="Faculty of Building Services Engineering,Technical University of Constructuion,
            Bucharest"
            degree="Bachelor's degree: Rehabilitation of
            termal energy supply system through the
            use of insulated pipes"
            intership="Project 'Practica pentru cariera ta! TECAR' | Romstal"
          />
          <Details
            type="pupil"
            time="2008 - 2012"
            place="National College 'Ion Creanga', Bucharest"
            degree="math & computer science"
            activities="math olympiad contests | IT certificates | European Computer Driving Licence (ECDL) | cross running competitions"
            certificates="Certificate: First Certificate in English(FCE) | British Council"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
