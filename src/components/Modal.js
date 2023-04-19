import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import Courses from "./Courses";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  //function, so that you can interact with the modal and not close it when u click it
  const handleCLose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 scroll-bar"
      id="wrapper"
      onClick={handleCLose}
    >
      <div className="flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          &#10005;
        </button>
        <div className="bg-white p-2 rounded scroll-div h-[400px]">
          <Experience />
          <Education />
          <Courses />
        </div>
      </div>
    </div>
  );
};
export default Modal;
