import React from "react";

//Framer Motion library for React
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  about,
  bulletOne,
  bulletTwo,
  bulletThree,
  bulletFour,
  sideProjectTitle,
  sideProject,
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
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-violet-700 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-gray-500">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{about}</p>
        <ul>
          <li>{bulletOne}</li>
          <li>{bulletTwo}</li>
          <li>{bulletThree}</li>
          <li>{bulletFour}</li>
        </ul>
        <p className="font-medium w-full">{sideProjectTitle}</p>
        <p className="">{sideProject}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="">
      <h2 className="font-bold text-4xl mb-10 w-full text-center">
        Work Experience
      </h2>
      <div ref={ref} className="mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-4 top-0 w-[4px] h-full bg-[black] origin-top"
        />

        <ul className="">
          <Details
            position="Web Editor"
            company="Meia Calze SRL"
            companyLink="https://www.meia.ro/home"
            time="march 2023 - Present"
            address="Bulevardul Iuliu Maniu, nr. 7, Corp A, Sc. 1, Et. 1, Sector 6, Bucuresti"
            about="online shop specialized in compression stockings, stockings /
           tights for women and children, tights as well as shapewear."
            bulletOne="&bull; creating discount codes for vouchers using 2Performant"
            bulletTwo="&bull; adding meta tags to provide additional information about a
           page to search engines and other clients"
            bulletThree="&bull; placing banners in dashboard for each new campaign"
            bulletFour="&bull; setting prices depending on the sales volume"
            sideProjectTitle="Projects:"
            sideProject="building a presentation single-page website for GwagTrade, a
            company specialized in fertilizers import and distribution and
            grains export."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
