import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("soft");

  const setBg = (active) =>
    activeTab === active ? "bg-[#f3e523]" : "bg-[#d4d4d4]";

  return (
    <div className="flex">
      {["soft", "hard"].map((el) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBg(el)}`}
          onClick={() => setActiveTab(el)}
        >
          {el} Skills
        </button>
      ))}
    </div>
  );
};

export default Skills;
