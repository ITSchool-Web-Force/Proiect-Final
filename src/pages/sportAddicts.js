import React from "react";
import Logo from "@/components/Logo";
import Image from "next/image";
import SportAddictsImg from "../../public/assets/sport-addicts.png";

import { RiRadioButtonFill } from "react-icons/ri";

const sportAddicts = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[60h] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60h] bg-black/70 z-10">
          <Logo />
        </div>
        <Image
          className="absolute z-1 object-cover"
          fill
          src={SportAddictsImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] text-white z-10 p-2 translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Sport Addicts</h2>
          <h3>javascript, parcel, supabase, css, html</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project </p>
          <h2 className="font-bold">Overview</h2>
          <p>
            Responsive Javascript fitness and health website. schedule program
            it's displayed from an object where I fetch some data; form
            connected to Supabase, tabs interface using data-target; a BMI which
            calculates the ideal weight and displays a msg using the DOM; pop-up
            copyright for when a user tries to copy a text, also using the DOM,
            works only for pricing plan title.
          </p>
          <button className="mr-8 btn-projects">Code</button>
          <button className="btn-projects">Live Demo</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Css 3
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML 5
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Supabase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sportAddicts;
