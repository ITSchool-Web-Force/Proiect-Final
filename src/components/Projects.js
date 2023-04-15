import React from "react";
import ProjectItem from "./ProjectItem";
import SportAddictsImg from "../../public/assets/sport-addicts.png";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#86198f]">
          Projects
        </p>
        <h2 className="py-4 sm:text-4xl">What I've Built</h2>
        <div className="grid md:-grid-cols-2 gap-8">
          <ProjectItem
            title="Sport Addicts"
            backgroundImg={SportAddictsImg}
            tech="javascript, supabase, css, html"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
