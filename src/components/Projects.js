import React from "react";
import ProjectItem from "./ProjectItem";
import SportAddictsImg from "../../public/assets/sport-addicts.png";
import DentalClinicImg from "../../public/assets/dental-clinic.png";
import PersonalPortofolioImg from "../../public/assets/portofolio.png";

const Projects = () => {
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#86198f]">
          Projects
        </p>
        <h2 className="py-4 sm:text-4xl">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Sport Addicts"
            backgroundImg={SportAddictsImg}
            tech="javascript, parcel, supabase, css, html"
            projectUrl="/sportAddicts"
          />
          <ProjectItem
            title="Dental Clinic"
            backgroundImg={DentalClinicImg}
            tech="css, html"
            projectUrl="/dentalClinic"
          />
          <ProjectItem
            title="Personal Portofolio"
            backgroundImg={PersonalPortofolioImg}
            tech="React, Next.Js, Framer, Tailwind, css, html"
            projectUrl="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
