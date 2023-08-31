import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => (
  <div
    className="flex items-center justify-center h-[50vh]
  mb-12 bg-fixed bg-center bg-cover custom-img"
  >
    <div className="absolute top-0 left-0 right-0 bottom-[50%] bg-black/70" />
    <div className="text-white z-[2] sm:max-w-[500px] px-3">
      <div className="flex flex-col items-start gap-5 sm:flex-row">
        <Image
          src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80"
          alt="/"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="flex flex-col font-bold text-sm md:text-lg gap-1">
          <h2 className=" ">Hi,I'm Andrew, 20 Years old,Proffesional Photographer</h2>
          <p>Contact me for more</p>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
