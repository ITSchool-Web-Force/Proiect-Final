import React from "react";
import { FiDownload } from "react-icons/fi";

const Footer = () => {
  const getTheYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
  };

  return (
    <>
      <footer className="w-full font-medium text-lg bg-[#bcbbbb]">
        <div className="py-4 flex items-center justify-around md:px-8">
          <span>{getTheYear()} &copy; All Rights Reserved.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
