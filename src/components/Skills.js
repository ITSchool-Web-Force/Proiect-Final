import { useState } from "react";

//import data from object
import SoftSkills from "../data/soft-skills.json";
import HardSkills from "../data/hard-skills.json";

function Skills() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container-skills max-w-[1240px]" id="skills">
      <p className="text-xl tracking-widest uppercase text-[#86198f] bg-white dark:bg-gray-900">
        Skills
      </p>
      <h2 className="py-4 sm:text-4xl bg-white dark:bg-gray-900">
        Skills I posssess
      </h2>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          SOFT SKILLS
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          HARD SKILLS
        </button>
      </div>
      <div className="content-tabs">
        <div
          className={
            toggleState === 1
              ? "content  active-left-content dark:bg-gray-900"
              : "content"
          }
        >
          {SoftSkills.map((record) => {
            return (
              <div key={record.id}>
                <ul className="py-2 gap-5">
                  <li className="skill">
                    <span> {record.icon}</span> {record.skill}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>

        <div
          className={
            toggleState === 2
              ? "content  active-right-content dark:bg-gray-900"
              : "content"
          }
        >
          {HardSkills.map((record) => {
            return (
              <div key={record.id}>
                <ul className="py-2 gap-5">
                  <li className="skill">
                    <span> {record.icon}</span> {record.skill}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
