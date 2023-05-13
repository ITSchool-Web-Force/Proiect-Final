import React from "react";
import { FiDownload } from "react-icons/fi";

const Footer = () => {
  const getTheYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
  };

  return (
    <>
      <footer className="w-full font-medium text-lg bg-[#5a82ba]">
        <div className="py-3 flex items-center justify-around md:px-8">
          <span className="text-white">
            {getTheYear()} &copy; All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
