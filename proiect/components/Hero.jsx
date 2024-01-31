import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => (
  <div
    className="flex items-center justify-center h-[30vh]
  mb-12 bg-fixed bg-center bg-cover custom-img"
  >
    <div className="absolute top-0 left-0 right-0 bottom-[70%] bg-black/70" />
    <div className="text-white z-[2] sm:max-w-[500px] px-3">
      <div className="flex flex-col items-start gap-5 sm:flex-row">
        <div className="flex flex-col font-bold text-sm md:text-lg gap-1">
          <h2 className=" ">
            Salut,ma numesc Honigschnabel Nicolas si imi place fotografia.
          </h2>
          <p>Contacteaza-ma pentru mai multe informatii</p>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
