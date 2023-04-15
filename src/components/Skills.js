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
    <div className="container">
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
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {SoftSkills.map((record) => {
            return (
              <div key={record.id} className="left-list">
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
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {HardSkills.map((record) => {
            return (
              <div key={record.id} className="right-list">
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
