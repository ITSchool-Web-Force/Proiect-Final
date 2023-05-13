import React, { useState, useEffect } from "react";

//import icon
import { FiChevronUpIcon } from "react-icons/fi";

const BackToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button onCLick={() => scrollToTop()} className="bg-accent w-12 h-12">
        <FiChevronUpIcon className="w-6 h-6 hover:bg-accent-hover text-white rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all" />
      </button>
    )
  );
};

export default BackToTopBtn;
