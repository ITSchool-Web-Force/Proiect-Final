import React from "react";
import Image from "next/image";
import { AnimalData, CarsData, WorkData } from "./data/WorkData";

const Horizontal = () => {
  return <hr className="w-[90vw] my-2 mx-auto" />;
};

const WorkImage = () => {
  return (
    <div className="w-[90vw] mx-auto">
      <p className="text-2xl font-bold">Galerie</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pb-3">
        {WorkData.map((work, index) => {
          return (
            <div key={index}>
              <Image src={work.image} width={300} height={100} alt="/" />
            </div>
          );
        })}
      </div>
      <Horizontal />
    </div>
  );
};

export default WorkImage;
