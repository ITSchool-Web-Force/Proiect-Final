import React, { Children } from "react";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  //function, so that you can interact with the modal and not close it when u click it
  const handleCLose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleCLose}
    >
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          &#10005;
        </button>
        <div className="bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  );
};
export default Modal;
