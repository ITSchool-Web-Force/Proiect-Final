import React from "react";
import ProjectItem from "./ProjectItem";
import SportAddictsImg from "../../public/assets/sport-addicts.png";
import DentalClinicImg from "../../public/assets/dental-clinic.png";
import chuckNorrisJokeGenerator from "../../public/assets/chuckNorrisJokeGenerator.png";
import musicEightisRetrospective from "../../public/assets/musicEightisRetrospective.png";
import Cinethrill from "../../public/assets/Cinethrill.png";
import groceryList from "../../public/assets/groceryList.jpg";

const Projects = () => {
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#86198f]">
          Projects
        </p>
        <h2 className="py-4 sm:text-4xl dark:text-white">
          What I&apos;ve Built
        </h2>
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
            title="Chuck Norris Joke Generator"
            backgroundImg={chuckNorrisJokeGenerator}
            tech="css, html, sass, chucknorris api, javascript"
            projectUrl="/chuckNorrisRandomJokeGenerator"
          />
          <ProjectItem
            title="80s Retrospective"
            backgroundImg={musicEightisRetrospective}
            tech="css, html, sass, javascript"
            projectUrl="/eightisRetrospective"
          />
          <ProjectItem
            title="Cinethrill"
            backgroundImg={Cinethrill}
            tech="css, html, sass, javascript"
            projectUrl="/cinethrill"
          />
          <ProjectItem
            title="Grocery List"
            backgroundImg={groceryList}
            tech="php, mysql, css, html, javascript, openwheater api"
            projectUrl="/groceryListApp"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
